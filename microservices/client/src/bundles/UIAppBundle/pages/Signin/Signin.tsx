import React, { useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { use, useGuardian, useRouter } from "@bluelibs/x-ui"
import { UserCollection } from "@bundles/UIAppBundle/collections"
import { HOME } from "@bundles/UIAppBundle/routes"

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

export default function SignIn() {
	const classes = useStyles()
	// const userCollection = use(UserCollection)
	const router = useRouter()
	const guardian = useGuardian()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const login = async (e: React.MouseEvent<any, MouseEvent>) => {
		e.preventDefault()
		// const token = await userCollection.login({
		// 	username: email,
		// 	password,
		// })
		// if (token) {
		// 	router.go(HOME)
		// }

		guardian.login(email, password).then((res) => {
			router.go(HOME)
		})
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={(e) => login(e)}
					>
						Sign In
					</Button>
				</form>
			</div>
		</Container>
	)
}
