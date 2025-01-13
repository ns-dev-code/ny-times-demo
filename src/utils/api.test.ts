import { fetchArticles } from './api';
import { Article } from '../type';

const mockArticles: Article[] = [
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

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ results: mockArticles }),
  }),
) as jest.Mock;

describe('fetchArticles', () => {
  it('fetches articles successfully', async () => {
    const articles = await fetchArticles();
    expect(articles).toEqual(mockArticles);
  });

  it('throws an error when the fetch fails', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    await expect(fetchArticles()).rejects.toThrow('Failed to fetch articles');
  });
});
