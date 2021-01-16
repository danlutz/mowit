import React from "react"
import { View, Image } from "react-native"

import { Product as ProductInterface } from "../../context/AppContext"
import { Text } from "../Themed"

const Product = ({ product }: Props) => {
	const { name, description, rentPriceEurosPerHours, image, id } = product

	return (
		<View>
			<Text>{`ID: ${id}`}</Text>
			<Text>{name}</Text>
			<Image
				source={{
					uri: image,
				}}
			/>
			<Text>{description}</Text>
			<Text>{rentPriceEurosPerHours} €</Text>
		</View>
	)
}

interface Props {
	product: ProductInterface
}

export default Product
