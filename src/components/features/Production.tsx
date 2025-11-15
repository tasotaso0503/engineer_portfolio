// src/components/features/Production.tsx

import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, ChevronDown, Menu, X, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div>
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
                    <li>• 基本情報技術者試験 合格</li>
                    <li>• 統計検定1級「統計統計」 取得</li>
                    <li>• 数学検定準1級 取得</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};