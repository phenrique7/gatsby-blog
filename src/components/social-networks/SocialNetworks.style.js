import styled from 'styled-components';

export const SocialNetworksRoot = styled.div`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialNetworksList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialNetworksLink = styled.a`
  color: #8899a6;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`;

export const SocialNetworksIcon = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
