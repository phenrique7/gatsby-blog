import * as React from 'react';
import * as S from './Menu.style';
import { getThemeColor } from '../../utils/theme';

export default function Menu() {
  return (
    <S.MenuNav>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink
            to="/"
            activeClassName="active"
            direction="left"
            duration={0.6}
            bg={getThemeColor()}
            cover
          >
            Home
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink
            to="/about"
            activeClassName="active"
            direction="left"
            duration={0.6}
            bg={getThemeColor()}
            cover
          >
            About
          </S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.MenuNav>
  );
}
