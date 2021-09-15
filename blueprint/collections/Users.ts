import { collection, field, shortcuts } from "../utils"

export const Users = collection({
	id: "Users",
	representedBy: "fullName",
	behaviors: {
		softdeletable: true,
	},
	fields: [
		...shortcuts.fields.user.standard(),
		shortcuts.field.user.password(),
		shortcuts.field.softdeletable(),
		field({
			id: "fullName",
			type: field.types.STRING,
			isReducer: true,
		}),
		field({
			id: "email",
			type: field.types.STRING,
			isReducer: true,
		}),
		field({
			id: "roles",
			type: field.types.ENUM,
			enumValues: ["USER", "ADMIN"],
			isReducer: true,
			isArray: true,
		}),
	],
})
