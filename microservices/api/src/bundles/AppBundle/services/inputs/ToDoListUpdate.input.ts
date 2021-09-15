import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ToDoListUpdateInput as BaseToDoListUpdateInput } from "./ToDoListUpdate.input.base";

@Schema()
export class ToDoListUpdateInput extends BaseToDoListUpdateInput {
  // You can extend the base here
}
