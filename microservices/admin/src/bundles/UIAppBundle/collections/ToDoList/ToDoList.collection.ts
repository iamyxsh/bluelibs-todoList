import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { ToDoList } from "@root/api.types";
import { UsersCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { ToDoList };

export class ToDoListCollection extends Collection<ToDoList> {
  getName() {
    return "ToDoList";
  }

  getInputs() {
    return {
      insert: "ToDoListInsertInput!",
      update: "ToDoListUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<ToDoList>[] {
    return [
      {
        collection: () => UsersCollection,
        name: "createdBy",
        field: "createdById",
      },
      {
        collection: () => UsersCollection,
        name: "updatedBy",
        field: "updatedById",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<ToDoList> {
    return {
      createdAt: (v) => new Date(v),
      updatedAt: (v) => new Date(v),
    };
  }
}
