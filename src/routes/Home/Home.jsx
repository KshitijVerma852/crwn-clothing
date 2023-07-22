import Directory from "../../components/Directory/Directory";
import { Outlet } from "react-router-dom";

const Home = () => {

	return (
		<>
			<Directory  />
			<Outlet />
		</>
	);
};

export default Home;
