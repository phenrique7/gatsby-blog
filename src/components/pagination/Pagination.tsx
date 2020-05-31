import * as React from 'react';
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import * as S from './Pagination.style';
import { getThemeColor } from '../../utils/theme';

interface PaginationProps {
  first: boolean;
  last: boolean;
  currentPage: number;
  pages: number;
  prevPage?: string;
  nextPage?: string;
}

export default function Pagination(props: PaginationProps) {
  const { first, last, currentPage, pages, prevPage, nextPage } = props;

  return (
    <S.PaginationRoot>
      {!first && (
        <AniLink
          to={prevPage}
          direction="left"
          duration={0.6}
          bg={getThemeColor()}
          cover
        >
          ← Página anterior
        </AniLink>
      )}
      <div>
        {currentPage} de {pages}
      </div>
      {!last && (
        <AniLink
          to={nextPage}
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
          cover
        >
          Próxima página →
        </AniLink>
      )}
    </S.PaginationRoot>
  );
}
