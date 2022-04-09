import React from 'react';

const Registure = () => {
    return (
        <form>
            <h1>Please registure</h1>
            <input type="text" placeholder='name' />
            <br />
            <input type="email" placeholder='email' />
            <br />
            <input type="password" placeholder='password' />
            <br />
            <input type="submit" value="registure" />

        </form>
    );
};

export default Registure;