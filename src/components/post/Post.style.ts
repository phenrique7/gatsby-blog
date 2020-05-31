import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

interface PostTagProps {
  bg: string;
}

export const PostRoot = styled.section`
  display: flex;
  border-bottom: 1px solid var(--borders);
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    background-color: var(--background);
    padding: 0;
    border: none;
    box-shadow: 0 -1px 0 0 var(--borders), 0 1px 0 0 var(--borders),
      1px 0 0 0 var(--borders), -1px 0 0 0 var(--borders);
  }

  ${media.lessThan('large')`
    padding: 1.5rem;
  `}
`;

export const PostLink = styled(Link)`
  color: var(--texts);
  display: flex;
  align-items: center;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const PostTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--white);
  font-size: 1.3rem;
  font-weight: 700;
  min-height: 5.625rem;
  min-width: 5.625rem;
  text-transform: uppercase;
  background: ${(props: PostTagProps) => props.bg};

  body#grid & {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan('large')`
    border-radius: 0.125rem;
    margin-right: auto;
    margin-bottom: 0.5rem;
    min-width: auto;
    min-height: auto;
    padding: 0.25rem;
    font-size: 1rem;
 `}
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  body#grid & {
    text-align: center;
    margin-left: 0;
  }

  ${media.lessThan('large')`
    margin-left: 0;
  `}
`;

export const PostDate = styled.span`
  font-size: 0.9rem;
`;

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2rem;
`;
