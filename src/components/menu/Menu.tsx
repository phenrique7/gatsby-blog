import * as React from 'react';
import * as S from './Menu.style';

export default function Menu() {
  return (
    <S.MenuNav>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to="/" activeClassName="active">
            Home
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/about" activeClassName="active">
            About
          </S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.MenuNav>
  );
}
