import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import {
  // ArrowRight,
  Monitor,
  Server,
  Cloud,
  Database,
  Code,
  Container,
  Github,
  Workflow,
} from 'lucide-react';

// スキルデータ
const skillCategories = [
  {
    category: 'フロントエンド',
    skills: [
      {
        name: 'HTML / CSS',
        description: '実務の開発で使用。Tailwind CSSを使用してレスポンシブなどの対応もモダンに開発可能です。',
        icon: <Code className="w-6 h-6" />
      },
      {
        name: 'JavaScript / TypeScript',
        description: '実務の開発で使用。型安全なコード設計と保守性の向上に貢献できます。',
        icon: <Monitor className="w-6 h-6" />
      },
      {
        name: 'React / Next.js',
        description: '実務でのWebアプリ開発のメイン技術。CSR/SSG/SSR/ISRを理解し、パフォーマンスを意識した開発が可能です。',
        icon: <Monitor className="w-6 h-6" />
      },
    ]
  },
  {
    category: 'バックエンド',
    skills: [
      {
        name: 'Python (Flask / Django / FastAPI)',
        description: 'LangChain / LangGraphを用いたAI Agent開発や、API開発の豊富な実務経験があります。',
        icon: <Server className="w-6 h-6" />
      },
      {
        name: 'PHP',
        description: 'HPのフォーム処理や自動メール送信機能などを実装。',
        icon: <Server className="w-6 h-6" />
      },
      {
        name: 'Go (Gin)',
        description: '実務の開発で使用予定。',
        icon: <Server className="w-6 h-6" />
      },
    ],
  },
  {
    category: 'インフラ',
    skills: [
      {
        name: 'AWS',
        description: 'EC2, S3, RDS, App Runner, Lambdaなど基本的なサービスを組み合わせたインフラ設計・構築の実務経験があります。',
        icon: <Cloud className="w-6 h-6" />
      },
      {
        name: 'Vercel',
        description: 'コンテナ化による開発環境の統一や、各種PaaS/IaaSへのデプロイ・CI/CDパイプライン構築が可能です。',
        icon: <Cloud className="w-6 h-6" />
      },
      {
        name: 'Heroku',
        description: 'コンテナ化による開発環境の統一や、各種PaaS/IaaSへのデプロイ・CI/CDパイプライン構築が可能です。',
        icon: <Cloud className="w-6 h-6" />
      }
    ]
  },
  {
    category: 'データベース',
    skills: [
      {
        name: 'PostgreSQL',
        description: 'DB設計からSQLチューニングまで対応可能。RDBの基本的なトランザクション管理を理解しています。',
        icon: <Database className="w-6 h-6" />
      },
      {
        name: 'MySQL',
        description: 'DB設計からSQLチューニングまで対応可能。RDBの基本的なトランザクション管理を理解しています。',
        icon: <Database className="w-6 h-6" />
      },
      {
        name: 'SQLite',
        description: 'DB設計からSQLチューニングまで対応可能。RDBの基本的なトランザクション管理を理解しています。',
        icon: <Database className="w-6 h-6" />
      }
    ]
  },
  {
    category: 'その他',
    skills: [
      {
        name: 'Docker',
        description: 'コンテナ化による開発環境の統一や、各種PaaS/IaaSへのデプロイが可能です。',
        icon: <Container className="w-6 h-6" />
      },
      {
        name: 'Git / GitHub',
        description: '基本的なコマンド操作とGUI上からの操作が可能。',
        icon: <Github className="w-6 h-6" />
      },
      {
        name: 'GitHub Actions',
        description: '基本的なコマンド操作とGUI上からの操作が可能。',
        icon: <Workflow className="w-6 h-6" />
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
          <h2 className="text-4xl font-bold mb-4 text-slate-800">
            スキル
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            私が実務で使用してきた主要な技術スタックです。
            フロントエンドからインフラまで幅広く対応可能です。
          </p>
        </div>

        {/* カテゴリーごとに表示 */}
        <div className="space-y-16">
          {skillCategories.map((categoryGroup) => (
            <div key={categoryGroup.category}>

              {/* カテゴリーの小見出し */}
              <h3 className="text-2xl font-semibold mb-8 text-slate-800 text-center md:text-left">
                {categoryGroup.category}
              </h3>

              {/* スキルカードのグリッド */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryGroup.skills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                          {skill.icon}
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-800">{skill.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="rounded-full">
                  {categoryGroup.category}のスキルをすべて見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div> */}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};