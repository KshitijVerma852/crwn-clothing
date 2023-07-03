import "./CartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate("/checkout");
	return (
		<>
			<div className="cart-dropdown-container">
				<div className="cart-items">
					{cartItems.map(item => (
						<CartItem key={item.id} cartItem={item} />
					))}
					<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
				</div>
			</div>
		</>
	);
};

export default CartDropdown;
