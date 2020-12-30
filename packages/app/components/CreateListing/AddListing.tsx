import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import CameraPreview from "../CameraPreview"
import { Text } from "../Themed"

export const AddListing = () => {
	return (
		<ScreenContainer>
			<CameraPreview />
			<Text>AddListingScreen Screen</Text>
			<Button title="Listing wird hochgeladen" onPress={() => Alert.alert("AddListing")} />
		</ScreenContainer>
	)
}
