import React, { useState, useContext } from "react"
import { Alert, Button, TextInput } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Picker } from "@react-native-picker/picker"

import { Text } from "../Themed"
import CameraPreview from "../CameraPreview"
import AppContext, { Product } from "../../context/AppContext"

const availableCategories = [
	"Elektrogeräte",
	"Gartengeräte",
	"Werkzeug",
	"Heizen & Klima",
	"Handwerkzeuge",
	"Kleingeräte",
]

const validateUserInput = (name: string, description: string, rentPriceEuros: number) => {
	return !!name && !!description && rentPriceEuros > 0
}

export const AddListing = () => {
	const { dispatch } = useContext(AppContext)
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [selectedCategory, setSelectedCategory] = useState(availableCategories[0])
	const [rentPriceEurosPerHours, setRentPriceEurosPerHours] = useState(0)

	const onSubmit = () => {
		const isValid = validateUserInput(name, description, Number(rentPriceEurosPerHours))

		if (!isValid) {
			Alert.alert("Bitte validieren sie Ihre Eingabe")
			return
		}

		const product: Product = {
			name,
			description,
			rentPriceEurosPerHours: Number(rentPriceEurosPerHours),
			category: selectedCategory,
		}

		dispatch({
			type: "ADD_PRODUCT",
			payload: product,
		})

		Alert.alert("Produkt wurde platziert")
	}

	return (
		<ScreenContainer>
			<Text>Produkt platzieren</Text>
			<TextInput value={name} onChangeText={setName} placeholder="Name" />
			<TextInput
				value={description}
				onChangeText={setDescription}
				placeholder="Beschreibung"
			/>
			<TextInput
				value={rentPriceEurosPerHours}
				onChangeText={setRentPriceEurosPerHours}
				placeholder="Leihgebühr"
				keyboardType="number-pad"
			/>

			<Picker
				mode="dropdown"
				selectedValue={selectedCategory}
				onValueChange={setSelectedCategory}
			>
				{availableCategories.map((category) => {
					return <Picker.Item key={category} label={category} value={category} />
				})}
			</Picker>

			<Button title="Produkt platzieren" onPress={onSubmit} />
		</ScreenContainer>
	)
}
