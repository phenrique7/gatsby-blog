import * as React from 'react';
import * as S from './RecommendedPosts.style';
import { RecommendedPost } from '../../utils/types';

interface RecommendedPostsProps {
  next: RecommendedPost | null;
  previous: RecommendedPost | null;
}

export default function RecommendedPosts(props: RecommendedPostsProps) {
  const { next, previous } = props;

  return (
    <S.RecommendedPostsRoot className={next ? 'next' : undefined}>
      {previous && (
        <S.RecommendedPostsLink
          to={previous.fields.slug}
          className="previous"
        >
          {previous.frontmatter.title}
        </S.RecommendedPostsLink>
      )}
      {next && (
        <S.RecommendedPostsLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </S.RecommendedPostsLink>
      )}
    </S.RecommendedPostsRoot>
  );
}
