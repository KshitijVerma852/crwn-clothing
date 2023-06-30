import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./routes/Shop/Shop";

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
