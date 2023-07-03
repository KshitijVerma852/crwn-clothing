import "./CheckoutItem.scss";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemToCart } =
		useContext(CartContext);

	const clearItemHandler = () => removeItemToCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => clearItemFromCart(cartItem);

	return (
		<>
			<div className="checkout-item-container">
				<div className="image-container">
					<img src={imageUrl} alt={name} />
				</div>
				<span className="name">{name}</span>
				<span className="quantity">
					<div className="arrow" onClick={clearItemHandler}>
						&#10094;
					</div>
					<span className="value">{quantity}</span>
					<div className="arrow" onClick={addItemHandler}>
						&#10095;
					</div>
				</span>
				<span className="price">{price}</span>
				<div className="remove-button" onClick={removeItemHandler}>
					&#10005;
				</div>
			</div>
		</>
	);
};

export default CheckoutItem;
