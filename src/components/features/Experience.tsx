import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: '取締役CPO / ソフトウェアエンジニア',
    company: 'NNN株式会社',
    period: '2024.09 - 現在',
    location: '東京',
    description: [
      'クライアントへのヒアリングや要件定義・設計・開発・インフラ構築など',
      'エンジニア採用の面接官や人事的業務、エンジニアの技術的な領域のマネジメント',
      '自社プロダクトのビジネス設計・システムの方向性決定など'
    ]
  },
  {
    title: '執行役員 / PM / エンジニア',
    company: '株式会社Timeless',
    period: '2024.12 - 現在',
    location: '東京',
    description: [
      '映像制作のプロジェクトにおけるプロジェクトKPI管理やプロジェクト進行',
      '取引先に対する営業やスケジュールなどの調整業務',
      '社内のシステムの整備'
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
    title: 'PM / ソフトウェアエンジニア',
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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">職歴</h2>
          <div className="mt-5 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-800 to-amber-400" />
        </div>
        <div>
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="grid md:grid-cols-[200px_1fr] gap-x-12 gap-y-3 py-10 border-t border-slate-200 first:border-t-0 first:pt-0 last:pb-0"
            >
              <div>
                <p className="flex items-center text-sm font-semibold text-slate-900">
                  <Calendar className="w-4 h-4 mr-2 text-blue-700" />
                  {exp.period}
                </p>
                <p className="flex items-center text-sm text-slate-500 mt-2">
                  <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                  {exp.location}
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-900">{exp.title}</h3>
                <p className="text-[15px] text-slate-700 font-medium mt-1">{exp.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-slate-600 text-[15px] flex items-start">
                      <span className="mr-3 mt-[11px] h-px w-4 bg-amber-400 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
