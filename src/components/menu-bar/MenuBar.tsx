import * as React from 'react';
import { Home as HomeIcon } from 'styled-icons/boxicons-solid';
import { SearchAlt2 as SearchIcon } from 'styled-icons/boxicons-regular';
import { UpArrowAlt as UpArrowIcon } from 'styled-icons/boxicons-regular';
import { LightBulb as LightBulbIcon } from 'styled-icons/entypo';
import { Grid as GridIcon } from 'styled-icons/boxicons-solid';
import { ThList as ListIcon } from 'styled-icons/typicons';
import * as S from './MenuBar.style';

type Theme = 'dark' | 'light';
type Display = 'list' | 'grid';

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
        <S.MenuBarItem title="Change view" onClick={setPreferredDisplay}>
          {display === 'list' ? <GridIcon /> : <ListIcon />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Go to top">
          <UpArrowIcon />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarRoot>
  );
}
