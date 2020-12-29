import React from "react"
import { Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { ProfileStackParameters } from "../../constants/types"
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from "../../constants/context"

export const Profile = ({ props }: Props) => {
	const navigation = useNavigation()
	const { signOut } = React.useContext(AuthContext)

	return (
		<ScreenContainer>
			<Text>ProfileView View Screen</Text>
			<Button title="Edit Profile" onPress={() => navigation.push("EditProfile")} />
			<Button title="Already Rented" onPress={() => navigation.push("AlreadyRented")} />
			<Button title="My Listings" onPress={() => navigation.push("MyListings")} />
			<Button title="Dataprivacy" onPress={() => navigation.push("DataPrivacy")} />
			<Button title="Settings" onPress={() => navigation.push("Settings")} />
			<Button title="Abmelden" onPress={() => signOut()} />
		</ScreenContainer>
	)
}

interface Props {
	props: StackNavigationProp<ProfileStackParameters>
}
