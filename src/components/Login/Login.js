import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h1>Please login</h1>
            <div style={{ margin: '30px' }}>
                <button onClick={() => handleGoogleSignIn()}>Google Sign in</button>
            </div>
            <form>
                <input type="text" placeholder='email' />
                <br />
                <input type="text" placeholder='password' />
                <br />
                <button>login</button>

            </form>
        </div>
    );
};

export default Login;