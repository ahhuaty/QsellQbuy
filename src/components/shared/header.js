import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = (props) => {
	const {isLoggedIn, onLogout, onLogin} = props;
    const {itemCount} = useContext(CartContext);
	const cartInfo = isLoggedIn 
		? <Link to='/cart'> <CartIcon/> Cart ({itemCount})</Link>
		: <Link to='/login' onClick={onLogin}>Log in</Link>;
	const logout = isLoggedIn
		? <Link to='/logout' onClick={onLogout}>Log out</Link>
		: null;
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
			{cartInfo}
			{logout}
        </header>
     );
}
 
export default Header;