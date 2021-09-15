import { ToDoList } from "./collections/ToDoList"
import { Users } from "./collections/Users"
import { generateProject, app } from "./utils"

const application = app({
	id: "ToDoList",
	sharedModels: [
		// Configure shared models
	],
	collections: [Users, ToDoList],
})

generateProject(application, {
	// Mark this as true when you want to override even the non-overridable files
	// override: true,
})
