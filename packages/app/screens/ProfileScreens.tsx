import React from "react"
import { StyleSheet, View } from "react-native"

import { AlreadyRented } from "../components/Profile/AlreadyRented"
import { DataPrivacy } from "../components/Profile/Dataprivacy"
import { Settings } from "../components/Profile/Settings"
import EditProfile from "../components/Profile/EditProfile"
import { MyListings } from "../components/Profile/MyListings"
import { ProfileStackParameters } from "../constants/types"
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
export const AlreadyRentedScreen = () => {
	return (
		<ScreenContainer>
			<AlreadyRented />
		</ScreenContainer>
	)
}

export const DataprivacyScreen = () => {
	return (
		<ScreenContainer>
			<DataPrivacy />
		</ScreenContainer>
	)
}
export const SettingsScreen = () => {
	return (
		<ScreenContainer>
			<Settings />
		</ScreenContainer>
	)
}

export const EditProfileScreen = ({ navigation }: Props) => {
	return (
		<ScreenContainer>
			<EditProfile />
		</ScreenContainer>
	)
}
export const MyListingsScreen = () => {
	return (
		<ScreenContainer>
			<MyListings />
		</ScreenContainer>
	)
}

interface Props {
	navigation: StackNavigationProp<ProfileStackParameters>
}
