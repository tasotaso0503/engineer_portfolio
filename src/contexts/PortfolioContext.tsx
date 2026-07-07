'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Contextで提供する値の型定義
interface PortfolioContextType {
  activeSection: string;
  isMenuOpen: boolean;
  isScrolled: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

// 1. Contextオブジェクトを作成
const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// 2. Providerコンポーネントを作成（ロジックの本体）
export default function PortfolioProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール監視ロジック
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // ビューポート上部から1/3の位置を基準に、現在表示中のセクションを判定する
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll(); // 初期表示時（リロードで途中位置から始まる場合）にも反映する
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // スクロール実行ロジック
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // 共有された状態を更新
      setIsMenuOpen(false);      // 共有された状態を更新
    }
  };

  // 3. 子コンポーネントに渡す値をまとめる
  const value = {
    activeSection,
    isScrolled,
    isMenuOpen,
    setIsMenuOpen,
    scrollToSection,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

// 4. 簡単にContextを呼び出すためのカスタムフック
export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolioContext must be used within a PortfolioProvider');
  }
  return context;
};