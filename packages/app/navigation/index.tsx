import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as React from "react"
import { ColorSchemeName } from "react-native"
import Onboarding from "../components/Onboarding/Onboarding"
import { CreateAccount } from "../components/Auth/CreateAccount"
import { SignIn } from "../components/Auth/SignIn"

// NEW IMPORT FOR NAVIGATION
import { ProfileScreen, ExploreScreen, AddListingScreen } from "../screens/HomeScreens"
import {
	AlreadyRentedScreen,
	DataprivacyScreen,
	SettingsScreen,
	EditProfileScreen,
	MyListingsScreen,
} from "../screens/ProfileScreens"

import EditProfile from "../components/Profile/EditProfile"

import LinkingConfiguration from "./LinkingConfiguration"
import { from } from "@apollo/client"
import { ProfileStackParameters } from "../constants/types"

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
const OnboardingStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const ProfileStack = createStackNavigator<ProfileStackParameters>()
const ExploreStack = createStackNavigator()
const AddListingStack = createStackNavigator()

const ProfileStackScreen = () => (
	<ProfileStack.Navigator>
		<ProfileStack.Screen name="Profile" component={ProfileScreen} />
		<ProfileStack.Screen name="AlreadyRented" component={AlreadyRentedScreen} />
		<ProfileStack.Screen name="DataPrivacy" component={DataprivacyScreen} />
		<ProfileStack.Screen name="Settings" component={SettingsScreen} />
		<ProfileStack.Screen name="EditProfile" component={EditProfile} />
		<ProfileStack.Screen name="MyListings" component={MyListingsScreen} />
	</ProfileStack.Navigator>
)

const ExploreStackScreen = () => (
	<ExploreStack.Navigator>
		<ExploreStack.Screen name="Explore" component={ExploreScreen} />
	</ExploreStack.Navigator>
)

const AddListingStackScreen = () => (
	<AddListingStack.Navigator>
		<AddListingStack.Screen name="Addlisting" component={AddListingScreen} />
	</AddListingStack.Navigator>
)

function RootNavigator() {
	return (
		<Tabs.Navigator>
			<Tabs.Screen name="Explore" component={ExploreStackScreen} />
			<Tabs.Screen name="AddListing" component={AddListingStackScreen} />
			<Tabs.Screen name="Profile" component={ProfileStackScreen} />
		</Tabs.Navigator>
		// <OnboardingStack.Navigator>
		// 	<OnboardingStack.Screen name="Onboarding" component={Onboarding} />
		// 	<OnboardingStack.Screen name="SignInScreen" component={SignIn} />
		// 	<OnboardingStack.Screen name="CreateAccountScreen" component={CreateAccount} />
		// 	{/* // 	name="Onboarding"
		// 	// 	component={OnboardingScreen}
		// 	// 	options={{ title: "Onboarding" }}
		// 	// />
		// 	// <Stack.Screen name="Home" component={BottomTabNavigator} />
		// 	// <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} /> */}
		// </OnboardingStack.Navigator>
	)
}
