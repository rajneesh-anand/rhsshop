import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import ProductResolver from "./services/product/product.resolver";
import CategoryResolver from "./services/category/category.resolver";
import CustomerResolver from "./services/customer/customer.resolver";
import CouponResolver from "./services/coupon/coupon.resolver";
import OrderResolver from "./services/order/order.resolver";
import StaffResolver from "./services/staff/staff.resolver";
const app: express.Application = express();
const path = "/admin/graphql";
const PORT = process.env.PORT || 4000;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      ProductResolver,
      CategoryResolver,
      CustomerResolver,
      OrderResolver,
      CouponResolver,
      StaffResolver,
    ],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
  });

  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
};

main();
