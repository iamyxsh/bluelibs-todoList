import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { User } from "@root/api.types";
import {} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { User };

export class UsersCollection extends Collection<User> {
  getName() {
    return "Users";
  }

  getInputs() {
    return {
      insert: "UserInsertInput!",
      update: "UserUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<User>[] {
    return [];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<User> {
    return {
      createdAt: (v) => new Date(v),
    };
  }
}
