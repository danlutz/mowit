import { ImageSourcePropType } from "react-native"

const lawnmowner = require("../assets/images/lawnmowner.png")
const electronic = require("../assets/images/electronic.png")
const heating = require("../assets/images/heating.png")
const drill = require("../assets/images/drill.png")
const electronicInstallations = require("../assets/images/knipex-abisolierzange.png")
const handUtilities = require("../assets/images/nc5309_1.png")

export interface CategoryInterface {
	key: string
	title: string
	image: ImageSourcePropType
}

const categories: CategoryInterface[] = [
	{ key: "Elektrogeräte", title: "Elektrogeräte", image: electronic },
	{ key: "Gartengeräte", title: "Gartengeräte", image: lawnmowner },
	{ key: "Werkzeug", title: "Werkzeug", image: drill },
	{ key: "Heizen", title: "Heizen & Klima", image: heating },
	{ key: "Handwerkzeuge", title: "Handwerkzeuge", image: handUtilities },
	{ key: "Kleingeräte", title: "Kleingeräte", image: electronicInstallations },
]

export default categories
