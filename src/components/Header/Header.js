import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    // const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/Products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/registure'}>Registure</Link>
                {
                    user && <>
                        <Link to={'/privet'}>Privet</Link>
                        <Link to={'/view only'}>View only</Link>
                    </>
                }
                <span>{user?.displayName && user.displayName}</span>
                <img src={user?.photoURL && user.photoURL} alt="" />

                {user?.uid ? <button onClick={() => signOut(auth)}>Sign-out</button> :
                    <Link to={'/login'}>Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;