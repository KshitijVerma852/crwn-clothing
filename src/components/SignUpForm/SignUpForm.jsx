import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocFromAuth
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.scss";
import Button from "../Button/Button";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: ""
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = e => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleSubmit = async e => {
		e.preventDefault();
		if (password === confirmPassword) {
			try {
				const { user } = await createAuthUserWithEmailAndPassword(
					email,
					password
				);
				await createUserDocFromAuth(user, { displayName });
				resetFormFields();
			} catch (error) {
				if (error.code === "auth/email-already-in-use") {
					alert("Cannot create user, email already in use.");
				} else {
					console.log(error);
				}
			}
		} else {
			alert("Passwords don't match");
		}
	};

	return (
		<>
			<div className="sign-up-container">
				<h2>Don't have an account?</h2>
				<span>Sign up with your email and password</span>
				<form onSubmit={e => handleSubmit(e)}>
					<FormInput
						label="Display Name"
						required
						type="text"
						onChange={handleChange}
						name="displayName"
						value={displayName}
					/>

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
						onChange={handleChange}
						name="password"
						value={password}
					/>

					<FormInput
						label="Confirm Password"
						required
						type="password"
						onChange={handleChange}
						name="confirmPassword"
						value={confirmPassword}
					/>
					<Button type="submit">Sign Up</Button>
				</form>
			</div>
		</>
	);
};

export default SignUpForm;
