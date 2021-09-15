import { Service } from "@bluelibs/core";
import { ToDoListListFiltersForm as BaseToDoListListFiltersForm } from "./ToDoListListFiltersForm.base";

@Service({ transient: true })
export class ToDoListListFiltersForm extends BaseToDoListListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
