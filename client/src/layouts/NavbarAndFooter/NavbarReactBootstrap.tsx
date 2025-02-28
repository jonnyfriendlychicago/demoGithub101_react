// this navbar built using react-bootstrap framework: https://react-bootstrap.github.io/
// SUPER IMPORTANT: this file can never been named/renamed 'Navbar' or 'Nav', b/c those names are files that get imported from react-bootstrap/, see link above
// if this file gets named/renamed 'Nav' or 'Navbar', the whole file will have errors b/c the file will be confused by code lines such as 'Navbar.Brand' and 'Navbar.Collapse' etc.
// import { Link } from "react-router-dom";
// import { useOktaAuth } from '@okta/okta-react';
// import { SpinnerLoading } from "../Utils/SpinnerLoading";
// import { useEffect, useState } from "react";
// import UserRsp from "../../models/UserRsp";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap"; // https://www.npmjs.com/package/react-router-bootstrap
// import LoginButtonJsxOrig from "../../Auth/LoginButtonJsxOrig";
// import LogoutButtonJsxOrig from "../../Auth/LogoutButtonJsxOrig";
// import LoginButton from "../../Auth/LoginButton";
// import LogoutButton from "../../Auth/LogoutButton";
// import {useAuth0} from "@auth0/auth0-react";

