import "./CategoryPreview.scss";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<h2>
				<span className="title">
					<Link to={title}>
						{title.toUpperCase()}
					</Link>
				</span>
			</h2>
			<div className="preview">
				{products
					.filter((_, i) => i < 4)
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
