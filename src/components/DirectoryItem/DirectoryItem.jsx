import { useNavigate } from "react-router-dom";
import "./DirectoryItem.scss";

const DirectoryItem = ({ category: { id, title, imageUrl, route } }) => {
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);
	return (
		<>
			<div
				key={id}
				className="directory-item-container"
				onClick={onNavigateHandler}
			>
				<div
					className="background-image"
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
				<div className="body">
					<h2>{title}</h2>
					<p>Shop Now</p>
				</div>
			</div>
		</>
	);
};

export default DirectoryItem;
