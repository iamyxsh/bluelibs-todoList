import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { ToDoList } from "@bundles/UIAppBundle/collections";
import { ToDoListViewer as BaseToDoListViewer } from "./ToDoListViewer.base";

@Service({ transient: true })
export class ToDoListViewer extends BaseToDoListViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<ToDoList> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
