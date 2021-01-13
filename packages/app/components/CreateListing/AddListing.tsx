import React, { useState, useContext } from "react"
import { Alert, Button, TextInput, StyleSheet } from "react-native"
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
	const [categoryDisplayed, setCategoryDisplayed] = useState(false)

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

	const onCategoryButtonClick = () => {
		setCategoryDisplayed(!categoryDisplayed)
	}

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.headline}>Produkt platzieren</Text>
			<TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder="Produktname" />
			<Button onPress={onCategoryButtonClick} style={styles.categoryButton} title={"Kategorie auswählen"}/>
			<TextInput
				value={description}
				onChangeText={setDescription}
				placeholder="Beschreibung"
				style={styles.textInput}
			/>
			<TextInput
				value={rentPriceEurosPerHours}
				onChangeText={setRentPriceEurosPerHours}
				placeholder="Leihgebühr"
				keyboardType="number-pad"
				style={styles.textInput}
			/>

			<Picker
				mode="dropdown"
				selectedValue={selectedCategory}
				onValueChange={setSelectedCategory}
				style={categoryDisplayed ? styles.pickerActive : styles.picker}
			>
				{availableCategories.map((category) => {
					return <Picker.Item key={category} label={category} value={category} />
				})}
			</Picker>

			<Button title="Produkt platzieren" onPress={onSubmit} />
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: 'red'
	},
	image: {
		width: '100%'
	},
	categoryButton: {
		marginLeft: 'auto',
		marginTop: 0,
		marginBottom: 0,
		marginRight: 'auto',
		backgroundColor: '#F7F9FC',
		borderRadius: 10,
		borderWidth: 2,
		padding: 15,
		borderColor: '#E4E9F2'
	},
	textInput: {
		width: '80%',
		marginLeft: 'auto',
		marginTop: 0,
		marginBottom: 0,
		marginRight: 'auto',
		backgroundColor: '#F7F9FC',
		borderRadius: 10,
		borderWidth: 2,
		padding: 15,
		borderColor: '#E4E9F2'
	},
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#fff'
	},
	headline: {
		width: '100%',
		textAlign: 'center',
		marginTop: 25,
		marginBottom: 25,
		fontSize: 24
	},
	picker: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		display: 'none'
	},
	pickerActive: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		display: 'flex'
	}

})