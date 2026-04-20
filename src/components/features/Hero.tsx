// src/components/features/Hero.tsx
'use client'

import React from 'react';
import { Mail, Github, ChevronDown, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// Contextフックをインポート
import { usePortfolioContext } from '@/contexts/PortfolioContext';

export default function Hero() {
  // スクロール関数だけをContextから取得
  const { scrollToSection } = usePortfolioContext();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-blue-100">
      <div className="pointer-events-none absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-blue-300/40 blur-3xl" />

      <div className="relative text-center max-w-4xl mx-auto px-4">
        <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-white/70 shadow-xl shadow-sky-500/10">
          <AvatarImage src="/images/icon_dog.jpg" alt="遠藤羊太郎 プロフィール画像" />
          <AvatarFallback className="bg-gradient-to-br from-sky-500 to-blue-600 text-white text-2xl font-bold">
            遠藤
          </AvatarFallback>
        </Avatar>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
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
          <Button
            className="rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-lg shadow-sky-500/25 border-0"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4 mr-2" />
            連絡する
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-slate-300 bg-white/70 backdrop-blur hover:bg-white text-slate-700"
            onClick={() => scrollToSection("contact")}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-slate-300 bg-white/70 backdrop-blur hover:bg-white text-slate-700"
            onClick={() => scrollToSection("contact")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-sky-600"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};