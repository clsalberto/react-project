import React from 'react';

import { Container, Logo, ProfileMenu } from './styles';

function Header() {
  return (
    <Container>
      <Logo>
        <a href="/">
          React
          <span>Project</span>
        </a>
      </Logo>
      <ProfileMenu />
    </Container>
  );
}

export default Header;
