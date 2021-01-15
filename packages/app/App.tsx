import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import "react-native-gesture-handler"

import Navigation from "./navigation"
import { AppContextProvider } from "./context/AppContext"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"

import * as firebase from "firebase"
import { firebaseConfig } from "./constants/firebaseConfig"

const GRAPHQL_ENDPOINT = "https://graphql-weather-api.herokuapp.com/"

const client = new ApolloClient({
	uri: GRAPHQL_ENDPOINT,
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {
			fetchPolicy: "network-only",
		},
	},
})

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig)
	} else {
		firebase.app() // if already initialized, use that one
	}

	if (!isLoadingComplete) return null

	return (
		<ApolloProvider client={client}>
			<AppContextProvider>
				<SafeAreaProvider>
					<Navigation colorScheme="light" />
					<StatusBar />
				</SafeAreaProvider>
			</AppContextProvider>
		</ApolloProvider>
	)
}
