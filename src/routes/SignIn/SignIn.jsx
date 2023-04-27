import {
	signInWithGooglePopup,
	createUserDocFromAuth
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		// eslint-disable-next-line
		const userDocRef = await createUserDocFromAuth(user);
	};
	return (
		<div>
			<h1>Sign in Page</h1>
			<button onClick={logGoogleUser}>Sign in with google popup</button>
			<SignUpForm/>
		</div>
	);
};

export default SignIn;
