import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';


const projects = [
  {
    title: '企業用社内チャットbot',
    description: '社内規則などの煩雑な資料の確認をRAGを活用したチャットbot機能で半自動化し、効率化を実現。社内の部署や従業員ごとにアクセスできる資料に制限を儲けたりなどの設定をすることが可能。',
    tech: ['Flask', 'LangChain', 'PostgreSQL', 'Heroku'],
    image: '/images/chachat.png'
  },
  {
    title: '大学教授用チャットbot',
    description: '大学教授の助成金申請に関する煩雑な業務をRAGを活用したチャットbotとの対話によって半自動化し、効率化を実現。ファイルのダウンロードなどの管理機能も提供。',
    tech: ['Flask', 'LangChain', 'PostgreSQL', 'Heroku'],
    image: '/images/chachat.png'
  },
  {
    title: '頭痛患者 / 医者用アプリ',
    description: 'カレンダー機能、AIとのチャット機能によって頭痛患者の日々の頭痛に関する記録を取り、それを基に月次のレポートを作成し、頭痛の誘発原因を突き止める。医者側は自身の患者のレポートなどの情報を閲覧でき、診療時に利用できる。',
    tech: ['FastAPI', 'LangChain', 'Next.js', 'PostgreSQL', 'Lambda', 'API Gateway', 'Vercel'],
    image: '/images/headache_app.png'
  },
  {
    title: '鉄道信号業界向けシステム構築',
    description: 'データを一元管理できるようなデータベースの提供。生成AIの技術を利用し、社内の再発防止策を対話形式で検索・活用するチャット機能やデータ内容に関するレポート作成機能を実装。',
    tech: ['Django', 'LangChain', 'LangGraph', 'PostgreSQL', 'App Runner'],
    image: '/images/train.png'
  },
  {
    title: 'AI Agent統合型 自作バージョン管理システム',
    description: '簡易的なGitをPythonで再現し、LangGraphを用いたAIコードレビュー機能を統合。コミット時にローカルLLM（Ollama）が差分を解析し、論理バグを検知した場合はコミットを自動的に拒絶するガードレール機能を実装。',
    tech: ['Python', 'LangGraph', 'Ollama', 'Pydantic', 'Git'],
    image: '/images/langgraph_git.png',
    githubUrl: 'https://github.com/tasotaso0503/langgraph-git'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">プロジェクト</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full h-48"> {/* 画像をコンテナで囲む */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }} // objectFit="cover" の代わり
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

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
                <div className="flex space-x-3 mt-auto">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};