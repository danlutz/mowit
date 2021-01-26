import React, { useContext } from "react"
import { Alert, Button, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import AppContext from "../../context/AppContext"
import { Text } from "../Themed"
import Product from "./Product"

export const CategoryDetailView = ({ category }: Props) => {
	const { products } = useContext(AppContext)

	const productsInCategory = products.filter((product) => {
		return product.category === category
	})

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.heaadline}>{category}</Text>
			{productsInCategory.map((product) => {
				return <Product key={product.id} product={product} />
			})}
		</ScreenContainer>
	)
}

interface Props {
	category: string
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: '100%',
		backgroundColor: '#fff'
	},
	heaadline: {
		width: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 20,
		textAlign: 'center',
		fontSize: 20
	}
})
