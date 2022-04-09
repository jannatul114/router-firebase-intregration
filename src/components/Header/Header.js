import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/Products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/registure'}>Registure</Link>
                <span>{user?.displayName && user.displayName}</span>
                <img src={user?.photoURL && user.photoURL} alt="" />

                {user?.uid ? <button onClick={handleSignOut}>Sign-out</button> :
                    <Link to={'/login'}>Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;