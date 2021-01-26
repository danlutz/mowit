import React, { useState, useCallback } from "react"
import { View, Text } from "../Themed"
import { Alert, Button, Image, ImageURISource, StyleSheet } from "react-native"
import { NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack"
import { OnboardingAuthStackParameters } from "../../constants/types"
import { isNonEmptyArray } from "@apollo/client/utilities"
import { StatusBar } from "expo-status-bar"

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
		image: require("../../assets/images/icon.png"),
		description:
			"Mit nur 3 einfachen Klicks, innerhalb kürzester Zeit moderne Gartengeräte mieten.",
		buttonTitle: "WEITER",
	},
	1: {
		id: 1,
		title: "Schnell",
		image: require("../../assets/images/clock.png"),
		description:
			"Du brauchst es jetzt sofort? Kein Problem, dein Gartengerät ist innerhalb einer Stunde bei dir.",
		buttonTitle: "WEITER",
	},
	2: {
		id: 2,
		title: "Günstig",
		image: require("../../assets/images/money.png"),
		description:
			"Wieso kaufen, wenn du es mieten kannst? Miete nur wenn du es auch wirklich brauchst. ",
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

	const skip = () => {
		navigation.navigate("SignIn")
	}
	const step = onboardingStepsByID[currentOnboardingStepID]

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={step.image} />
			<Text style={styles.text}>{step.title}</Text>
			<Text style={styles.description}>{step.description}</Text>
			<View style={styles.button}>
				<Button color="#ffffff" title={step.buttonTitle} onPress={nextStep} />
			</View>
			<View style={styles.skip}>
				<Button color="#E67E22" title="Überspringen" onPress={skip} />
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
		paddingTop: 50,
		fontFamily: "Helvetica Neue",
	},
	text: {
		paddingTop: 40,
		fontSize: 32,
		paddingBottom: 20,
	},
	logo: {
		paddingBottom: 100,
		width: 200,
		height: 200,
	},
	description: {
		minWidth: 250,
		width: 350,
		textAlign: "center",
		fontSize: 16,
	},
	skip: {
		position: "absolute",
		bottom: 25,
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
		textDecorationColor: "#E67E22",
	},
	button: {
		position: "absolute",
		bottom: 100,
		backgroundColor: "#E67E22",
		borderRadius: 4,
		color: "#FFFFFF",
		shadowColor: "#111111",
		shadowOpacity: 0.2,
		textTransform: "uppercase",
		width: 220,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
})

export default Onboarding
