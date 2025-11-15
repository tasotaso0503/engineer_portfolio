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
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md border-b' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-slate-800">
            遠藤羊太郎
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-blue-600 transition-colors font-medium ${
                  activeSection === item ? 'text-blue-600' : 'text-slate-600'
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
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-2 space-y-2">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 hover:bg-slate-100 rounded text-slate-600"
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