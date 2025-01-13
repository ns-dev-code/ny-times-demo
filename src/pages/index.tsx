import { Geist, Geist_Mono } from 'next/font/google';
import ArticlesContainer from '@/components/ArticlesContainer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <ArticlesContainer />
    </div>
  );
}
