import React, { useContext } from "react"
import { Alert, Button, Image, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import AppContext from "../../context/AppContext"
import { View, Text } from "../Themed"
import { Icon } from 'react-native-elements'

export const ProductDetailView = ({ id }: { id: string }) => {
	const { products } = useContext(AppContext)
	const product = products.find((product) => product.id === id)

	if (!product) return null

	const { name, rentPriceEurosPerHours, image, description, username } = product

	return (
		<ScreenContainer style={styles.container}>
			<Image resizeMode={'cover'} style={styles.image} source={{ width: 100, uri: 'https://via.placeholder.com/150 ' }}></Image>
			<View style={styles.indicator}>
				<View style={styles.sellerInformation}>
					<View style={styles.row}>
						<Icon
							size={18}
							name="person"
							type="ionicon"
							color="#fff"
							style={styles.icon}
						></Icon>
						<Text style={styles.text}>{ username }</Text>
					</View>
					<View style={styles.row}>
						<Icon
							size={18}
							name="location"
							type="ionicon"
							color="#fff"
							style={styles.icon}
						></Icon>
						<Text style={styles.text}>6020, Innsbruck</Text>
					</View>
					<View style={styles.row}>
						<Icon
							size={18}
							name="sync"
							type="ionicon"
							color="#fff"
							style={styles.icon}
						></Icon>
						<Text style={styles.text}>Selbstabholung</Text>
					</View>
				</View>
				<View style={styles.priceInformation}>
					<Text style={styles.price}>{rentPriceEurosPerHours} € / h</Text>
					<Text style={styles.status}>sofort verfügbar</Text>
				</View>
			</View>
			<View style={styles.descriptionContainer}>
				<Text style={styles.descriptionHeader}>Beschreibung</Text>
				<Text>{description}</Text>
			</View>
			<View style={styles.button}>
				<Button color={'#ffffff'} title={"RENT IT!"} />
			</View>
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: '100%',
		backgroundColor: '#fff'
	},
	image: {
		width: '100%',
		height: 200,
	},
	descriptionContainer: {
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 25,
		marginBottom: 25,
	},
	descriptionHeader: {
		textTransform: 'uppercase',
		fontWeight: '700',
		marginBottom: 10,
		color: '#7f8c8d'
	},
	button: {
		backgroundColor: "#E67E22",
		borderRadius: 4,
		paddingBottom: 2,
		paddingTop: 2,
		color: "#FFFFFF",
		shadowColor: "#111111",
		shadowOpacity: 0.2,
		textTransform: "uppercase",
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
	indicator: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
	sellerInformation: {
		width: '60%',
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'red'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#E67E22',
		flex: 1,
		paddingLeft: 25,
	},
	priceInformation: {
		width: '40%',
		height: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}, 
	text: {
		color: '#fff',
		fontWeight: '500'
	},
	icon: {
		marginRight: 10
	},
	price: {
		fontSize: 24,
		fontWeight: '500',
		color: '#E67E22'
	},
	status: {
		marginTop: 5,
		color: '#E67E22'
	}
});
