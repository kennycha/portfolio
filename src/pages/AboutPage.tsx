import { Navigation } from '@/components/Navigation';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-indigo-100/50">
      <Navigation />
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8 text-8xl">🚧</div>
          <h1 className="mb-4 text-4xl font-bold text-slate-800">
            About Page
          </h1>
          <p className="mb-6 text-lg text-slate-600">
            This page is currently under construction
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm text-amber-800">
            <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500"></div>
            Work in Progress
          </div>
        </div>
      </div>
    </div>
  );
};
