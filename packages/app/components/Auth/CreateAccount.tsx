import React, { useContext } from "react"
import { Alert, Button, TextInput, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"
import AppContext from "../../context/AppContext"

import { registration } from "../../../api/firebase/firebaseAuth"

export const CreateAccount = () => {
	const { signUp } = React.useContext(AuthContext)
	const navigation = useNavigation()
	const [vorname, oncChangeVornameText] = React.useState("")
	const [nachname, onChangeNachnameText] = React.useState("")
	const [email, oncChangeEmailText] = React.useState("")
	const [password, onChangePasswordText] = React.useState("")
	const [passwordRepeat, onchangePasswordRepeatText] = React.useState("")
	const { dispatch } = useContext(AppContext)

	const onLoginSuccess = () => {
		dispatch({ type: "LOGIN" })
	}

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.rentIT}>RENT.IT</Text>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeVornameText(text)}
				value={vorname}
				placeholder={"Vorname"}
			/>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => onChangeNachnameText(text)}
				value={nachname}
				placeholder={"Nachname"}
			/>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeEmailText(text)}
				value={email}
				keyboardType={"email-address"}
				placeholder={"E-Mail"}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textfield}
				onChangeText={(text) => onChangePasswordText(text)}
				value={password}
				placeholder={"Passwort"}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textfield}
				onChangeText={(text) => onchangePasswordRepeatText(text)}
				value={passwordRepeat}
				placeholder={"Passwort bestätigen"}
			/>
			<View style={styles.button}>
				<Button
					color="#FFF"
					title="Registrieren"
					onPress={() =>
						registration(email, password, vorname, nachname).then(onLoginSuccess)
					}
				/>
			</View>
			<Text style={{ paddingTop: 10 }}>
				Beim Registrieren, akzeptierst du unsere AGB und Datenschutzbestimmung{" "}
			</Text>
			<View style={styles.links}>
				<Button
					color="#E67E22"
					title="Du hast bereits einen Account? Jetzt anmelden"
					onPress={() => navigation.goBack()}
				/>
			</View>
		</ScreenContainer>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		alignItems: "center",
		paddingTop: 200,
		fontFamily: "Helvetica Neue",
	},
	rentIT: {
		paddingTop: 10,
		bottom: 80,
		fontSize: 32,
		paddingBottom: 20,
		fontWeight: "bold",
		textAlign: "center",
	},

	textfield: {
		height: 40,
		width: 340,
		marginBottom: 10,
		borderColor: "#F7F9FC",
		borderWidth: 1,
		color: "#000",
		backgroundColor: "#F7F9FC",
	},
	links: {
		marginTop: 30,
	},
	linkszwei: {
		marginBottom: 30,
	},
	button: {
		marginTop: 30,
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
