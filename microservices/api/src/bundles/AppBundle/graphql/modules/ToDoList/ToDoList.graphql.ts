export default /* GraphQL */ `
  type Query {
    ToDoListFindOne(query: QueryInput): ToDoList
    ToDoListFindOneByID(_id: ObjectId!): ToDoList
    ToDoListFind(query: QueryInput): [ToDoList]!
    ToDoListCount(query: QueryInput): Int!
  }

  type Mutation {
    ToDoListInsertOne(document: ToDoListInsertInput!): ToDoList
    ToDoListUpdateOne(_id: ObjectId!, document: ToDoListUpdateInput!): ToDoList!
    ToDoListDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    ToDoListSubscription(body: EJSON): SubscriptionEvent
    ToDoListSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
