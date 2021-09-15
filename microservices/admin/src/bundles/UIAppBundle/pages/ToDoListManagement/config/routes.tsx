/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { ToDoListList } from "../components/List/ToDoListList";
import { ToDoListCreate } from "../components/Create/ToDoListCreate";
import { ToDoListEdit } from "../components/Edit/ToDoListEdit";
import { ToDoListView } from "../components/View/ToDoListView";

import { SettingFilled } from "@ant-design/icons";

export const TO_DO_LIST_LIST: IRoute = {
  path: "/admin/to-do-list",
  component: ToDoListList,
  menu: {
    key: "TO_DO_LIST_LIST",
    label: "management.to_do_list.menu.title",
    icon: SettingFilled,
  },
};

export const TO_DO_LIST_CREATE: IRoute = {
  path: "/admin/to-do-list/create",
  component: ToDoListCreate,
};

export const TO_DO_LIST_EDIT: IRoute<{ id: string }> = {
  path: "/admin/to-do-list/:id/edit",
  component: ToDoListEdit,
};

export const TO_DO_LIST_VIEW: IRoute<{ id: string }> = {
  path: "/admin/to-do-list/:id/view",
  component: ToDoListView,
};
