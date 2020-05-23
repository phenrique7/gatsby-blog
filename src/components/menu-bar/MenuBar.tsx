import * as React from 'react';
import { Home as HomeIcon } from 'styled-icons/boxicons-solid';
import { SearchAlt2 as SearchIcon } from 'styled-icons/boxicons-regular';
import { UpArrowAlt as UpArrowIcon } from 'styled-icons/boxicons-regular';
import { LightBulb as LightBulbIcon } from 'styled-icons/entypo';
import { Grid as GridIcon } from 'styled-icons/boxicons-solid';
import * as S from './MenuBar.style';

export default function MenuBar() {
  return (
    <S.MenuBarRoot>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Go back to home">
          <S.MenuBarItem>
            <HomeIcon />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" title="Search">
          <S.MenuBarItem>
            <SearchIcon />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Change theme">
          <LightBulbIcon />
        </S.MenuBarItem>
        <S.MenuBarItem title="Change view">
          <GridIcon />
        </S.MenuBarItem>
        <S.MenuBarItem title="Go to top">
          <UpArrowIcon />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarRoot>
  );
}
