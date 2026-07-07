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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">お問い合わせ</h2>
        <div className="mt-5 mb-8 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-800 to-amber-400" />
        <p className="text-base md:text-lg text-slate-600 mb-12">
          新しいプロジェクトや協業の機会について、お気軽にご連絡ください。
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">メール</h3>
              <a href="mailto:endo.yotaro0503@gmail.com" className="text-[15px] text-blue-700 underline-offset-4 hover:underline hover:text-blue-900 transition-colors">
                endo.yotaro0503@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                <Github className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">GitHub</h3>
              <a href="https://github.com/tasotaso0503" className="text-[15px] text-blue-700 underline-offset-4 hover:underline hover:text-blue-900 transition-colors">
                github.com/tasotaso0503
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                <Linkedin className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/endo-yotaro" className="text-[15px] text-blue-700 underline-offset-4 hover:underline hover:text-blue-900 transition-colors break-all">
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