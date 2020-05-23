import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Post from '../Post';

describe('<Post /> test suite', () => {
  it('should render the component correctly', function () {
    const post = {
      slug: '/about',
      category: 'Misc',
      date: '30 de Julho de 2019',
      timeToRead: '5',
      title: 'Diga não ao Medium: tenha sua própria plataforma',
      description:
        'Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium',
    };

    render(
      <Post
        slug={post.slug}
        category={post.category}
        date={post.date}
        timeToRead={post.timeToRead}
        title={post.title}
        description={post.description}
      />,
    );

    expect(screen.getByTestId('post-link').getAttribute('href')).toBe(
      post.slug,
    );
    expect(screen.getByTestId('post-tag').textContent).toBe(post.category);
    expect(
      screen.getByText(`${post.date} • ${post.timeToRead} min de leitura`),
    ).toBeInTheDocument();
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.description)).toBeInTheDocument();
  });
});
