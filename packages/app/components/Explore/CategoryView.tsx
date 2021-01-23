import React, { useContext } from "react"
import { Alert, Button, StyleSheet, FlatList } from "react-native"
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
				data={categories}
				renderItem={({ item: category }) => {
					return (
						<TouchableOpacity
							onPress={() => navigate("CategoryDetailView", { category })}
						>
							<View
								style={{
									flex: 1,
									margin: 5,
									minWidth: 170,
									maxWidth: 223,
									height: 304,
									maxHeight: 304,
									backgroundColor: "#CCC",
								}}
							>
								<Text>{category}</Text>
							</View>
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
	container: {
		width: "100%",
	},
})
