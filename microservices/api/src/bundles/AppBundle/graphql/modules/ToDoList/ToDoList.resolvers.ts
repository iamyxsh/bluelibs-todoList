import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  ToDoListInsertInput,
  ToDoListUpdateInput,
} from "../../../services/inputs";
import { ToDoListCollection } from "../../../collections/ToDoList/ToDoList.collection";

export default {
  Query: [
    [],
    {
      ToDoListFindOne: [X.ToNovaOne(ToDoListCollection)],
      ToDoListFind: [X.ToNova(ToDoListCollection)],
      ToDoListCount: [X.ToCollectionCount(ToDoListCollection)],
    },
  ],
  Mutation: [
    [],
    {
      ToDoListInsertOne: [
        X.ToModel(ToDoListInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(ToDoListCollection),
        X.ToNovaByResultID(ToDoListCollection),
      ],
      ToDoListUpdateOne: [
        X.ToModel(ToDoListUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(ToDoListCollection),
        X.ToDocumentUpdateByID(ToDoListCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(ToDoListCollection),
      ],
      ToDoListDeleteOne: [
        X.CheckDocumentExists(ToDoListCollection),
        X.ToDocumentDeleteByID(ToDoListCollection),
      ],
    },
  ],
  Subscription: {
    ToDoListSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(ToDoListCollection)],
    },
    ToDoListSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(ToDoListCollection)],
    },
  },
} as IResolverMap;
