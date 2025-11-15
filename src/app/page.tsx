


import React from 'react';
// アイコンやUIコンポーネント
import { Github, Mail, Code, Database, Globe, MapPin, Calendar, ExternalLink } from 'lucide-react';

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

// 静的データ (page.tsx または別ファイルで管理)
const skills = [
  { name: 'React/Next.js', level: 90, icon: <Globe className="w-5 h-5" /> },
  { name: 'TypeScript', level: 85, icon: <Code className="w-5 h-5" /> },
  { name: 'HTML/CSS', level: 80, icon: <Database className="w-5 h-5" /> },
  { name: 'Python', level: 75, icon: <Code className="w-5 h-5" /> },
  { name: 'PostgreSQL', level: 70, icon: <Database className="w-5 h-5" /> },
  { name: 'AWS', level: 65, icon: <Globe className="w-5 h-5" /> }
];

const projects = [
  {
    title: '企業用社内チャットbot',
    description: 'Flask, LangChainを使用した社内用チャットbotアプリ。RAGの諸機能、社内用資料の管理機能を実装し、業務効率化を実現。',
    tech: ['Flask', 'LangChain', 'PostgreSQL', 'Heroku'],
    image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Ecommerce+App'
  },
  {
    title: '頭痛患者 / 医者用アプリ',
    description: 'FastAPI、Next.js、Lambdaを使用したサーバーレスウェブアプリ。SSR, CSRを活用してUX向上に貢献。バックエンドのAPIと連携し、ユーザー認証やチャット機能、カレンダー機能、天候情報の表示機能などを実装。',
    tech: ['FastAPI、Next', 'Next.js', 'PostgreSQL', 'Lambda', 'Vercel'],
    image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+Manager'
  },
  {
    title: '大学教授用チャットbot',
    description: 'Flask, LangChainを使用した大学教授用チャットbotアプリ。RAGの機能によって、「助成金申請書作成」をサポートし、研究時間の最大化を実現。',
    tech: ['Flask', 'LangChain', 'PostgreSQL', 'Heroku'],
    image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Data+Dashboard'
  }
];

const experiences = [
  {
    title: 'ソフトウェアエンジニア',
    company: '株式会社NNN',
    period: '2024.09 - 現在',
    location: '東京',
    description: [
      '様々なPythonフレームワークやReact/Next.jsを使用したWebアプリケーションの設計・開発',
      'AWSやVercel、Herokuなどのクラウドプラットフォームの構築・運用',
      'クライアントへのヒアリングによる要件抽出も担当'
    ]
  }
];


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
        <Skills skills={skills} />

        {/* 5. Projects (サーバーコンポーネント、データをPropsで渡す) */}
        <Projects projects={projects} />

        {/* 6. Experience (サーバーコンポーネント、データをPropsで渡す) */}
        <Experience experiences={experiences} />

        {/* 7. Contact (サーバーコンポーネント) */}
        <Contact />

        {/* 8. Footer (サーバーコンポーネント) */}
        <Footer />

      </div>
    </PortfolioProvider>
  );
}