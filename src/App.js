import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";
import { useEffect } from "react";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/userAction";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();

	useEffect(
		() =>
			onAuthStateChangedListener(user => {
				console.log(user);
				if (user) createUserDocFromAuth(user).then();
				dispatch(setCurrentUser(user));
			}),
		[dispatch]
	);

	return (
		<>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop/*" element={<Shop />} />
					<Route path="auth" element={<Authentication />} />
					<Route path="checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
