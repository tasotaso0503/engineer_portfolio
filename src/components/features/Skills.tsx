import React from 'react';

// スキルデータ
const skillCategories = [
  {
    category: 'フロントエンド',
    skills: [
      {
        name: 'HTML / CSS',
        description: '実務の開発で使用。Tailwind CSSを使用してレスポンシブなどの対応もモダンに開発可能です。',
      },
      {
        name: 'JavaScript / TypeScript',
        description: '実務の開発で使用。型安全なコード設計と保守性の向上に貢献できます。',
      },
      {
        name: 'React / Next.js',
        description: '実務でのWebアプリ開発のメイン技術。CSR/SSG/SSR/ISRを理解し、パフォーマンスを意識した開発が可能です。',
      },
    ]
  },
  {
    category: 'バックエンド',
    skills: [
      {
        name: 'Python (Flask / Django / FastAPI)',
        description: 'LangChain / LangGraphを用いたAI Agent開発や、API開発の豊富な実務経験があります。',
      },
      {
        name: 'Go (Gin)',
        description: '自社の求人サイトのバックエンドで使用。大量リクエストを捌くための並行処理や、機械学習モデルの設計などの実務経験あり。',
      },
      {
        name: 'Node.js（Express.js, NestJS）',
        description: 'LangGraphを用いたAgent開発やAPI開発の経験があります。',
      },
    ],
  },
  {
    category: 'インフラ',
    skills: [
      {
        name: 'AWS',
        description: 'EC2, ECS, App Runner, Lambda, ALB, S3, RDSなど基本的なサービスを組み合わせたインフラ設計・構築の実務経験があります。',
      },
      {
        name: 'GCP',
        description: 'Cloud Run, Cloud Tasks, Firestore, Secret Managerなど基本的なサービスを組み合わせたインフラ設計・構築の経験があります。',
      },
      {
        name: 'Vercel',
        description: 'RedisやEdge Configなどの各種設定やデプロイ・CI/CDパイプライン構築が可能です。',
      },
    ]
  },
  {
    category: 'データベース',
    skills: [
      {
        name: 'PostgreSQL',
        description: '正規化やインデックスなどの基本を考慮したDB設計と、実行計画を確認しながらのSQLチューニングが可能です。',
      },
      {
        name: 'MySQL',
        description: '正規化やインデックスなどの基本を考慮したDB設計と、実行計画を確認しながらのSQLチューニングが可能です。',
      },
      {
        name: 'SQLite',
        description: '正規化やインデックスなどの基本を考慮したDB設計と、実行計画を確認しながらのSQLチューニングが可能です。',
      }
    ]
  },
  {
    category: 'その他',
    skills: [
      {
        name: 'Docker / Docker Compose',
        description: 'コンテナ化による開発環境の統一や、各種PaaS/IaaSへのデプロイが可能です。',
      },
      {
        name: 'Git / GitHub',
        description: '基本的なコマンド操作とGUI上からの操作が可能。ブランチ保護ルールなどの基本的な設定が可能。',
      },
      {
        name: 'GitHub Actions',
        description: '基本的なCI/CD定義とGUI上からの操作が可能。preview環境における結合テストの自動化などの経験あり。',
      },
      {
        name: 'Terraform',
        description: ' 複数のマイクロサービス間の連携（ネットワーク・DB設定など）をTerraformでコード化した実務経験があります。',
      },
    ]
  }
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            スキル
          </h2>
          <div className="mt-5 mb-6 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-800 to-amber-400" />
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            私が実務で使用してきた主要な技術スタックです。
            <br />
            フロントエンドからインフラまで幅広く対応可能です。
          </p>
        </div>

        {/* カテゴリーごとに表示 */}
        <div>
          {skillCategories.map((categoryGroup, categoryIndex) => (
            <div
              key={categoryGroup.category}
              className="grid md:grid-cols-[220px_1fr] gap-x-12 gap-y-8 py-12 border-t border-slate-200 first:border-t-0 first:pt-0 last:pb-0"
            >

              {/* カテゴリーの小見出し */}
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-semibold tracking-[0.2em] text-amber-500">
                  {String(categoryIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {categoryGroup.category}
                </h3>
              </div>

              {/* スキルのリスト */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                {categoryGroup.skills.map((skill) => (
                  <div key={skill.name}>
                    <h4 className="font-semibold text-slate-900 pb-2.5 mb-3 border-b border-slate-200">
                      {skill.name}
                    </h4>
                    <p className="text-[15px] text-slate-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
