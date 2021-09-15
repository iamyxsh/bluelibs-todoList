import { ObjectId } from "@bluelibs/ejson"
import { use } from "@bluelibs/x-ui"
import { ToDoCollection } from "@bundles/UIAppBundle/collections"
import { Grid, Typography, Checkbox } from "@material-ui/core"
import React from "react"

interface Props {
	title: string
	isCompleted: boolean
	id: string
	setReload: (reload: boolean) => void
}

const ToDoItem = ({ title, isCompleted, id, setReload }: Props) => {
	const todoCollection = use(ToDoCollection)

	const completeTask = async () => {
		todoCollection
			.updateOne(new ObjectId(id), {
				isCompleted: true,
			})
			.then(() => setReload(true))
	}

	return (
		<Grid container>
			<Grid item>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item>
				<Checkbox checked={isCompleted} onClick={completeTask} />
			</Grid>
		</Grid>
	)
}

export default ToDoItem
