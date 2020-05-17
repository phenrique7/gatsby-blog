import * as React from 'react';
import * as S from './SocialNetworks.style';
import {
  Github as GithubIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Facebook as FacebookIcon,
} from 'styled-icons/boxicons-logos';

const socialNetworks = [
  {
    id: '82a9d946',
    link: 'https://github.com/phenrique7',
    label: 'GitHub',
    icon: GithubIcon,
  },
  {
    id: 'dfc1d736',
    link: 'https://twitter.com/__phenrique7',
    label: 'Twitter',
    icon: TwitterIcon,
  },
  {
    id: 'fd3cb848',
    link: 'https://www.instagram.com/phenrique___',
    label: 'Instagram',
    icon: InstagramIcon,
  },
  {
    id: '2ab14d8c',
    link: 'https://www.youtube.com/channel/UCgm5bwMbxHDiF_RdC-aWg6A',
    label: 'Youtube',
    icon: YoutubeIcon,
  },
  {
    id: '800a0881',
    link: 'https://www.facebook.com/PHenrique1288',
    label: 'Facebook',
    icon: FacebookIcon,
  },
];

/**
 * @returns {React.ReactNode}
 * @constructor
 */
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
