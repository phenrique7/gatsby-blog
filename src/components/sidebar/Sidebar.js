import * as React from 'react';
import Profile from '../profile/Profile';
import SocialNetworks from '../social-networks/SocialNetworks';
import * as S from './Sidebar.style';

export default function Sidebar() {
  return (
    <S.SidebarRoot>
      <Profile />
      <SocialNetworks />
    </S.SidebarRoot>
  );
}
