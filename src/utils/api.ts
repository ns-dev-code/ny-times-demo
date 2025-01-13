import { Article } from '../type';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = await response.json();
  return data.results;
};
