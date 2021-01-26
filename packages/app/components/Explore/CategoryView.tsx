import React, { useContext } from "react"
import { Alert, Button, StyleSheet, FlatList, Image } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { useNavigation } from "@react-navigation/native"

import AppContext from "../../context/AppContext"
import Temperature from "../Temperature"
import { Text, View } from "../Themed"

import categories from "../../constants/categories"
import { TouchableOpacity } from "react-native-gesture-handler"

export const CategoryView = () => {
	const { navigate } = useNavigation()

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.placeholderText}>Kategorien</Text>
			<Temperature />

			<FlatList
				contentContainerStyle={styles.list}
				data={categories}
				renderItem={({ item: { title: category, image } }) => {
					return (
						<TouchableOpacity
							onPress={() => navigate("CategoryDetailView", { category })}
							style={styles.categoryContainer}
						>
							<View style={styles.imageContainer}>
								<Image source={image}></Image>
							</View>
							<View style={styles.textContainer}>
								<Text>{category}</Text>
							</View>
							{/* <View
								style={styles.categoryContainer}
							>
							</View> */}
						</TouchableOpacity>
					)
				}}
			></FlatList>
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	placeholderText: {
		paddingBottom: 30,
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '100%'
	},
	container: {
		width: '100%',
		backgroundColor: '#ffffff',
	},
	categoryContainer: {
		width: 100,
		margin: 20,
		shadowColor: "#111111",
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
	imageContainer: {
		width: 100
	},
	textContainer: {
		width: 100
	},
	image: {

	},
	text: {

	}
})
