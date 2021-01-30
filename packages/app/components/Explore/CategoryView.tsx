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
						<View style={styles.categoryContainer}>
							<TouchableOpacity
								onPress={() => navigate("CategoryDetailView", { category })}
							>
								<View style={styles.imageContainer}>
									<Image style={styles.image} source={image}></Image>
								</View>
								<View style={styles.textContainer}>
									<Text>{category}</Text>
								</View>
								{/* <View
									style={styles.categoryContainer}
								>
								</View> */}
							</TouchableOpacity>
						</View>
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
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		width: "100%",
		minHeight: "100%",
	},
	container: {
		width: "100%",
		backgroundColor: "#ffffff",
	},
	categoryContainer: {
		width: 160,
		height: 140,
		margin: 10,
		borderRadius: 10,
		shadowColor: "#111111",
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
	imageContainer: {
		width: 160,
	},
	textContainer: {
		width: 160,
		height: 40,
		borderRadius: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 160,
		height: 100,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	text: {
		width: 160,
		height: 100,
		backgroundColor: "red",
	},
})
