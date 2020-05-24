import * as React from 'react';
import { Link } from 'gatsby';
import * as S from './Pagination.style';

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
      {!first && <Link to={prevPage}>← Página anterior</Link>}
      <div>
        {currentPage} de {pages}
      </div>
      {!last && <Link to={nextPage}>Próxima página →</Link>}
    </S.PaginationRoot>
  );
}
