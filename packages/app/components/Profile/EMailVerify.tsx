import React, { useState, useContext } from "react"
import { Alert, Button, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from "react-native-confirmation-code-field"
import Navigation from "../../navigation"

export const EMailVerify = () => {
	const { emailVerified } = useContext(AuthContext)

	const cellCount = 6
	const [value, setValue] = useState("")
	const ref = useBlurOnFulfill({ value, cellCount: cellCount })
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	})

	const validateCode = () => {
		if (value != "698274") {
			Alert.alert("Der eingegebene Code ist falsch.")
		} else {
			emailVerified()
		}
	}

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.rentIT}>RENT.IT</Text>
			<Text>Wir haben dir einen Code gesendet</Text>
			<Text>
				Gib den Code ein um deine Email Adresse max.mustermann@gmail.com zu bestätigen
			</Text>
			<CodeField
				ref={ref}
				{...props}
				value={value}
				onChangeText={setValue}
				cellCount={cellCount}
				rootStyle={styles.codeFieldRoot}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				renderCell={({ index, symbol, isFocused }) => (
					<View onLayout={getCellOnLayoutHandler(index)} key={index}>
						<Text style={[styles.cell, isFocused && styles.focusCell]}>
							{symbol || (isFocused ? <Cursor /> : null)}
						</Text>
					</View>
				)}
			/>
			<View style={styles.button}>
				<Button color="#FFF" title="BESTÄTIGEN" onPress={() => validateCode()} />
			</View>
			<View style={styles.links}>
				<Button
					color="#E67E22"
					title="Keine E-Mail erhalten?"
					onPress={() =>
						Alert.alert(
							"E-Mail nicht erhalten?",
							"Neuen Code auf max.mustermann@gmail.com?",
							[
								{ text: "Abbruch", onPress: () => console.log("cancel") },
								{ text: "OK", onPress: () => Alert.alert("Code zugesendet") },
							],
							{ cancelable: true },
						)
					}
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
	root: {
		padding: 20,
	},
	rentIT: {
		paddingTop: 10,
		bottom: 80,
		fontSize: 32,
		paddingBottom: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	links: {
		marginTop: 30,
	},
	codeFieldRoot: { marginTop: 20 },
	cell: {
		width: 40,
		height: 40,
		marginRight: 5,
		lineHeight: 38,
		fontSize: 24,
		borderWidth: 2,
		borderColor: "#00000030",
		textAlign: "center",
	},
	focusCell: {
		borderColor: "#E67E22",
	},

	button: {
		marginTop: 30,
		alignContent: "center",
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
