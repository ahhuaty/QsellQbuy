import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';
import {LoginDialog} from "../LoginDialog";

const Header = (props) => {
    const {itemCount} = useContext(CartContext);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
	const {isLoggedIn, onLogout, onLogin} = props;
	const cartInfo = isLoggedIn 
		? <Link to='/cart'> <CartIcon/> Cart ({itemCount})</Link>
		: <Link onClick={() => setLoginDialogOpen(true)}>Log in</Link>;
	const logout = isLoggedIn
		? <Link onClick={onLogout}>Log out</Link>
		: null;
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
			{cartInfo}
			{logout}
			<LoginDialog
				open={loginDialogOpen}
				handleClose={() => setLoginDialogOpen(false)}
				handleLogin={() => {
					onLogin();
					setLoginDialogOpen(false);
				}}
			/>
        </header>
     );
}
 
export default Header;