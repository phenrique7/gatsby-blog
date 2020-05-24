import * as React from 'react';
import DisqusComments from 'react-disqus-comments';
import * as S from './Comments.style';

interface CommentsProps {
  url: string;
  title: string;
}

export default function Comments({ url, title }: CommentsProps) {
  const completeURL = `https://johndoe.com.br/${url}`;

  return (
    <S.CommentsRoot>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <DisqusComments
        shortname="willianjusten"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsRoot>
  );
}
