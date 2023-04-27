import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";
import Navigation from "./components/Navigation/Navigation";

const Shop = () => {
	return (
		<>
			<div>
				<h1>I am the shop component.</h1>
			</div>
		</>
	);
};

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="auth" element={<Authentication />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
