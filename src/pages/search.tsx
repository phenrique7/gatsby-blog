import * as React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import Search from '../components/search/Search';

export default function SearchPage() {
  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  );
}
