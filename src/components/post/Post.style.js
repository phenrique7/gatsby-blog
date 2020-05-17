import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostRoot = styled.section`
  display: flex;
  border-bottom: 1px solid #38444d;
  padding: 2rem 3rem;
  width: 100%;
`;

export const PostLink = styled(Link)`
  color: #8899a6;
  display: flex;
  align-items: center;

  &:hover {
    color: #1fa1f2;
  }
`;

export const PostTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  min-height: 5.625rem;
  min-width: 5.625rem;
  text-transform: uppercase;
  background: ${props => props.bg};
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const PostDate = styled.span`
  font-size: 0.9rem;
`;

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const PostDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2rem;
`;
