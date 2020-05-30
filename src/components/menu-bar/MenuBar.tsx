import * as React from 'react';
import { Home as HomeIcon } from 'styled-icons/boxicons-solid';
import { SearchAlt2 as SearchIcon } from 'styled-icons/boxicons-regular';
import { UpArrowAlt as UpArrowIcon } from 'styled-icons/boxicons-regular';
import { LightBulb as LightBulbIcon } from 'styled-icons/entypo';
import { Grid as GridIcon } from 'styled-icons/boxicons-solid';
import * as S from './MenuBar.style';

type Theme = 'dark' | 'light';

declare global {
  interface Window {
    __theme: Theme;
    __setPreferredTheme(theme: Theme): void;
  }
}

export default function MenuBar() {
  const [theme, setTheme] = React.useState<Theme>(window.__theme);

  function setPreferredTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    window.__setPreferredTheme(newTheme);
  }

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
        <S.MenuBarItem
          title="Change theme"
          onClick={setPreferredTheme}
          className={theme}
        >
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
