import { Service } from "@bluelibs/core";
import { ToDoListEditForm as BaseToDoListEditForm } from "./ToDoListEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { ToDoList } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class ToDoListEditForm extends BaseToDoListEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<ToDoList> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
