import React, {useState} from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import {api} from "../api";

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user") !== null);
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title>
            <meta name = "description" content={ description || "React.js Boilerplate" } />
        </Helmet>
        <Header
            isLoggedIn={isLoggedIn}
            onLogout={() => {
                localStorage.removeItem("user")
                setIsLoggedIn(false);
            }}
            onLogin={() => api.login(msg => {
                localStorage.setItem("user", msg);
                setIsLoggedIn(true);
            }, msg => {
                alert(msg);
                localStorage.removeItem("user");
                setIsLoggedIn(false)
            })}
        />
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;