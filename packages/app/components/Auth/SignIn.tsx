import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { OnboardingAuthStackParameters } from "../../constants/types"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"

export const SignIn = ({ props }: Props) => {
	const { signIn } = React.useContext(AuthContext)
	const navigation = useNavigation()

	return (
		<ScreenContainer>
			<Text>Sign In Screen</Text>
			<Button title="Log In" onPress={() => signIn()} />
			<Button title="Create Account In" onPress={() => navigation.push("CreateAccount")} />
		</ScreenContainer>
	)
}

interface Props {
	props: StackNavigationProp<OnboardingAuthStackParameters>
}
