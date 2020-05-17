import * as React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar/Sidebar';
import GlobalStyle from '../../styles/global';
import MenuBar from '../menu-bar/MenuBar';
import * as S from './Layout.style';

/**
 * @param {React.ReactNode} children
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Layout({ children }) {
  return (
    <S.LayoutRoot>
      <GlobalStyle />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutRoot>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
