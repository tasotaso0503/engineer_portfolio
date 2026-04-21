import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
Mail,
Github,
Linkedin
} from 'lucide-react';
// import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-sky-700 to-blue-700 bg-clip-text text-transparent">お問い合わせ</h2>
        <p className="text-xl text-slate-600 mb-12">
          新しいプロジェクトや協業の機会について、お気軽にご連絡ください。
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-slate-200/70 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-0.5 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 ring-1 ring-sky-200/60 flex items-center justify-center">
                <Mail className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">メール</h3>
              <a href="mailto:endo.yotaro0503@gmail.com" className="text-sky-600 hover:text-blue-600 transition-colors">
                endo.yotaro0503@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200/70 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-0.5 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 ring-1 ring-sky-200/60 flex items-center justify-center">
                <Github className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">GitHub</h3>
              <a href="https://github.com/tasotaso0503" className="text-sky-600 hover:text-blue-600 transition-colors">
                github.com/tasotaso0503
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200/70 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-0.5 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 ring-1 ring-sky-200/60 flex items-center justify-center">
                <Linkedin className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/endo-yotaro" className="text-sky-600 hover:text-blue-600 transition-colors break-all">
                https://www.linkedin.com/in/endo-yotaro
              </a>
            </CardContent>
          </Card>
        </div>

        {/* <Button size="lg" className="rounded-full">
          <Mail className="w-5 h-5 mr-2" />
          連絡する
        </Button> */}
      </div>
    </section>
  );
};