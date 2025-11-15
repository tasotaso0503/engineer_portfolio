


import React from 'react';

// Context Provider (クライアントコンポーネント)
import PortfolioProvider from '@/contexts/PortfolioContext';

// 分割したフィーチャーコンポーネント (default export)
import Header from '@/components/features/Header';
import Hero from '@/components/features/Hero';
import About from '@/components/features/About';
import Skills from '@/components/features/Skills';
import Projects from '@/components/features/Projects';
import Experience from '@/components/features/Experience';
import Contact from '@/components/features/Contact';
import Footer from '@/components/features/Footer';

// メタデータ
export const metadata = {
  title: '遠藤羊太郎 - ソフトウェアエンジニア | ポートフォリオ',
  description: 'React/Next.js、Pythonを専門とするソフトウェアエンジニアのポートフォリオサイト',
  keywords: 'エンジニア, React, Next.js, Python, ソフトウェア, ポートフォリオ',
  authors: [{ name: '遠藤羊太郎' }],
  creator: '遠藤羊太郎',
  openGraph: {
    title: '遠藤羊太郎 - ソフトウェアエンジニア',
    description: 'React/Next.js、Pythonを専門とするソフトウェアエンジニア',
    url: 'https://engineer-portfolio-nine.vercel.app/',
    siteName: '遠藤羊太郎 ポートフォリオ',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '遠藤羊太郎 - ソフトウェアエンジニア',
    description: 'React/Next.js、Pythonを専門とするソフトウェアエンジニア',
    creator: '',
  },
  robots: {
    index: true,
    follow: true,
  },
}


// メインのページコンポーネント (サーバーコンポーネント)
export default function Home() {
  return (
    // Providerでページ全体を囲み、クライアントコンポーネント（Header, Hero）が
    // Contextの値をどこからでも呼び出せるようにする
    <PortfolioProvider>
      <div className="min-h-screen bg-white">

        {/* 1. Header (クライアントコンポーネント) */}
        <Header />

        {/* 2. Hero (クライアントコンポーネント) */}
        <Hero />

        {/* 3. About (サーバーコンポーネント) */}
        <About />

        {/* 4. Skills (サーバーコンポーネント、データをPropsで渡す) */}
        <Skills />

        {/* 5. Projects (サーバーコンポーネント、データをPropsで渡す) */}
        <Projects />

        {/* 6. Experience (サーバーコンポーネント、データをPropsで渡す) */}
        <Experience />

        {/* 7. Contact (サーバーコンポーネント) */}
        <Contact />

        {/* 8. Footer (サーバーコンポーネント) */}
        <Footer />

      </div>
    </PortfolioProvider>
  );
}