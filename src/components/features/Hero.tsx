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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(30,64,175,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative text-center max-w-4xl mx-auto px-4">
        <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-blue-100 shadow-xl shadow-blue-900/10">
          <AvatarImage src="/images/icon_dog.jpg" alt="遠藤羊太郎 プロフィール画像" />
          <AvatarFallback className="bg-blue-900 text-white text-2xl font-bold">
            遠藤
          </AvatarFallback>
        </Avatar>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
          遠藤羊太郎
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-300" />
          <p className="text-lg md:text-xl font-medium tracking-wide text-blue-800">
            ソフトウェアエンジニア
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-300" />
        </div>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-8 lg:whitespace-nowrap">
          アプリケーションを通じてユーザーに価値を提供することを目標に活動しています。
          <br />
          生成AIを活用した作業の効率化や深層学習に特に興味があります。
        </p>

        {/* ボタンのロジックはContextから */}
        <div className="flex justify-center space-x-4 mb-12">
          <Button
            className="rounded-full bg-blue-900 hover:bg-blue-800 text-white shadow-lg shadow-blue-900/20 border-0"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4 mr-2" />
            連絡する
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-slate-300 bg-white text-slate-700 hover:border-blue-800 hover:text-blue-900 hover:bg-white transition-colors"
            onClick={() => scrollToSection("contact")}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-slate-300 bg-white text-slate-700 hover:border-blue-800 hover:text-blue-900 hover:bg-white transition-colors"
            onClick={() => scrollToSection("contact")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-blue-800"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};