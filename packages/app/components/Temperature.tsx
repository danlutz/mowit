import React from "react"
import { Text, View } from "./Themed"

import { useQuery } from "@apollo/client"
import { GetCityByNameDocument } from "@rentit/api/graphql-weather-api/generated/graphql-weather-api"


// const minUniverseTempCelsius = -273.15

const kelvinToCelsius = (kelvin: number) => {
	return kelvin - 273.15

}

const Temperature = () => {
	const { data } = useQuery(GetCityByNameDocument, {
		variables: {
			name: "Innsbruck"
		}
	})

	const temperatureInKelvin =
		data?.getCityByName?.weather?.temperature?.actual ?? -Infinity

	const temperatureInCelsius = kelvinToCelsius(temperatureInKelvin)

	return <View> 
		<Text>
		Temperature in Innsbruck is {(temperatureInCelsius.toFixed(1))} ° Celsius 
		</Text>
		</View>
}

export default Temperature
