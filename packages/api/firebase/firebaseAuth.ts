import * as firebase from "firebase"
import "firebase/firestore"
import { Alert } from "react-native"
import AppContext from "../../app/context/AppContext"

export async function registration(email, password, lastName, firstName) {
	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password)
		const currentUser = firebase.auth().currentUser

		const db = firebase.firestore()
		db.collection("users").doc(currentUser.uid).set({
			email: currentUser.email,
			lastName: lastName,
			firstName: firstName,
		})
	} catch (err) {
		Alert.alert("There is something wrong!", err.message)
	}
}

export async function signIn(email, password) {
	try {
		await firebase.auth().signInWithEmailAndPassword(email, password)
	} catch (err) {
		Alert.alert("There is something wrong!", err.message)
	}
}

export async function loggingOut() {
	try {
		await firebase.auth().signOut()
	} catch (err) {
		Alert.alert("There is something wrong!", err.message)
	}
}

export async function getUserName() {
	const db = firebase.firestore()
	const currentUser = firebase.auth().currentUser

	const documentReference = db.collection("users").doc(currentUser?.uid)

	const doc = await documentReference.get()

	if (doc.exists) {
		const {firstName, lastName} = doc.data()

		return `${firstName} ${lastName}`
	}

	

	return "Max Mustermann"
}

export function sendVerificationEmail() {
	const user = firebase.auth().currentUser

	user?.sendEmailVerification().then(function() {
		Alert.alert("Email sent")	
	}).catch(function(error) {
		Alert.alert(error)
	})
}


export function updateUserPassword(userNewPassword, andThen) {

	const user = firebase.auth().currentUser;

	user.updatePassword(userNewPassword).then(function() {
		Alert.alert(
			"Passwort wurde erfolgreich geändert",
			"Bitte logge dich erneut in der App ein",
			[{ text: "OK", onPress: () => andThen }],
			{ cancelable: true },
		)
	}).catch(function(error) {
	Alert.alert(error)
	});
}