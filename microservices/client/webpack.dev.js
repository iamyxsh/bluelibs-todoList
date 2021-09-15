/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = (env) =>
	merge(common(env), {
		mode: "development",
		devtool: "source-map",
		devServer: {
			contentBase: "./dist",
		},
		// plugins: [
		// 	new webpack.ProvidePlugin({
		// 		Buffer: ["buffer", "Buffer"],
		// 	}),
		// 	new webpack.ProvidePlugin({
		// 		process: "process/browser",
		// 	}),
		// ],
	})
