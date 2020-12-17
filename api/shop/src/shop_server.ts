import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { ProductResolver } from "./services/product/product.resolver";
import { PaymentResolver } from "./services/payment/payment.resolver";
import { OrderResolver } from "./services/order/order.resolver";
import { CouponResolver } from "./services/coupon/coupon.resolver";
import { CategoryResolver } from "./services/category/category.resolver";
import { VendorResolver } from "./services/vendors/vendors.resolver";
import "dotenv/config";
import config from "./ormconfig";
import cors from "cors";
import { __prod__, COOKIE_NAME } from "./constants";

const app: express.Application = express();

const path = "/shop/graphql";
const PORT = process.env.PORT || 4000;

const main = async () => {
  // Postgre Database Connection
  await createConnection(config);
  // const conn = await createConnection(config);
  // await conn.runMigrations();

  // Redis Server
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);
  app.set("trust proxy", 1);

  // CORS Setup
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  // Cookie Session
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
        domain: __prod__ ? ".codeponder.com" : undefined,
      },
      saveUninitialized: false,
      secret: `${process.env.SESSION_SECRET}`,
      resave: false,
    })
  );

  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      ProductResolver,
      PaymentResolver,
      OrderResolver,
      CouponResolver,
      CategoryResolver,
      VendorResolver,
    ],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, redis }),
    introspection: true,
    playground: true,
    tracing: true,
  });

  apolloServer.applyMiddleware({ app, path, cors: false });

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
};

main().catch((error) => {
  console.log(error, "error");
});
