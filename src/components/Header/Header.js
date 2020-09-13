import React from 'react';

import { Search } from '../Search/Search';

import {
  Container,
  SearchContainer,
  Link,
  Item,
  Menu,
  Nav,
  Wrapper
} from './Header-styles';

export const Header = () => (
  <Container>
    <Wrapper>
      <Nav>
        <Menu>
          <Item>
            <Link to='/'>Home</Link>
          </Item>
        </Menu>
      </Nav>
      <SearchContainer>
        <Search />
      </SearchContainer>
    </Wrapper>
  </Container>
);
