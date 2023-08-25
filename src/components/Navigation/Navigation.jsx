import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {
	NavigationContainer,
	NavLink,
	NavLinks,
	LogoContainer
} from "./NavigationStyles";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSelector";

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { expanded } = useContext(CartContext);

	return (
		<>
			<Fragment>
				<NavigationContainer>
					<LogoContainer to="/">
						<CrwnLogo className="logo" />
					</LogoContainer>
					<NavLinks>
						<NavLink to="shop">SHOP</NavLink>
						{currentUser ? (
							<NavLink as="span" onClick={signOutUser}>
								SIGN OUT
							</NavLink>
						) : (
							<NavLink to="auth" className="nav-link">
								SIGN IN
							</NavLink>
						)}
						<CartIcon />
						{expanded && <CartDropdown />}
					</NavLinks>
				</NavigationContainer>
				<Outlet />
			</Fragment>
		</>
	);
};

export default Navigation;
