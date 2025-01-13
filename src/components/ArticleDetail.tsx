import React from 'react';
import { Article } from '../type';

interface ArticleDetailProps {
  article: Article | null;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <div className='p-4 bg-gray-50 rounded-lg shadow-md'>
      {article ? (
        <>
          <h2 className='text-2xl font-bold mb-4'>{article.title}</h2>
          <p className='text-gray-600 mb-2'>{article.byline}</p>
          <p className='text-sm text-gray-500 mb-4'>{article.published_date}</p>
          <p className='text-justify mb-4'>{article.abstract}</p>
          <a
            href={article.url}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
          >
            Read Full Article
          </a>
        </>
      ) : (
        <div className='text-center text-gray-500'>
          <p>Select an article to view its details.</p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
