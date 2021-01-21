import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location]);

  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>
        Sobre
      </NavLink>{' '}
      |{' '}
      <NavLink to="login" activeStyle={{ color: 'tomato' }}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
