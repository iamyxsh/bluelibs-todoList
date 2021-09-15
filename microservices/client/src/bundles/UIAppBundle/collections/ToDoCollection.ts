import { Collection } from "@bluelibs/x-ui"
import { ToDoList } from "../../../../../api/src/bundles/AppBundle/collections/ToDoList/ToDoList.model"

export class ToDoCollection extends Collection<ToDoList> {
	getName() {
		// This is the endpoint name of the crud
		// Queries: postsFind, postsFindOne, postsCount
		// Mutations: postsInsertOne, postsUpdateOne, postsDeleteOne
		return "ToDoList"
	}

	// getInputs() {
	// 	return {
	// 		insert: "ToDoListInsertInput!",
	// 	}
	// }

	getInputs() {
		return {
			insert: "ToDoListInsertInput!",
			update: "ToDoListUpdateInput!",
		}
	}
}
