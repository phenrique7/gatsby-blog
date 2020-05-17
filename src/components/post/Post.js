import * as React from 'react';
import * as S from './Post.style';

export default function Post() {
  return (
    <S.PostRoot>
      <S.PostLink to="/slug/">
        <S.PostTag bg="#47650b">Misc</S.PostTag>
        <S.PostInfo>
          <S.PostDate>30 de Maio de 2020 • 4 min de leitura</S.PostDate>
          <S.PostTitle>
            Diga não ao Medium: tenha sua própria plataforma
          </S.PostTitle>
          <S.PostDescription>
            Algumas razões para você ter sua própria plataforma ao invés de
            soluções como o Medium.
          </S.PostDescription>
        </S.PostInfo>
      </S.PostLink>
    </S.PostRoot>
  );
}
