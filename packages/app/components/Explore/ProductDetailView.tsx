import React, { useContext } from "react"
import { Alert, Button, Image } from "react-native"
import { ScreenContainer } from "react-native-screens"
import AppContext from "../../context/AppContext"
import { View, Text } from "../Themed"

export const ProductDetailView = ({ id }: { id: string }) => {
	const { products } = useContext(AppContext)
	const product = products.find((product) => product.id === id)

	if (!product) return null

	const { name, rentPriceEurosPerHours, image, description } = product

	return (
		<ScreenContainer>
			<Image source={{ width: 100, uri: image }}></Image>
			<Text>{name}</Text>
			<Text>{rentPriceEurosPerHours} €</Text>
			<Text>{description}</Text>
		</ScreenContainer>
	)
}
