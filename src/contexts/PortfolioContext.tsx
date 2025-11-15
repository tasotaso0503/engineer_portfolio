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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // TODO: ここにスクロール位置に応じて activeSection を更新するロジックを追加できます
    };
    window.addEventListener('scroll', handleScroll);
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