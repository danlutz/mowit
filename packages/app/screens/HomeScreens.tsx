import React from "react"
import { Alert, Button, StyleSheet, View } from "react-native"
import { Profile } from "../components/Profile/Profile"
import { AddListing } from "../components/CreateListing/AddListing"
import { CategoryView } from "../components/Explore/CategoryView"
import { TabStackParameters } from "../constants/types"
import { StackNavigationProp } from "@react-navigation/stack"

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

//TAB SCREENS
export const ProfileScreen = ({ navigation }: Props) => {
	return (
		<ScreenContainer>
			<Profile />
		</ScreenContainer>
	)
}

export const ExploreScreen = () => {
	return (
		<ScreenContainer>
			<CategoryView />
		</ScreenContainer>
	)
}
export const AddListingScreen = () => {
	return (
		<ScreenContainer>
			<AddListing />
		</ScreenContainer>
	)
}

interface Props {
	navigation: StackNavigationProp<TabStackParameters>
}
