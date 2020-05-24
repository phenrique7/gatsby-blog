import * as React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';

export default function Search() {
  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  );
}
