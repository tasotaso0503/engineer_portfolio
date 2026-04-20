import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'ソフトウェアエンジニア',
    company: 'NNN株式会社',
    period: '2024.09 - 現在',
    location: '東京',
    description: [
      '様々なWebフレームワークを使用したWebアプリケーションの設計・開発',
      'AWSやVercel、Herokuなどのクラウドインフラの構築・運用',
      'クライアントへのヒアリングによる要件抽出や営業'
    ]
  },
  {
    title: 'SEO/AIOエンジニア',
    company: '有限会社Pick1',
    period: '2025.11 - 現在',
    location: '東京',
    description: [
      'テクニカル実装・内部構造の最適化',
      'データ分析・戦略立案',
      'コンテンツ最適化・AI活用'
    ]
  },
  {
    title: 'PM / PdM / ソフトウェアエンジニア',
    company: '株式会社Gappy',
    period: '2026.4 - 現在',
    location: '東京',
    description: [
      'プロダクトマネジメント支援',
      'コミュニケーション管理・運用支援',
      'プロジェクトマネジメント補助'
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 via-sky-700 to-blue-700 bg-clip-text text-transparent">職歴</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-slate-200/70 shadow-sm hover:shadow-lg hover:shadow-sky-500/10 transition-shadow">
              <CardContent className="p-6">
                <div className="md:flex md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">{exp.title}</h3>
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
                      <span className="text-sky-500 mr-2 font-bold">•</span>
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
  );
};