import React from 'react';
import Head from 'next/head';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Head>
        <title>メンテナンス中 | Service Name</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-md w-full text-center space-y-8 p-10 bg-white rounded-2xl shadow-xl">
        {/* アイコン部分 (Lucideなどを使わない場合用のシンプルなSVG) */}
        <div className="flex justify-center">
          <div className="bg-amber-100 p-4 rounded-full">
            <svg
              className="w-12 h-12 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="Size-12 M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            ただいまメンテナンス中です
          </h1>
          <p className="text-gray-600 leading-relaxed">
            より良いサービス提供のため、現在システムメンテナンスを行っております。
            作業終了まで今しばらくお待ちください。
          </p>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            お急ぎの場合は <a href="mailto:support@example.com" className="text-blue-600 hover:underline">サポート窓口</a> までお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;