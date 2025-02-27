import React from 'react';
import Register from '../share/Register';
import Login from '../share/Login';

const Root = () => {
    return (
        <div>
            <Register></Register>
            <section>
                <Login></Login>
            </section>
        </div>
    );
};

export default Root;