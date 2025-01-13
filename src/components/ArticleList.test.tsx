import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals'; // Import the matchers
import ArticleList from './ArticleList';

const mockArticles = [
  {
    id: 1,
    title: 'Test Article 1',
    abstract: 'Test abstract 1',
    byline: 'By Test Author 1',
    published_date: '2023-05-01',
    url: 'https://example.com/1',
  },
  {
    id: 2,
    title: 'Test Article 2',
    abstract: 'Test abstract 2',
    byline: 'By Test Author 2',
    published_date: '2023-05-02',
    url: 'https://example.com/2',
  },
];

describe('ArticleList', () => {
  it('renders article titles', () => {
    render(<ArticleList selectedArticle={mockArticles[0]} articles={mockArticles} onArticleSelect={() => {}} />);
    expect(screen.getByText('Test Article 1')).toBeTruthy();
    expect(screen.getByText('Test Article 2')).toBeTruthy();
  });

  it('calls onArticleSelect when an article is clicked', () => {
    const mockOnArticleSelect = jest.fn();
    render(
      <ArticleList selectedArticle={mockArticles[0]} articles={mockArticles} onArticleSelect={mockOnArticleSelect} />,
    );
    fireEvent.click(screen.getByText('Test Article 1'));
    expect(mockOnArticleSelect).toHaveBeenCalledWith(mockArticles[0]);
  });
});
