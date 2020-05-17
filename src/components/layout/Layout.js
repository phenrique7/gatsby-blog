import * as React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar/Sidebar';
import * as S from './Layout.style';
import GlobalStyle from '../../styles/global';

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
    </S.LayoutRoot>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
