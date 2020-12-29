import React from "react"
import { Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { ProfileStackParameters } from "../../constants/types"

export const Profile = ({ navigation }: Props) => {
	return (
		<ScreenContainer>
			<Text>ProfileView View Screen</Text>
			<Button title="Edit Profile" onPress={() => navigation.push("EditProfile")} />
			<Button title="Already Rented" onPress={() => navigation.push("AlreadyRented")} />
			<Button title="My Listings" onPress={() => navigation.push("MyListings")} />
			<Button title="Dataprivacy" onPress={() => navigation.push("DataPrivacy")} />
			<Button title="Settings" onPress={() => navigation.push("Settings")} />
		</ScreenContainer>
	)
}

interface Props {
	navigation: StackNavigationProp<ProfileStackParameters>
}
