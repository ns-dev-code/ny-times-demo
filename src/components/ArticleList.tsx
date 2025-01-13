import React, { useState } from 'react';
import { Article } from '../type';

interface ArticleListProps {
  articles: Article[];
  onArticleSelect: (article: Article) => void;
  selectedArticle: Article | null;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, selectedArticle, onArticleSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const currentArticles = articles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='md:col-span-2'>
      <h1 className='text-3xl font-bold mb-6'>Articles</h1>
      <table className='min-w-full table-auto border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-300 px-4 py-2 text-left'>Title</th>
            <th className='border border-gray-300 px-4 py-2 text-left'>Byline</th>
            <th className='border border-gray-300 px-4 py-2 text-left'>Published Date</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article) => (
            <tr
              key={article.id}
              className={`cursor-pointer hover:bg-gray-50 transition ${
                selectedArticle?.id === article.id ? 'bg-blue-100' : ''
              }`}
              onClick={() => onArticleSelect(article)}
            >
              <td className='border border-gray-300 px-4 py-2'>{article.title}</td>
              <td className='border border-gray-300 px-4 py-2'>{article.byline}</td>
              <td className='border border-gray-300 px-4 py-2'>{article.published_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className='flex justify-center items-center mt-4 space-x-2'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
