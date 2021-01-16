import React, { useState, useContext, Component } from "react"
import { Alert, Button, TextInput, StyleSheet, Keyboard, Image } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Picker } from "@react-native-picker/picker"
import * as Permissions from "expo-permissions"
import * as FileSystem from "expo-file-system"
import * as ImagePicker from "expo-image-picker"
import { useNavigation } from "@react-navigation/native"
import * as Random from "expo-random"

import { Text } from "../Themed"

import AppContext, { Product } from "../../context/AppContext"
import { useAssets } from "expo-asset"
import { TouchableOpacity } from "react-native-gesture-handler"

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
	const navigation = useNavigation()

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [selectedCategory, setSelectedCategory] = useState(availableCategories[0])
	const [rentPriceEurosPerHours, setRentPriceEurosPerHours] = useState(0)
	const [categoryDisplayed, setCategoryDisplayed] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [pickedImage, setPickedImage] = useState("")

	const onSubmit = () => {
		const isValid = validateUserInput(name, description, Number(rentPriceEurosPerHours))

		if (!isValid) {
			Alert.alert("Bitte validieren sie Ihre Eingabe")
			setIsLoading(false)
			return
		}

		const product: Product = {
			id: Random.getRandomBytes(5).toString(),
			name,
			description,
			rentPriceEurosPerHours: Number(rentPriceEurosPerHours),
			category: selectedCategory,
			image: pickedImage,
		}

		dispatch({
			type: "ADD_PRODUCT",
			payload: product,
		})

		Alert.alert(
			"Produktplatzierung erfolgreich",
			"",
			[{ text: "OK", onPress: () => navigation.navigate("Explore") }],
			{ cancelable: true },
		)
	}

	const onCategoryButtonClick = () => {
		setCategoryDisplayed(!categoryDisplayed)
	}

	const addImpressionHandler = async () => {
		try {
			const permRes = await Permissions.askAsync(Permissions.CAMERA)
			if (permRes.status !== "granted") {
				Alert.alert(
					"Insufficient Permission Error",
					"For this feature, the app needs access to your camera :-/",
					[{ text: "Okay" }],
				)
				return
			}
			const imgRes = await ImagePicker.launchCameraAsync()
			if (!imgRes || imgRes.cancelled || !imgRes.uri) {
				return
			}

			const persistentPath = FileSystem.documentDirectory + imgRes.uri.split("/").pop()
			await FileSystem.moveAsync({
				from: imgRes.uri,
				to: persistentPath,
			})
			console.log(persistentPath)
			setPickedImage(persistentPath)
		} catch (error) {
			console.warn(error)
		}
	}

	const getPickedImageOrPlaceHolder = () => {
		if (pickedImage == "") {
			return require("../../assets/images/placeholder.png")
		} else {
			return {
				uri: pickedImage,
			}
		}
	}

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.headline}>Produkt platzieren</Text>
			<TouchableOpacity style={styles.touchableImage} onPress={addImpressionHandler}>
				<Image style={styles.touchableImage} source={getPickedImageOrPlaceHolder()} />
			</TouchableOpacity>
			<TextInput
				style={styles.textInput}
				value={name}
				onChangeText={setName}
				placeholder="Produktname"
			/>
			<Button
				onPress={onCategoryButtonClick}
				style={styles.categoryButton}
				title={"Kategorie auswählen"}
			/>
			<TextInput
				value={description}
				onChangeText={setDescription}
				placeholder="Beschreibung"
				style={styles.textInput}
				editable={!isLoading}
			/>
			<TextInput value={String(rentPriceEurosPerHours)} />
			<TextInput
				value={String(rentPriceEurosPerHours)}
				onChangeText={(value) => setRentPriceEurosPerHours(Number(value))}
				placeholder="Leihgebühr"
				keyboardType="number-pad"
				style={styles.textInput}
				editable={!isLoading}
			/>

			<Picker
				mode="dropdown"
				selectedValue={selectedCategory}
				onValueChange={(value) => setSelectedCategory(value as string)}
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
		backgroundColor: "red",
	},
	image: {
		width: "100%",
	},
	categoryButton: {
		marginLeft: "auto",
		marginTop: 0,
		marginBottom: 0,
		marginRight: "auto",
		backgroundColor: "#F7F9FC",
		borderRadius: 10,
		borderWidth: 2,
		padding: 15,
		borderColor: "#E4E9F2",
	},
	textInput: {
		width: "80%",
		marginLeft: "auto",
		marginTop: 0,
		marginBottom: 0,
		marginRight: "auto",
		backgroundColor: "#F7F9FC",
		borderRadius: 10,
		borderWidth: 2,
		padding: 15,
		borderColor: "#E4E9F2",
	},
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#fff",
	},
	headline: {
		width: "100%",
		textAlign: "center",
		marginTop: 25,
		marginBottom: 25,
		fontSize: 24,
	},
	picker: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		display: "none",
	},
	pickerActive: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		display: "flex",
	},
	previewImage: {
		width: 50,
		height: 50,
	},
	touchableImage: {
		width: 100,
		height: 100,
		padding: 10,
	},
})
