import {  NavLink } from "react-router-dom";


export const NavbarLibraryVersion = () => {

return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
        <div className='container-fluid'>

            <span className='navbar-brand'>Presto PLAYdateBanana</span>

            {/*<span className='navbar-brand'>{authUserProfile?.userName}</span>*/}

            <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/search'>Books</NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/coin'>Coin</NavLink>
                    </li>




                </ul>

            </div>
        </div>
    </nav>

);
}