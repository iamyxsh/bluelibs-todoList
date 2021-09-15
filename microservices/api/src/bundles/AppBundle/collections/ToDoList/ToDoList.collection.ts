import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./ToDoList.links";
import * as reducers from "./ToDoList.reducers";
import { ToDoList } from "./ToDoList.model";

export class ToDoListCollection extends Collection<ToDoList> {
  static collectionName = "ToDoList";
  static model = ToDoList;

  static links = links;
  static reducers = reducers;

  static behaviors = [
    Behaviors.Timestampable(),

    Behaviors.Blameable(),

    Behaviors.Softdeletable(),

    XBehaviors.Live(),
  ];

  // Create an array of indexes
  static indexes = [
    { key: { isDeleted: 1 } },
    { key: { createdAt: 1 } },
    { key: { createdBy: 1 } },
  ];
}
