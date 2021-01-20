import { HeaderStyleInterpolators } from "@react-navigation/stack"
import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import { Icon } from 'react-native-elements';

import { Product as ProductInterface } from "../../context/AppContext"
import { Text } from "../Themed"

const Product = ({ product }: Props) => {
	const { name, description, rentPriceEurosPerHours, image, id } = product

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				{ image ? <Image source={{ uri: image }} /> : <Text>Image</Text>}
			</View>
			<View style={styles.infoContainer}>
				<View style={styles.headlineContainer}>
					<Text style={styles.headline}>{name}</Text>
				</View>
				<View style={styles.detailContainer}>
					<View style={styles.row}>
						<Icon size={18} style={styles.icon} name='person' type='ionicon' color='#000'></Icon>
						<Text>Hans Mustermann</Text>
					</View>
					<View style={styles.row}>
						<Icon size={18} style={styles.icon} name='location' type='ionicon' color='#000'></Icon>
						<Text>6020, Innsbruck</Text>
					</View>
					<View style={styles.row}>
						<Icon size={18} style={styles.icon} name='sync' type='ionicon' color='#000'></Icon>
						<Text>Selbstabholung</Text>
					</View>
				</View>
				<View style={styles.priceContainer}>
					<View style={styles.indicator}>
						<Icon size={10} style={styles.icon} name='ellipse' type='ionicon' color='#2ecc71'></Icon>
						<Text>sofort verfügbar</Text>
					</View>
					<View style={styles.price}>
						<Text style={styles.colorful}>{rentPriceEurosPerHours} €/h</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

interface Props {
	product: ProductInterface
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 20,
		marginBottom: 20,
		shadowColor: '#777777',
		shadowOffset: { width: 0, height: 2},
		shadowRadius: 1,
		shadowOpacity: 0.3,
		borderTopLeftRadius: 10,
		borderTopEndRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomEndRadius: 10,
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		// flexWrap: 'wrap'
	},
	imageContainer: {
		width: '40%',
		height: 150
	},
	infoContainer: {
		width: '60%',
		height: 150,
		padding: 5,
		display: 'flex',
		flexDirection: 'column',

	},
	headline: {
		fontSize: 20
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 2,
		marginBottom: 2
	},
	icon: {
		marginRight: 10
	},
	headlineContainer:  {
		height: '20%',
	},
	detailContainer: {
		height: '60%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	priceContainer: {
		height: '20%',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
	indicator: {
		width: '70%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	price: {
		width: '30%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: '900'
	},
	colorful: {
		fontWeight:'700',
		color: '#E67E22'
	}
});

export default Product
