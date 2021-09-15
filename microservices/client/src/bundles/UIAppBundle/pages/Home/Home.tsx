import { ObjectId } from "@bluelibs/ejson"
import { use, useGuardian, useRouter } from "@bluelibs/x-ui"
import {
	ToDoCollection,
	UserCollection,
} from "@bundles/UIAppBundle/collections"
import ToDoItem from "@bundles/UIAppBundle/components/Home/ToDoItem"
import { SIGNIN } from "@bundles/UIAppBundle/routes"
import { Typography, Grid, TextField, Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import { ToDoList } from "../../../../../../api/src/bundles/AppBundle/collections"

export const HomePage = () => {
	const guardian = useGuardian()
	const router = useRouter()
	const todoCollection = use(ToDoCollection)
	const { user } = guardian.state

	const [task, setTask] = useState("")
	const [taskList, setTaskList] = useState<ToDoList[]>([])
	const [reload, setReload] = useState<boolean>(false)

	const isLoggedIn = async () => {
		const token = guardian.getToken()
		if (!token) {
			router.go(SIGNIN)
		}
	}

	const enterTask = async () => {
		todoCollection
			.insertOne({
				title: task,
				isCompleted: false,
			})
			.then(() => {
				setReload(true)
				setTask("")
			})
	}

	const loadToDo = async () => {
		const list = await todoCollection.find(
			{
				filters: {
					createdById: new ObjectId(user._id.toString()),
					isCompleted: false,
				},
			},
			{
				_id: 1,
				title: 1,
				isCompleted: 1,
			}
		)
		setTaskList(list)
	}

	useEffect(() => {
		isLoggedIn()
		loadToDo()
		setReload(false)
	}, [reload])

	console.log(taskList)

	return (
		<Grid
			container
			xs={12}
			spacing={6}
			justifyContent="center"
			alignContent="center"
		>
			<Grid item xs={12}>
				<Typography variant="h1" color="primary">
					Welcome to ToDoList
				</Typography>
			</Grid>
			<Grid container item xs={6}>
				<Grid item xs={6}>
					<TextField
						type="text"
						label="Task"
						onChange={(e: any) => setTask(e.target.value)}
					/>
				</Grid>
				<Grid item xs={6}>
					<Button
						style={{ marginTop: "1rem" }}
						color="primary"
						onClick={enterTask}
					>
						Submit
					</Button>
				</Grid>
			</Grid>
			<Grid
				container
				justifyContent="center"
				alignContent="center"
				item
				spacing={2}
				direction="column"
				xs={12}
			>
				{taskList.map((t) => (
					<Grid item>
						<ToDoItem
							title={t.title}
							isCompleted={t.isCompleted}
							id={t._id}
							setReload={(reload: boolean) => setReload(reload)}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}
