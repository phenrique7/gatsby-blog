import * as React from 'react';
import Profile from '../profile/Profile';
import * as S from './Sidebar.style';

export default function Sidebar() {
  return (
    <S.SidebarRoot>
      <Profile />
    </S.SidebarRoot>
  );
}
