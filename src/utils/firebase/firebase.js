import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithRedirect,
	createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDUmP8xoOU9r7SOu0u0YboOCYLMC43vV6w",
	authDomain: "crwn-db-998fb.firebaseapp.com",
	projectId: "crwn-db-998fb",
	storageBucket: "crwn-db-998fb.appspot.com",
	messagingSenderId: "388461802903",
	appId: "1:388461802903:web:3e2cc0b26d9a4e85d000d2"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, provider);

export const createUserDocFromAuth = async (
	userAuth,
	additionalInfo = { displayName: "" }
) => {
	if (!userAuth) return;

	const userDocRef = await doc(db, "users", userAuth.uid);
	const snapshot = await getDoc(userDocRef);

	if (!snapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo
			});
		} catch (error) {
			console.log("error creating the user", error);
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};
