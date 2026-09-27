import React from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';


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
    tech: ['FastAPI', 'LangChain', 'Next.js', 'PostgreSQL', 'Lambda', 'Terraform', 'Vercel'],
    image: '/images/headache_app.png'
  },
  {
    title: '鉄道信号業界向けシステム構築',
    description: 'データを一元管理できるようなデータベースの提供。生成AIの技術を利用し、社内の再発防止策を対話形式で検索・活用するチャット機能やデータ内容に関するレポート作成機能を実装。',
    tech: ['Django', 'LangChain', 'LangGraph', 'PostgreSQL', 'App Runner'],
    image: '/images/train.png'
  },
  {
    title: 'AI Agent統合型 バージョン管理システム',
    description: '簡易的なGitをPythonで再現し、LangGraphを用いたAIコードレビュー機能を統合。コミット時にローカルLLM（Ollama）が差分を解析し、バグを検知した場合はコミットを自動的に拒絶するガードレール機能を実装。',
    tech: ['Python', 'LangGraph', 'Ollama', 'Pydantic', 'Git'],
    image: '/images/langgraph_git.png',
    githubUrl: 'https://github.com/tasotaso0503/langgraph-git'
  },
  {
    title: 'エンジニア向け生成AI講習会',
    description: '東証プライム上場企業のエンジニア向けに、生成AIに関する講習会の講師を務めた。生成AIについての概要や開発の現場にどのように取り入れるのかの説明、AgentやMCPサーバーの内部的な仕組みや実装方法のハンズオンなどを行なった。',
    tech: ['Python', 'LangChain', 'GitHub Copilot', 'AWS', 'Terraform'],
    image: '/images/genai_seminar.png',
  },
  {
    title: 'エンジニア向けタイピング練習アプリ',
    description: '言語やフレームワークを選択し、コードのお題をプロンプトとして入力すると、LLMがタイピング練習用のコードを生成し、アプリ内のエディタ部分でタイピング練習ができる機能を実装',
    tech: ['Nuxt.js', 'LangGraph', 'Groq', 'Gemini', 'Redis', 'Vercel'],
    image: '/images/genai_typing.png',
    URL: 'https://genai-typing-frontend-ebon.vercel.app',
    githubUrl: 'https://github.com/tasotaso0503/genai-typing'
  },
  {
    title: 'NNN株式会社HP',
    description: '自社HPをコーディングに移行。Next.jsでサイトを構築し、Lighthouseの点数向上に繋がった。',
    tech: ['Next.js', 'Vercel'],
    image: '/images/NNN_HP.png',
    URL: 'https://www.threen.jp'
  },
  {
    title: 'AI開発コンサルティング',
    description: '開発を主事業としない企業に対し、Claude Codeを活用した開発手法やシステム開発全般のコンサルティングを実施。要件定義・設計から実装まで伴走し、内製化と円滑なプロジェクト推進を支援した。',
    tech: ['Next.js', 'Vercel', 'Supabase', 'Claude Code'],
    image: '/images/AI_development_consulting.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">プロジェクト</h2>
          <div className="mt-5 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-800 to-amber-400" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-lg bg-white border border-slate-200 hover:border-blue-300 transition-colors duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden border-b border-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <p className="min-h-8 text-xs font-medium tracking-wide text-blue-800">
                  {project.tech.join(' · ')}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-700 underline-offset-4 hover:underline hover:text-blue-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.URL && (
                  <a
                    href={project.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-700 underline-offset-4 hover:underline hover:text-blue-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    サイトを見る
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
