import * as React from 'react';
import * as S from './SocialNetworks.style';
import {
  Github,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
} from 'styled-icons/boxicons-logos';

const socialNetworks = [
  {
    id: '82a9d946',
    link: 'https://github.com/phenrique7',
    label: 'GitHub',
    icon: Github,
  },
  {
    id: 'dfc1d736',
    link: 'https://twitter.com/__phenrique7',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    id: 'fd3cb848',
    link: 'https://www.instagram.com/phenrique___',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    id: '2ab14d8c',
    link: 'https://www.youtube.com/channel/UCgm5bwMbxHDiF_RdC-aWg6A',
    label: 'Youtube',
    icon: Youtube,
  },
  {
    id: '800a0881',
    link: 'https://www.facebook.com/PHenrique1288',
    label: 'Facebook',
    icon: Facebook,
  },
];

export default function SocialNetworks() {
  return (
    <S.SocialNetworksRoot>
      <S.SocialNetworksList>
        {socialNetworks.map(({ id, link, label, icon: Icon }) => (
          <li key={id}>
            <S.SocialNetworksLink
              href={link}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialNetworksIcon>
                <Icon />
              </S.SocialNetworksIcon>
            </S.SocialNetworksLink>
          </li>
        ))}
      </S.SocialNetworksList>
    </S.SocialNetworksRoot>
  );
}
