import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartIcon = () => {
	const { expanded, setExpanded } = useContext(CartContext);
	const { itemCount } = useContext(CartContext);

	const toggleDropdown = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<div className="cart-icon-container" onClick={toggleDropdown}>
				<ShoppingIcon className="shopping-icon" />
				<span className="item-count">{itemCount}</span>
			</div>
		</>
	);
};

export default CartIcon;
