import React from "react"
import { View } from "react-native"

import { Product as ProductInterface } from "../../context/AppContext"
import { Text } from "../Themed"

const Product = ({ product }: Props) => {
	const { name, description, rentPriceEurosPerHours } = product

	return (
		<View>
			<Text>{name}</Text>
			<Text>{description}</Text>
			<Text>{rentPriceEurosPerHours} €</Text>
		</View>
	)
}

interface Props {
	product: ProductInterface
}

export default Product
