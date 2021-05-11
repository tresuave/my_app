import React from 'react';
import brolic from '../images/brolic.png'
function Logo(props) {
    return (
        <div>
            <img className ='logo' src ={brolic} alt="Logo" />
        </div>
    );
}

export default Logo;