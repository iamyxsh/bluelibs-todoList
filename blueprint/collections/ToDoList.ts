import { collection, field, shortcuts } from "../utils"

export const ToDoList = collection({
	id: "ToDoList",
	representedBy: "title",
	behaviors: {
		softdeletable: true,
	},
	fields: [
		shortcuts.field.softdeletable(),
		...shortcuts.fields.timestampable(),
		field({
			id: "title",
			type: field.types.STRING,
		}),
		field({
			id: "isCompleted",
			type: field.types.BOOLEAN,
		}),
	],
	relations: [...shortcuts.relations.blameable()],
})
