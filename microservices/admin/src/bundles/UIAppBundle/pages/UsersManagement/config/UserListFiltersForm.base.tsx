/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { User, UsersCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class UserListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "profile",
        label: t("management.users.fields.profile"),
        name: ["profile"],
        columns: true,
        nest: [
          {
            id: "firstName",
            label: t("management.users.fields.profile.firstName"),
            name: ["profile", "firstName"],
            required: true,
            render: (props) => (
              <Ant.Form.Item {...props}>
                <Ant.Input />
              </Ant.Form.Item>
            ),
          },

          {
            id: "lastName",
            label: t("management.users.fields.profile.lastName"),
            name: ["profile", "lastName"],
            required: true,
            render: (props) => (
              <Ant.Form.Item {...props}>
                <Ant.Input />
              </Ant.Form.Item>
            ),
          },
        ],
      },

      {
        id: "isEnabled",
        label: t("management.users.fields.isEnabled"),
        name: ["isEnabled"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Radio.Group>
              <Ant.Radio value={false} key={0}>
                No
              </Ant.Radio>
              <Ant.Radio value={true} key={1}>
                Yes
              </Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        ),
      },

      {
        id: "createdAt",
        label: t("management.users.fields.createdAt"),
        name: ["createdAt"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
