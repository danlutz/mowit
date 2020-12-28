import * as React from "react"
import { StyleSheet } from "react-native"

import Temperature from "../components/Temperature"
import { View } from "../components/Themed"

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Temperature />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
})
