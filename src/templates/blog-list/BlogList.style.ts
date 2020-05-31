import styled from 'styled-components';
import media from 'styled-media-query';

export const BlogListPostList = styled.section`
  body#grid & {
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }

  ${media.lessThan('large')`
    margin-top: 3.875rem;
  `}
`;
