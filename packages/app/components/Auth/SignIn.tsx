import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthStackParameters } from "../../constants/types"

export const SignIn = ({ navigation }: Props) => {
	return (
		<ScreenContainer>
			<Text>Sign In Screen</Text>
			<Button title="Log In" onPress={() => Alert.alert("Login In Pressed")} />
			<Button title="Create Account In" onPress={() => navigation.push("CreateAccount")} />
		</ScreenContainer>
	)
}

interface Props {
	navigation: StackNavigationProp<AuthStackParameters>
}
