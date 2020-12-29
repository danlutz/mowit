import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { ProfileStackParameters } from "../../constants/types"

const EditProfile = ({ navigation }: Props) => {
	return (
		<ScreenContainer>
			<Text>Editprofile Screen</Text>
			<Button title="OK" onPress={() => Alert.alert("OK")} />
		</ScreenContainer>
	)
}

interface Props {
	navigation: StackNavigationProp<ProfileStackParameters>
}

export default EditProfile
