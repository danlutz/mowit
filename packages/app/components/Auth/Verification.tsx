import React from "react"
import { Alert, Button } from "react-native"
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

export const Verification = () => {
	const { emailVerified } = React.useContext(AuthContext)

	const cellCount = 6
	const [value, setValue] = React.useState("")
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
		<ScreenContainer>
			<Text>Underline example</Text>
			<CodeField
				ref={ref}
				{...props}
				value={value}
				onChangeText={setValue}
				cellCount={cellCount}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				renderCell={({ index, symbol, isFocused }) => (
					<View onLayout={getCellOnLayoutHandler(index)} key={index}>
						<Text>{symbol || (isFocused ? <Cursor /> : null)}</Text>
					</View>
				)}
			/>
			<Button title="Email Verified" onPress={() => validateCode()} />
		</ScreenContainer>
	)
}
