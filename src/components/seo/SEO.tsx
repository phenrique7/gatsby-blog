import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetadata } from '../../utils/types';

interface SEOProps {
  description?: string;
  lang?: string;
  image?: string;
  title: string;
}

interface QueryData {
  site: { siteMetadata: SiteMetadata };
}

export default function SEO(props: SEOProps) {
  const {
    description = '',
    lang = 'en',
    image = '/assets/images/cover.png',
    title,
  } = props;
  const {
    site: { siteMetadata },
  }: QueryData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || siteMetadata.description;
  const siteUrl = siteMetadata.siteUrl;
  const ogImage = `${siteUrl}${image}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image:src',
          content: ogImage,
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  );
}
