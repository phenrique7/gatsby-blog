import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Post.style';

/**
 * @param {PostProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Post(props) {
  const {
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
  } = props;

  return (
    <S.PostRoot>
      <S.PostLink to={slug} data-testid="post-link">
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

Post.defaultProps = {
  background: '#1fa1f2',
};

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
};
