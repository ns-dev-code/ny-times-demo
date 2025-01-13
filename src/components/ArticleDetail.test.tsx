import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetail from './ArticleDetail';

const article = {
  id: 1,
  title: 'Title',
  abstract: 'string',
  byline: 'string',
  published_date: 'string',
  url: 'string',
};

test('renders ArticleDetail component', () => {
  render(<ArticleDetail article={article} />);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeTruthy();
});
