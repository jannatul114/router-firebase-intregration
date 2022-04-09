import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>this is home</h1>
            <img src={user?.photoURL} alt="" />
            <h2>{user ? user?.displayName : 'No body'}</h2>
            <h4>{user ? user?.email : 'No Body'}</h4>
        </div>
    );
};

export default Home;