// src/components/features/Hero.tsx
'use client'

import React from 'react';
import { Mail, Github, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// Contextフックをインポート
import { usePortfolioContext } from '@/contexts/PortfolioContext';

export default function Hero() {
  // スクロール関数だけをContextから取得
  const { scrollToSection } = usePortfolioContext();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="text-center max-w-4xl mx-auto px-4">
        {/* <Avatar className="w-32 h-32 mx-auto mb-8">
          <AvatarFallback className="bg-blue-600 text-white text-2xl font-bold">
            遠藤
          </AvatarFallback>
        </Avatar> */}

        <Avatar className="w-32 h-32 mx-auto mb-8">
          <AvatarImage src="/images/icon_dog.jpg" alt="遠藤羊太郎 プロフィール画像" />
          <AvatarFallback className="bg-blue-600 text-white text-2xl font-bold">
            遠藤
          </AvatarFallback>
        </Avatar>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-800">
          遠藤羊太郎
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8">
          ソフトウェアエンジニア
        </p>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
          モダンなWeb技術を使用してユーザーにとって価値あるアプリケーション / システムを設計開発しています。
          生成AIを活用した作業の効率化に特に興味があります。
        </p>

        {/* ボタンのロジックはContextから */}
        <div className="flex justify-center space-x-4 mb-12">
          <Button className="rounded-full" onClick={() => scrollToSection("contact")}>
            <Mail className="w-4 h-4 mr-2" />
            連絡する
          </Button>

          <Button variant="outline" className="rounded-full" onClick={() => scrollToSection("contact")}>
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          {/* <Button variant="outline" className="rounded-full">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button> */}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-blue-600"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};