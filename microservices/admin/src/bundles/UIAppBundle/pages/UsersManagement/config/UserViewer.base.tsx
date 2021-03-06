/** @overridable */
import { User } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class UserViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.users.fields._id"),
        dataIndex: ["_id"],
        render: (value) => {
          const props = {
            type: "objectId",
            value: value.toString(),
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "profile.firstName",
        label: t("management.users.fields.profile.firstName"),
        dataIndex: ["profile", "firstName"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "profile.lastName",
        label: t("management.users.fields.profile.lastName"),
        dataIndex: ["profile", "lastName"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "isEnabled",
        label: t("management.users.fields.isEnabled"),
        dataIndex: ["isEnabled"],
        render: (value) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdAt",
        label: t("management.users.fields.createdAt"),
        dataIndex: ["createdAt"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "fullName",
        label: t("management.users.fields.fullName"),
        dataIndex: ["fullName"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "email",
        label: t("management.users.fields.email"),
        dataIndex: ["email"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "roles",
        label: t("management.users.fields.roles"),
        dataIndex: ["roles"],
        render: (value) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "enum",
                    value,
                    labelify: true,
                  };
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<User> {
    return {
      _id: 1,
      profile: {
        firstName: 1,
        lastName: 1,
      },
      isEnabled: 1,
      createdAt: 1,
      fullName: 1,
      email: 1,
      roles: 1,
    };
  }
}
