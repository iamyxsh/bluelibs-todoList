/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class ToDoListInsertInput {
  @Is(a.boolean().nullable())
  isCompleted?: boolean;

  @Is(a.string().nullable())
  title?: string;
}
