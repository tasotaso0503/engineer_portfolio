// src/components/features/Header.tsx
'use client'

import React from 'react';
import { Menu, X } from 'lucide-react';
// Contextフックをインポート
import { usePortfolioContext } from '@/contexts/PortfolioContext';

export default function Header() {
  // Contextから必要なロジックと状態を取得
  const {
    activeSection,
    isScrolled,
    isMenuOpen,
    setIsMenuOpen,
    scrollToSection
  } = usePortfolioContext();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold tracking-tight text-slate-900">
            遠藤羊太郎<span className="text-amber-500">.</span>
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative capitalize text-sm font-medium transition-colors duration-400 hover:text-blue-800 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-blue-700 after:to-amber-400 after:transition-opacity after:duration-400 ${
                  activeSection === item
                    ? 'text-blue-800 after:opacity-100'
                    : 'text-slate-600 after:opacity-0'
                }`}
              >
                {item === 'home' ? 'ホーム' :
                 item === 'about' ? '自己紹介' :
                 item === 'skills' ? 'スキル' :
                 item === 'projects' ? 'プロジェクト' :
                 item === 'experience' ? '経歴' : '連絡先'}
              </button>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2.5 px-4 rounded-lg font-medium transition-colors ${
                  activeSection === item
                    ? 'bg-blue-50 text-blue-800'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-800'
                }`}
              >
                {item === 'home' ? 'ホーム' :
                 item === 'about' ? '自己紹介' :
                 item === 'skills' ? 'スキル' :
                 item === 'projects' ? 'プロジェクト' :
                 item === 'experience' ? '経歴' : '連絡先'}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};