import Button from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.scss";
import { useContext } from "react";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
	};
	return (
		<>
			<div className="product-card-container">
				<img src={imageUrl} alt={`${{ name }}`} />
				<div className="footer">
					<span className="name">{name}</span>
					<span className="price">${price}</span>
				</div>
				<Button onClick={addProductToCart} buttonType="inverted">
					Add to cart
				</Button>
			</div>
		</>
	);
};

export default ProductCard;
