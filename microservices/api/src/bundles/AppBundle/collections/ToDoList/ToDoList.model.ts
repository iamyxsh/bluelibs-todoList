import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ToDoList as BaseToDoList } from "./ToDoList.model.base";

@Schema()
export class ToDoList extends BaseToDoList {
  // You can extend the base here
}
