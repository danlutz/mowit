import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import Temperature from "./components/Temperature"

const GRAPHQL_ENDPOINT = "https://graphql-weather-api.herokuapp.com/"

const client = new ApolloClient({
	uri: GRAPHQL_ENDPOINT,
	cache: new InMemoryCache(),
})

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<ApolloProvider client={client}>
				<SafeAreaProvider>
					<Navigation colorScheme={colorScheme} />
					<StatusBar />
				</SafeAreaProvider>
			</ApolloProvider>
		)
	}
}
