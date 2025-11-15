import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Monitor,
  Server,
  Cloud,
  Database,
  LineChart,
  Palette,
} from 'lucide-react';


export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">自己紹介</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">エンジニアとしての歩み</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                コンピュータサイエンスやWeb開発を独学で学び、2024年からエンジニアとして業務を開始しました。
                バックエンドのエンジニアとして業務を開始し、現在は要件抽出、設計、フロントエンド・バックエンドの開発、インフラの構築を中心に業
                務を行っています。
              </p>
              <p>
                ユーザーに価値を提供するプロダクト作りに情熱を持ち、フロントエンドからインフラまで幅広い技術を学び続けています。
                特に生成AIに大きな可能性を感じ、生成AIを活用し従来の煩雑な作業の効率化や全く新しい価値を提供することに情熱を持っています。
              </p>
              <p>
                最近では、パフォーマンス最適化やユーザー体験の向上についての学習を中心に行なっています。
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
                    <Monitor className="w-4 h-4 mr-3 text-blue-500" />
                    フロントエンド開発
                  </li>
                  <li className="flex items-center">
                    <Server className="w-4 h-4 mr-3 text-blue-500" />
                    バックエンド開発
                  </li>
                  <li className="flex items-center">
                    <Cloud className="w-4 h-4 mr-3 text-blue-500" />
                    クラウドインフラ
                  </li>
                  <li className="flex items-center">
                    <Database className="w-4 h-4 mr-3 text-blue-500" />
                    データベース設計
                  </li>
                  <li className="flex items-center">
                    <LineChart className="w-4 h-4 mr-3 text-blue-500" />
                    データサイエンス
                  </li>
                  <li className="flex items-center">
                    <Palette className="w-4 h-4 mr-3 text-blue-500" />
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
  );
};