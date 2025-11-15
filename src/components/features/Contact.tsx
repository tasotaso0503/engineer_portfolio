import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">お問い合わせ</h2>
        <p className="text-xl text-slate-600 mb-12">
          新しいプロジェクトや協業の機会について、お気軽にご連絡ください。
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">メール</h3>
              <a href="mailto:endo.yotaro0503@gmail.com" className="text-blue-600 hover:text-blue-700">
                endo.yotaro0503@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Github className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">GitHub</h3>
              <a href="https://github.com/tasotaso0503" className="text-blue-600 hover:text-blue-700">
                  github.com/tasotaso0503
              </a>
            </CardContent>
          </Card>

          {/* <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Linkedin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">LinkedIn</h3>
              <a href="https://linkedin.com/in/yamada" className="text-blue-600 hover:text-blue-700">
                linkedin.com/in/yamada
              </a>
            </CardContent>
          </Card> */}
        </div>

        {/* <Button size="lg" className="rounded-full">
          <Mail className="w-5 h-5 mr-2" />
          連絡する
        </Button> */}
      </div>
    </section>
  );
};