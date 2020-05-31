import * as React from 'react';
// @ts-ignore
import { TransitionPortal } from 'gatsby-plugin-transition-link';
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
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutRoot>
  );
}
