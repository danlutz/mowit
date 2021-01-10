import React from "react"
import { Button, StyleSheet, TouchableOpacity, Image } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text, View } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { ProfileStackParameters } from "../../constants/types"
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from "../../constants/context"

export const Profile = ({ props }: Props) => {
	const navigation = useNavigation()
	const { signOut } = React.useContext(AuthContext)

	return (
		<ScreenContainer style={styles.container}>
			<View>
				<TouchableOpacity style={styles.buttonProfileStyle} activeOpacity={0.5}>
					<Image
						source={require("../../assets/images/profilImage.png")}
						style={styles.buttonImageIconStyleProfile}
					/>
					<Text style={styles.buttonTextStyleHead}>Max Mustermann </Text>
					<View style={styles.buttonTextStyleHead}>
						<Button
							title="Edit"
							color="#E67E22"
							onPress={() => navigation.push("EditProfile")}
						/>
					</View>
					<View style={styles.buttonIconSeparatorStyle} />
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.buttonProfileStyle} activeOpacity={0.5}>
					<Image
						source={require("../../assets/images/myproducts.png")}
						style={styles.buttonImageIconStyleNormal}
					/>
					<View style={styles.buttonTextStyleHead}>
						<Button
							title="Meine Produkte"
							color="#222B45"
							onPress={() => navigation.push("MyListings")}
						/>
					</View>
					<View style={styles.buttonIconSeparatorStyle} />
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.buttonProfileStyle} activeOpacity={0.5}>
					<Image
						source={require("../../assets/images/verlauf.png")}
						style={styles.buttonImageIconStyleNormal}
					/>
					<View style={styles.buttonTextStyleHead}>
						<Button
							title="Bereits ausgeliehene Produkte"
							color="#222B45"
							onPress={() => navigation.push("AlreadyRented")}
						/>
					</View>
					<View style={styles.buttonIconSeparatorStyle} />
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.buttonProfileStyle} activeOpacity={0.5}>
					<Image
						source={require("../../assets/images/faq.png")}
						style={styles.buttonImageIconStyleNormal}
					/>
					<View style={styles.buttonTextStyleHead}>
						<Button
							title="Allgemeine Infos und FAQ's"
							color="#222B45"
							onPress={() => navigation.push("DataPrivacy")}
						/>
					</View>
					<View style={styles.buttonIconSeparatorStyle} />
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.buttonProfileStyle} activeOpacity={0.5}>
					<Image
						source={require("../../assets/images/settings.png")}
						style={styles.buttonImageIconStyleNormal}
					/>
					<View style={styles.buttonTextStyleHead}>
						<Button
							title="Einstellungen"
							color="#222B45"
							onPress={() => navigation.push("Settings")}
						/>
					</View>
					<View style={styles.buttonIconSeparatorStyle} />
				</TouchableOpacity>
			</View>
			<Button color="#E67E22" title="Abmelden" onPress={() => signOut()} />
		</ScreenContainer>
	)
}

interface Props {
	props: StackNavigationProp<ProfileStackParameters>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		paddingTop: 100,
		fontFamily: "Helvetica Neue",
	},
	buttonProfileStyle: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderWidth: 0.5,
		borderTopColor: "#F9F9F9",
		borderBottomColor: "#F9F9F9",
		borderColor: "#FFF",
		height: 50,
		margin: 5,
		marginBottom: 20,
	},
	buttonImageIconStyleProfile: {
		padding: 10,
		margin: 5,
		height: 80,
		width: 80,
		resizeMode: "stretch",
	},
	buttonImageIconStyleNormal: {
		padding: 10,
		margin: 5,
		marginBottom: 10,
		height: 25,
		width: 25,
		resizeMode: "stretch",
	},
	buttonIconSeparatorStyle: {
		backgroundColor: "#fff",
		width: 1,
		height: 40,
	},
	buttonTextStyleHead: {
		color: "#222B45",
		fontWeight: "bold",
		fontSize: 22,
		marginBottom: 4,
		marginLeft: 10,
	},
	buttonTextStyleBody: {
		color: "#fff",
		marginBottom: 4,
		marginLeft: 10,
	},
	links: {
		color: "#222B45",
		marginBottom: 4,
		marginLeft: 10,
	},
})
