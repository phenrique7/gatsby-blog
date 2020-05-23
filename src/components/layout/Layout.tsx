import * as React from 'react';
import Sidebar from '../sidebar/Sidebar';
import GlobalStyle from '../../styles/global';
import MenuBar from '../menu-bar/MenuBar';
import * as S from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.LayoutRoot>
      <GlobalStyle />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutRoot>
  );
}
