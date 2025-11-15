import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';


const projects = [
  {
    title: '企業用社内チャットbot',
    description: 'Flask, LangChainを使用した社内用チャットbotアプリ。RAGの諸機能、社内用資料の管理機能を実装し、業務効率化を実現。',
    tech: ['Flask', 'LangChain', 'PostgreSQL', 'Heroku'],
    image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Ecommerce+App'
  },
  {
    title: '頭痛患者 / 医者用アプリ',
    description: 'FastAPI、Next.js、Lambdaを使用したサーバーレスウェブアプリ。SSR, CSRを活用してUX向上に貢献。バックエンドのAPIと連携し、ユーザー認証やチャット機能、カレンダー機能、天候情報の表示機能などを実装。',
    tech: ['FastAPI、Next', 'Next.js', 'PostgreSQL', 'Lambda', 'Vercel'],
    image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+Manager'
  },
  {
    title: '大学教授用チャットbot',
    description: 'Flask, LangChainを使用した大学教授用チャットbotアプリ。RAGの機能によって、「助成金申請書作成」をサポートし、研究時間の最大化を実現。',
    tech: ['Flask', 'LangChain', 'PostgreSQL', 'Heroku'],
    image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Data+Dashboard'
  }
];

export default function Projects() {
  return (
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
  );
};