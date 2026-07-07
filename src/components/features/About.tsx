import React from 'react';
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">自己紹介</h2>
          <div className="mt-5 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-800 to-amber-400" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <h3 className="text-sm font-semibold tracking-[0.2em] text-blue-900">エンジニアとしての歩み</h3>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                コンピュータサイエンスやWeb開発を独学で学び、2024年からエンジニアとして業務を開始しました。
                バックエンドのエンジニアとして業務を開始し、現在は要件抽出、設計、フロントエンド・バックエンドの開発、インフラの構築を中心に業務を行っています。
              </p>
              <p>
                2026年4月より、NNN株式会社で取締役CPOとしてプロダクトの責任者をしています。主に自社の求人サイトの設計開発に携わっています。
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
          <div className="space-y-12 md:border-l md:border-slate-200 md:pl-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <h3 className="text-sm font-semibold tracking-[0.2em] text-blue-900">興味のある分野</h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-4 text-slate-600">
                <li className="flex items-center text-[15px]">
                  <Monitor className="w-4 h-4 mr-3 text-blue-700" />
                  フロントエンド開発
                </li>
                <li className="flex items-center text-[15px]">
                  <Server className="w-4 h-4 mr-3 text-blue-700" />
                  バックエンド開発
                </li>
                <li className="flex items-center text-[15px]">
                  <Cloud className="w-4 h-4 mr-3 text-blue-700" />
                  クラウドインフラ
                </li>
                <li className="flex items-center text-[15px]">
                  <Database className="w-4 h-4 mr-3 text-blue-700" />
                  データベース設計
                </li>
                <li className="flex items-center text-[15px]">
                  <LineChart className="w-4 h-4 mr-3 text-blue-700" />
                  データサイエンス
                </li>
                <li className="flex items-center text-[15px]">
                  <Palette className="w-4 h-4 mr-3 text-blue-700" />
                  UI/UXデザイン
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <h3 className="text-sm font-semibold tracking-[0.2em] text-blue-900">学歴・資格</h3>
              </div>
              <ul className="divide-y divide-slate-200/70 text-slate-600">
                <li className="py-3 text-[15px]">東京科学大学 (旧 東京工業大学) 理学院地球惑星科学系 在学中</li>
                <li className="py-3 text-[15px]">統計検定1級「統計統計」 取得</li>
                <li className="py-3 text-[15px]">基本情報技術者試験 合格</li>
                <li className="py-3 text-[15px]">数学検定準1級 取得</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
