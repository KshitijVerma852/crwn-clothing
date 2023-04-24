import {
	signInWithGooglePopup,
	createUserDocFromAuth
} from "../../utils/firebase/firebase";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);
	};
	return (
		<div>
			<h1>Sign in Page</h1>
			<button onClick={logGoogleUser}>Sign in with google popup</button>
		</div>
	);
};

export default SignIn;