export const NavbarReactBootstrap = () => {

    // const { oktaAuth, authState } = useOktaAuth();

    // const [isLoadingProfile, setIsLoadingProfile] = useState(true);
    // const [httpError, setHttpError] = useState(null);
    //
    // const [authUserProfile, setAuthUserProfile] = useState<UserRsp>();
    //
    // useEffect(() => {
    //     const ensureExistsUserProfile = async () => {
    //         if (authState && authState.isAuthenticated) {
    //             const url = `${process.env.REACT_APP_API}/users/secure/createProfile`;
    //             const requestOptions = {
    //                 method: 'PUT',
    //                 headers: {
    //                     Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
    //                     'Content-Type': 'application/json'
    //                 }
    //             };
    //             const response = await fetch(url, requestOptions);
    //             if (!response.ok) {
    //                 throw new Error('Something went wrong: Profile Verify Error01');
    //             }
    //             const responseJson = await response.json();
    //
    //             const loadedItem: UserRsp = {
    //                 id: responseJson.id,
    //                 email: responseJson.email,
    //                 nameFirst: responseJson.nameFirst,
    //                 nameLast: responseJson.nameLast,
    //                 userName: responseJson.userName,
    //                 aboutMe: responseJson.aboutMe,
    //                 addressLine1: responseJson.addressLine1,
    //                 addressLine2: responseJson.addressLine2,
    //                 city: responseJson.city,
    //                 zipCode: responseJson.zipCode,
    //                 homeName: responseJson.homeName,
    //             };
    //             setAuthUserProfile(loadedItem);
    //         }
    //     setIsLoadingProfile(false);
    //     };
    //
    //     ensureExistsUserProfile().catch((error: any) => {
    //         setHttpError(error.message);
    //     })
    // }, [authState]);
    //
    // // this UE will show us the JWT in browser, for testing.  commOUT for deployment.  fyi, this previously was a simple console.log, which was making the logging happen twice, very annoying.
    // useEffect( () => {
    //     if (authState !== null && authState.accessToken !== undefined) {
    //         console.log(authState);
    //     }
    //     } ,
    //     [authState ]
    // )
    //
    // const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
    //
    // const handleLogout = async () => oktaAuth.signOut();

    // CONSOLE LOG RESULTS OF VARIOUS FOR EDITS (FOR TESTING)
    // useEffect( () => {
    //         // console.log("placeholder")
    //         console.log("NavbarReactBootstrap::: ")
    //         console.log("isAuthenticated: " + isAuthenticated);
    //         console.log("user: " + user);
    //
    //     } ,
    //     [
    //         // fields, which - if edited - you want to see logged
    //         isAuthenticated
    //         , user
    //         , isLoading
    //     ]
    // )
    //
    // if (!authState || isLoadingProfile) {
    //     return <SpinnerLoading />
    // }

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                fixed="top"
                className='main-color'
            >
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand >Presto PLAYdate</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/home">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/search">
                                <Nav.Link>Books</Nav.Link>
                            </LinkContainer>

                            {/*{authState.isAuthenticated &&*/}
                            {/*    <LinkContainer to="/listo/banana">*/}
                            {/*        <Nav.Link>Bananas Listo</Nav.Link>*/}
                            {/*    </LinkContainer>*/}
                            {/*}*/}

                            {/*above 1 replaced by below 1*/}

                            {/*{authState.isAuthenticated &&*/}
                            {/*    <LinkContainer to="/bananas/list">*/}
                            {/*        <Nav.Link>Bananas</Nav.Link>*/}
                            {/*    </LinkContainer>*/}
                            {/*}*/}


                            {/*{authState.isAuthenticated &&*/}
                            {/*    <LinkContainer to="/shelf">*/}
                            {/*        <Nav.Link>Shelf</Nav.Link>*/}
                            {/*    </LinkContainer>*/}
                            {/*}*/}
                            {/*{authState.isAuthenticated &&*/}
                            {/*    <LinkContainer to="/fees">*/}
                            {/*        <Nav.Link>Donate</Nav.Link>*/}
                            {/*    </LinkContainer>*/}
                            {/*}*/}
                            {/*{authState.isAuthenticated && authState.accessToken?.claims?.userType === 'admin' &&*/}
                            {/*    <LinkContainer to="/admin">*/}
                            {/*        <Nav.Link>Admin</Nav.Link>*/}
                            {/*    </LinkContainer>*/}
                            {/*}*/}

                        </Nav>

                        {/*<Nav>*/}
                        {/*    /!*<LoginButtonJsxOrig></LoginButtonJsxOrig>*!/*/}
                        {/*    <LoginButton></LoginButton>*/}
                        {/*</Nav>*/}

                        {/*<Nav>*/}
                        {/*    /!*<LogoutButtonJsxOrig></LogoutButtonJsxOrig>*!/*/}
                        {/*    <LogoutButton></LogoutButton>*/}
                        {/*</Nav>*/}

                        {/*<div>*/}
                        {/*    {isAuthenticated ? (*/}
                        {/*        <>*/}
                        {/*            <p>Hello, {user?.name}</p>*/}
                        {/*            <button onClick={() => logout()}>Logout</button>*/}
                        {/*        </>*/}
                        {/*    ) : (*/}
                        {/*        <button onClick={() => loginWithRedirect()}>Login</button>*/}
                        {/*    )}*/}
                        {/*</div>*/}



                        {/*<Nav>*/}
                        {/*    {!authState.isAuthenticated ?*/}
                        {/*        <>*/}
                        {/*            <LinkContainer to="/login">*/}
                        {/*                <Nav.Link>*/}
                        {/*                    <Link type='button' className='btn btn-outline-light' to='/login'>Sign in</Link>*/}
                        {/*                </Nav.Link>*/}
                        {/*            </LinkContainer>*/}

                        {/*        </>*/}
                        {/*        :*/}
                        {/*        <>*/}
                        {/*             { authUserProfile?.userName?.length === 0 || authUserProfile?.userName == null ?*/}
                        {/*                 <NavDropdown*/}
                        {/*                     title={authUserProfile?.email}*/}
                        {/*                     id="collasible-nav-dropdown"*/}
                        {/*                     className='text-dark-emphasis'*/}
                        {/*                     align="end"*/}
                        {/*                 >*/}
                        {/*                     <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/}
                        {/*                     <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>*/}
                        {/*                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*                     <NavDropdown.Divider />*/}
                        {/*                     <NavDropdown.Item >*/}
                        {/*                         <button className='btn p-0' onClick={handleLogout}>Logout</button>*/}
                        {/*                     </NavDropdown.Item>*/}
                        {/*                 </NavDropdown>*/}
                        {/*                    :*/}
                        {/*                 <NavDropdown*/}
                        {/*                     title={authUserProfile?.userName}*/}
                        {/*                     id="collasible-nav-dropdown"*/}
                        {/*                     className='text-dark-emphasis'*/}
                        {/*                     align="end"*/}
                        {/*                 >*/}
                        {/*                     <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/}
                        {/*                     <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>*/}
                        {/*                     <NavDropdown.Divider />*/}
                        {/*                     <NavDropdown.Item >*/}
                        {/*                         <button className='btn p-0' onClick={handleLogout}>Logout</button>*/}
                        {/*                     </NavDropdown.Item>*/}
                        {/*                 </NavDropdown>*/}
                        {/*             }*/}
                        {/*        </>*/}
                        {/*    }*/}
                        {/*</Nav>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}