import React, { useContext } from "react"
import { Alert, Button, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import AppContext from "../../context/AppContext"
import Temperature from "../Temperature"
import { Text } from "../Themed"
import Product from "./Product"

export const CategoryView = () => {
	const { products } = useContext(AppContext)

	return (
		<ScreenContainer>
			<Text style={styles.placeholderText}>Category View Screen</Text>
			<Text>Wetter Preview: {<Temperature />}</Text>
			<Text>Produkte</Text>
			{products.map((product) => {
				return <Product key={product.name} product={product} />
			})}
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	placeholderText: {
		paddingBottom: 30,
	},
})
