import * as React from 'react';
import * as S from './Post.style';
import { getThemeColor } from '../../utils/theme';

interface PostProps {
  slug: string;
  category: string;
  date: string;
  timeToRead: number;
  title: string;
  description: string;
  background?: string;
}

export default function Post(props: PostProps) {
  const {
    slug,
    category,
    date,
    timeToRead,
    title,
    description,
    background = 'var(--highlight)',
  } = props;

  return (
    <S.PostRoot>
      <S.PostLink
        to={slug}
        data-testid="post-link"
        direction="right"
        duration={0.6}
        bg={getThemeColor()}
        cover
      >
        <S.PostTag bg={background} data-testid="post-tag">
          {category}
        </S.PostTag>
        <S.PostInfo>
          <S.PostDate>
            {date} • {timeToRead} min de leitura
          </S.PostDate>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostInfo>
      </S.PostLink>
    </S.PostRoot>
  );
}
