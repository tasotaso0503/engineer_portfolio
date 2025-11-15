// src/components/Portfolio.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, ChevronDown, Menu, X, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      // github: 'https://github.com/username/ecommerce',
      // demo: 'https://ecommerce-demo.vercel.app',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Ecommerce+App'
    },
    {
      title: '頭痛患者 / 医者用アプリ',
      description: 'FastAPI、Next.js、Lambdaを使用したサーバーレスウェブアプリ。SSR, CSRを活用してUX向上に貢献。バックエンドのAPIと連携し、ユーザー認証やチャット機能、カレンダー機能、天候情報の表示機能などを実装。',
      tech: ['FastAPI、Next', 'Next.js', 'PostgreSQL', 'Lambda', 'Vercel'],
      // github: 'https://github.com/username/taskmanager',
      // demo: 'https://taskmanager-demo.netlify.app',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+Manager'
    },
    {
      title: '大学教授用チャットbot',
      description: 'Flask, LangChainを使用した大学教授用チャットbotアプリ。RAGの機能によって、「助成金申請書作成」をサポートし、研究時間の最大化を実現。',
      tech: ['Flask', 'LangChain', 'PostgreSQL', 'Heroku'],
      // github: 'https://github.com/username/dashboard',
      // demo: 'https://dashboard-demo.herokuapp.com',
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
    },
    // {
    //   title: 'フロントエンドエンジニア',
    //   company: '株式会社ウェブソリューション',
    //   period: '2021.04 - 2023.03',
    //   location: '東京',
    //   description: [
    //     'レスポンシブWebサイトの制作・保守',
    //     'UI/UXデザインからフロントエンド実装まで一貫して担当',
    //     'パフォーマンス最適化により読み込み速度を40%改善'
    //   ]
    // }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
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

      {/* ヒーローセクション */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="text-center max-w-4xl mx-auto px-4">
          <Avatar className="w-32 h-32 mx-auto mb-8">
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
            モダンなWeb技術を使用してユーザー体験を向上させるアプリケーションを開発しています。
            React/Next.js、Python、クラウド技術に特に興味があります。
          </p>

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

      {/* 自己紹介セクション */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">自己紹介</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">エンジニアとしての歩み</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  大学でコンピュータサイエンスを学び、2024年からWeb開発の世界に足を踏み入れました。
                  最初はHTML/CSSから始まり、現在はReact/Next.js、Python、クラウド技術を中心に開発を行っています。
                </p>
                <p>
                  ユーザーに価値を提供するプロダクト作りに情熱を持ち、フロントエンドからバックエンドまで
                  幅広い技術を学び続けています。特にパフォーマンス最適化とユーザー体験の向上に力を入れています。
                </p>
                {/* <p>
                  趣味はオープンソースプロジェクトへの貢献と新しい技術の学習です。
                  週末は個人プロジェクトの開発や技術書の読書を楽しんでいます。
                </p> */}
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600 text-lg">興味のある分野</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-blue-500" />
                      フロントエンド開発（React/Next.js）
                    </li>
                    <li className="flex items-center">
                      <Database className="w-4 h-4 mr-3 text-blue-500" />
                      バックエンド開発（Node.js/Python）
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-blue-500" />
                      クラウドインフラ（AWS）
                    </li>
                    <li className="flex items-center">
                      <Database className="w-4 h-4 mr-3 text-blue-500" />
                      データベース設計
                    </li>
                    <li className="flex items-center">
                      <Database className="w-4 h-4 mr-3 text-blue-500" />
                      データサイエンス
                    </li>
                    <li className="flex items-center">
                      <Code className="w-4 h-4 mr-3 text-blue-500" />
                      UI/UXデザイン
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600 text-lg">学歴・資格</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 東京科学大学 (旧 東京工業大学) 理学院地球惑星科学系 在学中</li>
                    {/* <li>• 基本情報技術者試験 合格</li> */}
                    <li>• 統計検定1級「統計統計」 取得</li>
                    <li>• 数学検定準1級 取得</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">スキル</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-3">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                  </div>
                  <Progress value={skill.level} className="mb-2" />
                  <p className="text-sm text-slate-500">{skill.level}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">プロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {/* <div className="flex space-x-4">
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 経歴セクション */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">職歴</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="md:flex md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 mb-1">{exp.title}</h3>
                      <p className="text-slate-700 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-slate-500 text-sm mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-slate-600 flex items-start">
                        <span className="text-blue-500 mr-2 font-bold">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 連絡先セクション */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800">お問い合わせ</h2>
          <p className="text-xl text-slate-600 mb-12">
            新しいプロジェクトや協業の機会について、お気軽にご連絡ください。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">メール</h3>
                <a href="mailto:endo.yotaro0503@gmail.com" className="text-blue-600 hover:text-blue-700">
                  endo.yotaro0503@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Github className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">GitHub</h3>
                <a href="https://github.com/tasotaso0503" className="text-blue-600 hover:text-blue-700">
                    github.com/tasotaso0503
                </a>
              </CardContent>
            </Card>

            {/* <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">LinkedIn</h3>
                <a href="https://linkedin.com/in/yamada" className="text-blue-600 hover:text-blue-700">
                  linkedin.com/in/yamada
                </a>
              </CardContent>
            </Card> */}
          </div>

          {/* <Button size="lg" className="rounded-full">
            <Mail className="w-5 h-5 mr-2" />
            連絡する
          </Button> */}
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500">
            © 2025 遠藤羊太郎. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;