import React, { useContext } from "react"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ColorSchemeName } from "react-native"
import Onboarding from "../components/Onboarding/Onboarding"
import { CreateAccount } from "../components/Auth/CreateAccount"
import { SignIn } from "../components/Auth/SignIn"
import AppContext from "../context/AppContext"

// NEW IMPORT FOR NAVIGATION
import { ProfileScreen, ExploreScreen, AddListingScreen } from "../screens/HomeScreens"
import {
	AlreadyRentedScreen,
	DataprivacyScreen,
	SettingsScreen,
	EditProfileScreen,
	MyListingsScreen,
	ChangeEMailScreen,
	ChangePasswordScreen,
	EMailVerifyScreen,
} from "../screens/ProfileScreens"
import { CategoryDetailViewScreen, ProductDetailViewScreen } from "../screens/ExploreScreens"

import {
	ExploreStackParameters,
	ProfileStackParameters,
	TabStackParameters,
	OnboardingAuthStackParameters,
} from "../constants/types"
import {
	CreateAccountScreen,
	ForgotPasswordScreen,
	SignInScreen,
	VerificationScreen,
} from "../screens/AuthScreens"
import LinkingConfiguration from "./LinkingConfiguration"
import SplashScreen from "../components/SplashScreen"

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const OnboardingAuthStack = createStackNavigator<OnboardingAuthStackParameters>()
const Tabs = createBottomTabNavigator<TabStackParameters>()
const ProfileStack = createStackNavigator<ProfileStackParameters>()
const ExploreStack = createStackNavigator<ExploreStackParameters>()
const AddListingStack = createStackNavigator()

const ProfileStackScreen = () => (
	<ProfileStack.Navigator>
		<ProfileStack.Screen name="Profile" component={ProfileScreen} />
		<ProfileStack.Screen name="AlreadyRented" component={AlreadyRentedScreen} />
		<ProfileStack.Screen name="DataPrivacy" component={DataprivacyScreen} />
		<ProfileStack.Screen name="Settings" component={SettingsScreen} />
		<ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
		<ProfileStack.Screen name="MyListings" component={MyListingsScreen} />
		<ProfileStack.Screen name="ChangeEMail" component={ChangeEMailScreen} />
		<ProfileStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
		<ProfileStack.Screen name="EMailVerify" component={EMailVerifyScreen} />
	</ProfileStack.Navigator>
)

const ExploreStackScreen = () => (
	<ExploreStack.Navigator>
		<ExploreStack.Screen name="CategoryView" component={ExploreScreen} />
		<ExploreStack.Screen name="CategoryDetailView" component={CategoryDetailViewScreen} />
		<ExploreStack.Screen name="ProductDetailView" component={ProductDetailViewScreen} />
	</ExploreStack.Navigator>
)

const AddListingStackScreen = () => (
	<AddListingStack.Navigator>
		<AddListingStack.Screen name="Addlisting" component={AddListingScreen} />
	</AddListingStack.Navigator>
)

const AuthStackScreen = () => (
	<OnboardingAuthStack.Navigator>
		<OnboardingAuthStack.Screen name="Onboarding" component={Onboarding} />
		<OnboardingAuthStack.Screen name="SignIn" component={SignInScreen} />
		<OnboardingAuthStack.Screen name="CreateAccount" component={CreateAccountScreen} />
		<OnboardingAuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
		<OnboardingAuthStack.Screen name="Verification" component={VerificationScreen} />
	</OnboardingAuthStack.Navigator>
)

const Home = () => (
	<Tabs.Navigator>
		<Tabs.Screen name="Explore" component={ExploreStackScreen} />
		<Tabs.Screen name="AddListing" component={AddListingStackScreen} />
		<Tabs.Screen name="Profile" component={ProfileStackScreen} />
	</Tabs.Navigator>
)

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	//Simulate App Loading:
	const [isLoading, setIsLoading] = React.useState(true)

	const { isLoggedIn } = useContext(AppContext)

	console.log(isLoggedIn)

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1500)
	}, [])

	//Show Loading Screen
	if (isLoading) {
		return <SplashScreen />
	}

	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
		>
			{isLoggedIn ? <Home /> : <AuthStackScreen />}
		</NavigationContainer>
	)
}
