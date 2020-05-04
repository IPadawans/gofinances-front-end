import React from 'react';

import { Container, NavigationLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  selected?: 'dashboard' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  selected = 'dashboard',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavigationLink to="/" selected={selected === 'dashboard'}>
          Listagem
        </NavigationLink>
        <NavigationLink to="/import" selected={selected === 'import'}>
          Importar
        </NavigationLink>
      </nav>
    </header>
  </Container>
);

export default Header;
