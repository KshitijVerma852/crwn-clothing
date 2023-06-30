import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./Navigation.scss";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { expanded } = useContext(CartContext);

	return (
		<>
			<Fragment>
				<div className="navigation">
					<Link className="logo-container" to="/">
						<CrwnLogo className="logo" />
					</Link>
					<div className="nav-links-container">
						<Link to="/shop" className="nav-link">
							SHOP
						</Link>
						{currentUser ? (
							<span className="nav-link" onClick={signOutUser}>
								SIGN OUT
							</span>
						) : (
							<Link to="/auth" className="nav-link">
								SIGN IN
							</Link>
						)}
						<CartIcon />
					</div>
					{expanded && <CartDropdown />}
				</div>
				<Outlet />
			</Fragment>
		</>
	);
};

export default Navigation;
