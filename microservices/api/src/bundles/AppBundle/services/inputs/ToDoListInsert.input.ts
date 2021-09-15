import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ToDoListInsertInput as BaseToDoListInsertInput } from "./ToDoListInsert.input.base";

@Schema()
export class ToDoListInsertInput extends BaseToDoListInsertInput {
  // You can extend the base here
}
