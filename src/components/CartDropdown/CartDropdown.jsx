import "./CartDropdown.scss";
import Button from "../Button/Button";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				<Button>GO TO CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
