import React, {useState} from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title>
            <meta name = "description" content={ description || "React.js Boilerplate" } />
        </Helmet>
            {/* do api calls here. If successful then set the state. */}
        <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} onLogin={() => setIsLoggedIn(true)}/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;