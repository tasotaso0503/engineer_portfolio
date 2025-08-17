// src/app/page.tsx

import Portfolio from '../components/Portfolio'


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

export default function Home() {
  return <Portfolio />
}