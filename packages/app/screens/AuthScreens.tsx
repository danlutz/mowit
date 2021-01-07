import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { SignIn } from "../components/Auth/SignIn"
import { CreateAccount } from "../components/Auth/CreateAccount"
import { ForgotPassword } from "../components/Auth/ForgotPassword"
import { Verification } from "../components/Auth/Verification"
import { CreateAccount2 } from "../components/Auth/CreateAccount2"

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

const ScreenContainer = ({ children }: { children: React.ReactNode }) => (
	<View style={styles.container}>{children}</View>
)

export const SignInScreen = () => {
	return (
		<ScreenContainer>
			<SignIn />
		</ScreenContainer>
	)
}

export const CreateAccountScreen = () => {
	return (
		<ScreenContainer>
			<CreateAccount />
		</ScreenContainer>
	)
}

export const CreateAccountScreen2 = () => {
	return (
		<ScreenContainer>
			<CreateAccount2 />
		</ScreenContainer>
	)
}

export const ForgotPasswordScreen = () => {
	return (
		<ScreenContainer>
			<ForgotPassword />
		</ScreenContainer>
	)
}

export const VerificationScreen = () => {
	return (
		<ScreenContainer>
			<Verification />
		</ScreenContainer>
	)
}
