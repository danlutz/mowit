import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import "react-native-gesture-handler"

import Navigation from "./navigation"
import { AppContextProvider } from "./context/AppContext"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"

const GRAPHQL_ENDPOINT = "https://graphql-weather-api.herokuapp.com/"

const client = new ApolloClient({
	uri: GRAPHQL_ENDPOINT,
	cache: new InMemoryCache(),
})

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	if (!isLoadingComplete) return null

	return (
		<ApolloProvider client={client}>
			<AppContextProvider>
				<SafeAreaProvider>
					<Navigation colorScheme={colorScheme} />
					<StatusBar />
				</SafeAreaProvider>
			</AppContextProvider>
		</ApolloProvider>
	)
}
