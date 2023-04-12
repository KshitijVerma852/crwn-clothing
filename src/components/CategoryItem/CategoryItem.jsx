import "./CategoryItem.scss";

const CategoryItem = ({ category: { id, imageUrl, title } }) => (
	<>
		<div key={id} className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop now</p>
			</div>
		</div>
	</>
);

export default CategoryItem;
