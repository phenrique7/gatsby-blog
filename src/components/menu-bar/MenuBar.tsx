import * as React from 'react';
// @ts-ignore
import { Home as HomeIcon } from 'styled-icons/boxicons-solid';
// @ts-ignore
import { SearchAlt2 as SearchIcon } from 'styled-icons/boxicons-regular';
// @ts-ignore
import { UpArrowAlt as UpArrowIcon } from 'styled-icons/boxicons-regular';
// @ts-ignore
import { LightBulb as LightBulbIcon } from 'styled-icons/entypo';
// @ts-ignore
import { Grid as GridIcon } from 'styled-icons/boxicons-solid';
// @ts-ignore
import { ThList as ListIcon } from 'styled-icons/typicons';
import { Display, Theme } from '../../utils/types';
import * as S from './MenuBar.style';
import { getThemeColor } from '../../utils/theme';

declare global {
  interface Window {
    __theme: Theme;
    __display: Display;
    __setPreferredTheme(theme: Theme): void;
    __setPreferredDisplay(theme: Display): void;
  }
}

export default function MenuBar() {
  const [theme, setTheme] = React.useState<Theme>('dark');
  const [display, setDisplay] = React.useState<Display>('list');

  React.useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);
  }, []);

  function setPreferredTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    window.__setPreferredTheme(newTheme);
  }

  function setPreferredDisplay() {
    const newDisplay = display === 'list' ? 'grid' : 'list';
    setDisplay(newDisplay);
    window.__setPreferredDisplay(newDisplay);
  }

  return (
    <S.MenuBarRoot>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Go back to home"
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
          cover
        >
          <S.MenuBarItem>
            <HomeIcon />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          title="Search"
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
          cover
        >
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
        <S.MenuBarItem
          title="Change view"
          onClick={setPreferredDisplay}
          className="display"
        >
          {display === 'list' ? <GridIcon /> : <ListIcon />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Go to top">
          <UpArrowIcon />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarRoot>
  );
}
