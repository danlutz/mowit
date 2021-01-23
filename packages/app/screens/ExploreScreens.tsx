import React from "react"
import { StyleSheet, View } from "react-native"
import { CategoryDetailView } from "../components/Explore/CategoryDetailView"
import { ProductDetailView } from "../components/Explore/ProductDetailView"
import { CategoryView } from "../components/Explore/CategoryView"
import { SearchView } from "../components/Explore/SearchView"
import { ExploreStackParameters } from "../constants/types"
import { StackNavigationProp } from "@react-navigation/stack"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 5,
	},
})

const ScreenContainer = ({ children }: { children: React.ReactNode }) => (
	<View style={styles.container}>{children}</View>
)

export const CategoryViewScreen = () => {
	return (
		<ScreenContainer>
			<CategoryView />
		</ScreenContainer>
	)
}

export const CategoryDetailViewScreen = ({
	route: { params },
}: {
	route: { params: { category: string } }
}) => {
	console.log({ params })
	return (
		<ScreenContainer>
			<CategoryDetailView category={params.category} />
		</ScreenContainer>
	)
}
export const ProductDetailViewScreen = () => {
	return (
		<ScreenContainer>
			<ProductDetailView />
		</ScreenContainer>
	)
}

export const SearchViewScreen = () => {
	return (
		<ScreenContainer>
			<SearchView />
		</ScreenContainer>
	)
}

interface Props {
	navigation: StackNavigationProp<ExploreStackParameters>
}
