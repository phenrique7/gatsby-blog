import * as React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';

/**
 * @returns {React.ReactNode}
 * @constructor
 */
export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About page</h1>
    </Layout>
  );
}
