import styled from 'styled-components';
// @ts-ignore
import Image from 'gatsby-image';
// @ts-ignore
import media from 'styled-media-query';

export const AvatarRoot = styled(Image)`
  border-radius: 50%;
  margin: 0 auto;
  height: 5rem;
  width: 5rem;

  ${media.lessThan('large')`
    height: 1.875rem;
    width: 1.875rem;
  `}
`;
