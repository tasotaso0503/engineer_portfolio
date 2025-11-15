import React from 'react';
import { Github, Mail, Code, Database, Globe, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'React/Next.js', level: 90, icon: <Globe className="w-5 h-5" /> },
  { name: 'TypeScript', level: 85, icon: <Code className="w-5 h-5" /> },
  { name: 'HTML/CSS', level: 80, icon: <Database className="w-5 h-5" /> },
  { name: 'Python', level: 75, icon: <Code className="w-5 h-5" /> },
  { name: 'PostgreSQL', level: 70, icon: <Database className="w-5 h-5" /> },
  { name: 'AWS', level: 65, icon: <Globe className="w-5 h-5" /> }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">スキル</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                </div>
                <Progress value={skill.level} className="mb-2" />
                <p className="text-sm text-slate-500">{skill.level}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};