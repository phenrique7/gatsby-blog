/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import algoliasearch from 'algoliasearch/lite';
import * as S from './Search.style';
import Post from '../post/Post';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID!,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY!,
);

interface HitProps {
  hit: {
    fields: { slug: string };
    title: string;
    date: string;
    background: string;
    description: string;
    category: string;
    timeToRead: number;
  };
}

function Hit({ hit }: HitProps) {
  return (
    <Post
      category={hit.category}
      date={hit.date}
      description={hit.date}
      slug={hit.fields.slug}
      title={hit.title}
      background={hit.background}
      timeToRead={hit.timeToRead}
    />
  );
}

export default function Search() {
  return (
    <S.SearchRoot>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME!}
      >
        <SearchBox
          autoFocus
          translations={{ placeholder: 'Pesquisar...' }}
        />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchRoot>
  );
}
