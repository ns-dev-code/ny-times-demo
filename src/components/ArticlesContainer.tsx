import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../utils/api';
import { Article } from '../type';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

const ArticlesContainer: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        setError(error + 'Failed to fetch articles. Please try again later.');
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
  };

  if (loading) return <div className='text-center mt-10 text-lg font-semibold'>Loading...</div>;
  if (error) return <div className='text-center mt-10 text-red-500'>{error}</div>;

  return (
    <div className='container mx-auto p-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Articles Table */}
        <ArticleList articles={articles} onArticleSelect={handleArticleSelect} selectedArticle={selectedArticle} />

        {/* Article Details */}
        <ArticleDetail article={selectedArticle} />
      </div>
    </div>
  );
};

export default ArticlesContainer;
