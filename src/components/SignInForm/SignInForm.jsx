import "../SignUpForm/SignUpForm.scss";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import {
	createUserDocFromAuth,
	signAuthUserWithEmailAndPassword,
	signInWithGooglePopup
} from "../../utils/firebase/firebase";

const defaultFormFields = {
	email: "",
	password: ""
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = e => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocFromAuth(user);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await signAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password for email.");
					break;
				case "auth/user-not-found":
					alert("No user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<>
			<div className="sign-up-container">
				<h2>Already have an account?</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={e => handleSubmit(e)}>
					<FormInput
						label="Email"
						required
						type="email"
						onChange={handleChange}
						name="email"
						value={email}
					/>
					<FormInput
						label="Password"
						required
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
					/>
					<div className="buttons-container">
						<Button type="submit">Sign in</Button>
						<Button type="button" buttonType="google" onClick={logGoogleUser}>
							Google sign in
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignInForm;
