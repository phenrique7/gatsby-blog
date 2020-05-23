import * as React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import Post from '../components/post/Post';

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <Post
        slug="/about"
        category="Misc"
        date="30 de Julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium"
      />
    </Layout>
  );
}
