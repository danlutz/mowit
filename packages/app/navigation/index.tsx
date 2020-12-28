import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { ColorSchemeName } from "react-native"
import Onboarding from "../components/Onboarding/Onboarding"

import NotFoundScreen from "../screens/NotFoundScreen"
import OnboardingScreen from "../screens/OnboardingScreen"
import TabOneScreen from "../screens/TabOneScreen"
import BottomTabNavigator from "./BottomTabNavigator"
import LinkingConfiguration from "./LinkingConfiguration"

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	)
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator()

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
			<Stack.Screen
				name="Onboarding"
				component={OnboardingScreen}
				options={{ title: "Onboarding" }}
			/>
			<Stack.Screen name="Home" component={BottomTabNavigator} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
		</Stack.Navigator>
	)
}
