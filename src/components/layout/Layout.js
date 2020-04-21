import * as React from 'react';
import PropTypes from 'prop-types';
import Profile from '../profile/Profile';

export default function Layout({ children }) {
  return (
    <>
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
