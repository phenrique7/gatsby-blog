import * as React from 'react';
import * as S from './SocialNetworks.style';
import { socialNetworks } from './SocialNetworks.content';

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
