import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  TO_DO_LIST_LIST as BASE_TO_DO_LIST_LIST,
  TO_DO_LIST_CREATE as BASE_TO_DO_LIST_CREATE,
  TO_DO_LIST_EDIT as BASE_TO_DO_LIST_EDIT,
  TO_DO_LIST_VIEW as BASE_TO_DO_LIST_VIEW,
} from "./config/routes";

export const TO_DO_LIST_LIST: IRoute = {
  ...BASE_TO_DO_LIST_LIST,
};

export const TO_DO_LIST_CREATE: IRoute = {
  ...BASE_TO_DO_LIST_CREATE,
};

export const TO_DO_LIST_EDIT: IRoute = {
  ...BASE_TO_DO_LIST_EDIT,
};

export const TO_DO_LIST_VIEW: IRoute = {
  ...BASE_TO_DO_LIST_VIEW,
};
