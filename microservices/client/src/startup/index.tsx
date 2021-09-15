import "reflect-metadata"
import { ThemeProvider } from "@material-ui/core"
import { XUIProvider } from "@bluelibs/x-ui"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { kernel } from "./kernel"
import "./styles.scss"
import theme from "@root/theme/theme"

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<XUIProvider kernel={kernel} />
	</ThemeProvider>,
	document.getElementById("root")
)
