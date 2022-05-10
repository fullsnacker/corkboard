import React from 'react';

function Header(){
    return <header>
    <a href='/'>
        <img className='logo' src={require('../images/logo.png')} />
    </a>
    </header>
}

export default Header;