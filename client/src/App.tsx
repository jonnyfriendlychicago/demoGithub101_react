import {HomePage} from "./PageComps/Home/HomePage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Navigate } from "react-router-dom";
import {NavbarLibraryVersion} from "./PageComps/NavbarAndFooter/NavbarLibraryVersion.tsx";
import ReactBootstrapNavBar01 from "./PageComps/NavbarAndFooter/ReactBootstrapNavBar01.tsx";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import {LinkContainer} from "react-router-bootstrap";
// import Nav from "react-bootstrap/Nav";

// import {NavbarReactBootstrap2} from "./PageComps/NavbarAndFooter/NavbarReactBootstrap2.tsx";
// above replaces below
// import {Redirect, Route, Switch} from "react-router-dom";


export const App = ()=>  {

    return (
        <>
        {/*<NavbarReactBootstrap2 />*/}

        <NavbarLibraryVersion />
            <ReactBootstrapNavBar01 />

        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
        </>


    )
}

// all of below are options tried in the return; moved here for clarity

        // BEGIN: this legacy code is busted, b/c: React Router v6+ no longer supports Switch, Redirect, or the component prop inside Route. Instead, it uses Routes and Navigate for redirects.
        // <div className='flex-grow-1'>
        //     <Switch>
        //         <Route path='/' exact>
        //             <Redirect to='/home' />
        //         </Route>
        //
        //         <Route path='/home'> <HomePage /> </Route>
        //
        //     </Switch>
        // </div>
        // END: this legacy code...

        // BEGIN: below works, first component
        // <HomePage />
        // END: below works, first component


        // BEGIN: original from vite
        // <>
        //     <div>
        //         <a href="https://vite.dev" target="_blank">
        //             <img src={viteLogo} className="logo" alt="Vite logo" />
        //         </a>
        //         <a href="https://react.dev" target="_blank">
        //             <img src={reactLogo} className="logo react" alt="React logo" />
        //         </a>
        //     </div>
        //     <h1>Vite + React</h1>
        //     <div className="card">
        //         <button onClick={() => setCount((count) => count + 1)}>
        //             count is {count}
        //         </button>
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to test HMR
        //         </p>
        //     </div>
        //     <p className="read-the-docs">
        //         Click on the Vite and React logos to learn more
        //     </p>
        //     <p>PapaName: {papaName}</p>
        //
        // </>
        // END: original from vite
