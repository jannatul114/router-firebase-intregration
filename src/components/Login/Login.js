import React from 'react';

import useFirebase from '../../hooks/useFirebase';




const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please login</h1>
            <div style={{ margin: '30px' }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
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