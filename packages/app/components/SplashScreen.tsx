import React from "react"
import { StyleSheet, Text, View } from "react-native"

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<Text> Loading... </Text>
		</View>
	)
}

export default SplashScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 5,
	},
})
