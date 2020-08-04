import React, {useState} from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import {api} from "../api";

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title>
            <meta name = "description" content={ description || "React.js Boilerplate" } />
        </Helmet>
        <Header
            isLoggedIn={user !== null}
            onLogout={() => {
                localStorage.removeItem("user")
                setUser(null);
            }}
            onLogin={() => api.login(msg => {
                localStorage.setItem("user", JSON.stringify(msg));
                setUser(msg);
            }, msg => {
                alert(msg);
                localStorage.removeItem("user");
                setUser(null)
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