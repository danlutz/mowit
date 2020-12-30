import React from "react"
import { Alert, Button, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import Temperature from "../Temperature"
import { Text } from "../Themed"

export const CategoryView = () => {
	return (
		<ScreenContainer>
			<Text style={styles.placeholderText}>Category View Screen</Text>
			<Text>Wetter Preview: {<Temperature />}</Text>
			<Button title="OK" onPress={() => Alert.alert("OK")} />
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	placeholderText: {
		paddingBottom: 30,
	},
})
