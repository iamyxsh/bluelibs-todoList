import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { ToDoList } from "@bundles/UIAppBundle/collections";
import { ToDoListList as BaseToDoListList } from "./ToDoListList.base";

@Service({ transient: true })
export class ToDoListList extends BaseToDoListList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<ToDoList> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
