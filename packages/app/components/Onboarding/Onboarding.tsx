import React, { useState, useCallback } from "react"
import { View, Text } from "../Themed"
import { Alert, Button, Image, ImageURISource, StyleSheet } from "react-native"
import { NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack"
import { OnboardingAuthStackParameters } from "../../constants/types"

interface OnboardingStep {
	id: number
	title: string
	image: ImageURISource
	description: string
	buttonTitle: string
}

const onboardingStepsByID: { [id: number]: OnboardingStep } = {
	0: {
		id: 0,
		title: "Einfach",
		image: { uri: "https://place-hold.it/250x250" },
		description: "Description 1",
		buttonTitle: "Los geht's",
	},
	1: {
		id: 1,
		title: "Schnell",
		image: { uri: "https://place-hold.it/250x250" },
		description: "Description 2",
		buttonTitle: "Weiter",
	},
	2: {
		id: 2,
		title: "Günstig",
		image: { uri: "https://place-hold.it/250x250" },
		description: "Description 3",
		buttonTitle: "Einloggen",
	},
}

const Onboarding = ({ navigation }: Props) => {
	const [currentOnboardingStepID, setCurrentOnboardingStepID] = useState(
		onboardingStepsByID?.[0]?.id ?? null,
	)

	const nextStep = () => {
		if (currentOnboardingStepID < Object.keys(onboardingStepsByID).length - 1) {
			setCurrentOnboardingStepID(currentOnboardingStepID + 1)
		} else {
			navigation.navigate("SignIn")
		}
	}
	const step = onboardingStepsByID[currentOnboardingStepID]

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={step.image} />
			<Text style={styles.text}>{step.title}</Text>
			<Text>{step.description}</Text>
			<View style={styles.button}>
				<Button title={step.buttonTitle} onPress={nextStep} />
			</View>
		</View>
	)
}

interface Props {
	navigation: StackNavigationProp<OnboardingAuthStackParameters>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 100,
	},
	text: {
		paddingTop: 40,
		fontSize: 32,
		paddingBottom: 20,
	},
	logo: {
		paddingBottom: 100,
		width: 250,
		height: 250,
	},
	description: {},
	button: {
		position: "absolute",
		bottom: 100,
	},
})

export default Onboarding
