import { Service } from "@bluelibs/core";
import { ToDoListCreateForm as BaseToDoListCreateForm } from "./ToDoListCreateForm.base";

@Service({ transient: true })
export class ToDoListCreateForm extends BaseToDoListCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
