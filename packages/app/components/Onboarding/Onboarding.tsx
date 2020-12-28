import React, { useState, useCallback } from "react"
import { View, Text } from "../Themed"
import { Alert, Button, Image, ImageURISource, StyleSheet } from "react-native"

interface OnboardingStep {
	id: number
	title: string
	image: ImageURISource
	description: string
}

const onboardingStepsByID: { [id: number]: OnboardingStep } = {
	0: {
		id: 0,
		title: "Einfach",
		image: { uri: "https://place-hold.it/250x250" },
		description: "Description 1",
	},
	1: {
		id: 1,
		title: "Schnell",
		image: { uri: "https://place-hold.it/250x250" },
		description: "Description 2",
	},
	2: {
		id: 2,
		title: "Günstig",
		image: { uri: "https://place-hold.it/250x250" },
		description: "Description 2",
	},
}

const Onboarding = () => {
	const [currentOnboardingStepID, setCurrentOnboardingStepID] = useState(
		onboardingStepsByID?.[0]?.id ?? null,
	)

	const nextStep = () => {
		if (currentOnboardingStepID < Object.keys(onboardingStepsByID).length - 1) {
			setCurrentOnboardingStepID(currentOnboardingStepID + 1)
		} else Alert.alert("Onboarding beendet.")
	}
	const step = onboardingStepsByID[currentOnboardingStepID]

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={step.image} />
			<Text>{step.title}</Text>
			<Text>{step.description}</Text>
			<Button title="LOS GEHT'S" onPress={nextStep} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingLeft: 16,
		paddingRight: 16,
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 250,
		height: 250,
	},
})

export default Onboarding
