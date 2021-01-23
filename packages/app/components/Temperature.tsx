import React from "react"
import { Text, View } from "./Themed"
import { StyleSheet } from 'react-native';
import { Icon } from "react-native-elements"
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

	return 	<View style={styles.container}> 
				<View style={styles.row}>
					<Icon
						size={18}
						name="location"
						type="ionicon"
						color="#000"
						style={styles.icon}
					></Icon>
					<Text style={styles.text}>Innsbruck</Text>
				</View>
				<View style={styles.row}>
					<Icon
						size={18}
						name="thermometer"
						type="ionicon"
						color="#000"
						style={styles.icon}
					></Icon>
					<Text style={styles.text}>{(temperatureInCelsius.toFixed(1))} ° Celsius</Text>
				</View>
			</View>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		height: 50,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	row: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		marginRight: 5
	},
	text: {
		fontWeight: "500"
	}
});

export default Temperature
