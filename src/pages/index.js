import * as React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';

/**
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
    </Layout>
  );
}
