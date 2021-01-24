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

export function deleteAccount(andThen) {
	const user = firebase.auth().currentUser;
	
	Alert.alert(
		"Account löschen?",
		"Bist du sicher, dass du deinen Account löschen willst?",
		[
			{ text: "Ja", onPress: () => {
			user?.delete().then(function() {
				Alert.alert(
					"Dein Account wurder erfolgreich gelöscjht",
					"Du wurdest aus der App ausgelogged",
					[{ text: "OK", onPress: () => andThen }],
					{ cancelable: true },
				)
			}).catch(function(error) {
				Alert.alert(error)
				})
			}
			},
			{
				text: "NEIN"
			}
		],
		{ cancelable: true },
	)
}

export function resetPassword(userEmailAddress) {
	var auth = firebase.auth();
	var emailAddress = userEmailAddress;

	auth.sendPasswordResetEmail(emailAddress).then(function() {
	Alert.alert(
		"Initiert",
		"Falls du einen Account bei uns hast bekommst du in kürze eine E-Mail zum Zrücksetzen deines Passwords",
		[{ text: "OK", onPress: () => {} }],
		{ cancelable: true },
				
	)
	}).catch(function(error) {
	Alert.alert(
		"Ooops",
		`${error}`,
		[{ text: "OK", onPress: () => {} }],
		{ cancelable: true },
	)
	});
}