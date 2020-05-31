import * as React from 'react';
import * as S from './RecommendedPosts.style';
import { RecommendedPost } from '../../utils/types';
import { getThemeColor } from '../../utils/theme';

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
          direction="left"
          duration={0.6}
          bg={getThemeColor()}
          cover
        >
          {previous.frontmatter.title}
        </S.RecommendedPostsLink>
      )}
      {next && (
        <S.RecommendedPostsLink
          to={next.fields.slug}
          className="next"
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
          cover
        >
          {next.frontmatter.title}
        </S.RecommendedPostsLink>
      )}
    </S.RecommendedPostsRoot>
  );
}
