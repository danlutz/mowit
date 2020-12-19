import React from "react"
import { useQuery } from "@apollo/client"
import { GetCityByNameDocument } from "@rentit/api/graphql-weather-api/generated/graphql-weather-api"

// const minUniverseTempCelsius = -273.15

const Temperature = () => {
	const { data, loading, error } = useQuery(GetCityByNameDocument)

	const temperatureInCelsius =
		data?.getCityByName?.weather?.temperature?.feelsLike?.toPrecision(2) ?? -Infinity

	if (loading) return null

	return <div>Temperature in Innsbruck is {temperatureInCelsius} degree Celsius</div>
}

export default Temperature
