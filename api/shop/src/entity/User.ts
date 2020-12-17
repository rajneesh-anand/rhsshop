import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from "typeorm";

// @ObjectType()
// class Address {
//   @Field((type) => Int)
//   id: string;

//   @Field()
//   type: string;

//   @Field()
//   name: string;

//   @Field()
//   info: string;
// }

// @ObjectType()
// class Contact {
//   @Field(() => Int)
//   id: string;

//   @Field()
//   type: string;

//   @Field()
//   number: string;
// }

// @ObjectType()
// class Card {
//   @Field(() => Int)
//   id: string;

//   @Field()
//   type: string;

//   @Field()
//   name: string;

//   @Field()
//   cardType: string;

//   @Field()
//   lastFourDigit: number;
// }

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  // @Field(() => [Address], { nullable: true })
  // @Column({ type: "jsonb" })
  // address: Address[];

  // @Field(() => [Contact], { nullable: true })
  // @Column({ type: "jsonb" })
  // contact: Contact[];

  // @Field(() => [Card], { nullable: true })
  // @Column({ type: "jsonb" })
  // card: Card[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
