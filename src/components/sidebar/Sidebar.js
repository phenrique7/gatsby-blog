import * as React from 'react';
import Profile from '../profile/Profile';
import SocialNetworks from '../social-networks/SocialNetworks';
import Menu from '../menu/Menu';
import * as S from './Sidebar.style';

export default function Sidebar() {
  return (
    <S.SidebarRoot>
      <Profile />
      <SocialNetworks />
      <Menu />
    </S.SidebarRoot>
  );
}
