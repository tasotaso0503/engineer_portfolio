import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 border-t-2 border-amber-400/80">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-bold tracking-tight text-white mb-3">
          遠藤羊太郎<span className="text-amber-400">.</span>
        </p>
        <p className="text-slate-400 text-sm">
          © 2026 遠藤羊太郎. All rights reserved.
        </p>
      </div>
    </footer>
  );
};