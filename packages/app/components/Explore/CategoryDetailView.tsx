import React, { useContext } from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import AppContext from "../../context/AppContext"
import { View, Text } from "../Themed"
import Product from "./Product"

export const CategoryDetailView = ({ category }: Props) => {
	const { products } = useContext(AppContext)

	return (
		<ScreenContainer>
			<Text>{category}</Text>
			{products.map((product) => {
				return <Product key={product.id} product={product} />
			})}
			<Button title="RENT IT" onPress={() => Alert.alert("RENT IT ")} />
		</ScreenContainer>
	)
}

interface Props {
	category: string
}
