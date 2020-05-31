import styled from 'styled-components';
// @ts-ignore
import media from 'styled-media-query';

export const SocialNetworksRoot = styled.div`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const SocialNetworksList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialNetworksLink = styled.a`
  color: var(--texts);
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const SocialNetworksIcon = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
