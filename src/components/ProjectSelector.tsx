import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const ProjectSelector = ({
  value,
  onChange,
  projects,
}: {
  value: string;
  onChange: (id: string) => void;
  projects: {
    id: string;
    name: string;
    tagline: string;
  }[];
}) => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  // Cmd/Ctrl+K palette hint
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // naive palette: cycle projects
        const idx = projects.findIndex((p) => p.id === value);
        const next = projects[(idx + 1) % projects.length];
        onChange(next.id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [value, onChange, projects]);

  return (
    <>
      {/* Mobile/Tablet overlay */}
      {isMobileExpanded && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileExpanded(false)}
        />
      )}

      <div
        className={cn(
          'group fixed top-1/2 left-4 z-50 -translate-y-1/2 transition-all duration-300',
          // Mobile/Tablet: Toggle between collapsed and full width
          isMobileExpanded ? 'w-64 lg:w-72' : 'w-12',
          // lg-xl: Collapsed by default, expand on hover
          'lg:w-16 lg:hover:w-72',
          // xl+: Always expanded
          '2xl:w-72'
        )}
      >
        {/* Glass card container */}
        <div className="h-full overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-2 shadow-lg backdrop-blur lg:p-3">
          {/* Mobile/Tablet: Toggle button and expanded content */}
          <div className="lg:hidden">
            {!isMobileExpanded ? (
              <button
                className="flex h-8 w-full items-center justify-center rounded-xl bg-slate-900 text-white"
                onClick={() => setIsMobileExpanded(true)}
              >
                <span className="text-xs font-medium">
                  {projects.find((p) => p.id === value)?.name.charAt(0)}
                </span>
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onChange(p.id);
                      setIsMobileExpanded(false);
                    }}
                    className={cn(
                      'group/item relative flex w-full flex-col items-start gap-1 rounded-xl p-3 text-left text-sm transition',
                      value === p.id
                        ? 'bg-slate-900 text-white shadow'
                        : 'border border-black/5 bg-white/70 hover:bg-white'
                    )}
                    aria-pressed={value === p.id}
                  >
                    <span className="font-medium">{p.name}</span>
                    <span
                      className={cn(
                        'text-xs opacity-80',
                        value === p.id ? 'text-white/80' : 'text-slate-600'
                      )}
                    >
                      {p.tagline}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop lg-xl: Expandable on hover */}
          <div className="hidden lg:block 2xl:hidden">
            {/* Collapsed state - show dots */}
            <div className="flex flex-col gap-2 group-hover:hidden">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onChange(p.id)}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition',
                    value === p.id
                      ? 'bg-slate-900 text-white shadow'
                      : 'border border-black/5 bg-white/70 hover:bg-white'
                  )}
                  title={p.name}
                  aria-pressed={value === p.id}
                >
                  {p.name.charAt(0)}
                </button>
              ))}
            </div>

            {/* Expanded state on hover */}
            <div className="hidden group-hover:block">
              <div className="flex flex-col gap-2">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onChange(p.id)}
                    className={cn(
                      'group/item relative flex w-full flex-col items-start gap-1 rounded-xl p-3 text-left text-sm transition',
                      value === p.id
                        ? 'bg-slate-900 text-white shadow'
                        : 'border border-black/5 bg-white/70 hover:bg-white'
                    )}
                    aria-pressed={value === p.id}
                  >
                    <span className="font-medium">{p.name}</span>
                    <span
                      className={cn(
                        'text-xs opacity-80',
                        value === p.id ? 'text-white/80' : 'text-slate-600'
                      )}
                    >
                      {p.tagline}
                    </span>
                  </button>
                ))}
              </div>

              {/* Keyboard hint */}
              <div className="mt-3 flex items-center justify-center gap-2 border-t border-black/10 pt-2 text-xs text-slate-500">
                <kbd className="rounded-md border border-black/10 bg-white/70 px-1.5 py-0.5 shadow-sm">
                  ⌘
                </kbd>
                <span>+</span>
                <kbd className="rounded-md border border-black/10 bg-white/70 px-1.5 py-0.5 shadow-sm">
                  K
                </kbd>
                <span className="opacity-80">to switch</span>
              </div>
            </div>
          </div>

          {/* Desktop xl+: Always expanded */}
          <div className="hidden 2xl:block">
            <div className="flex flex-col gap-2">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onChange(p.id)}
                  className={cn(
                    'group/item relative flex w-full flex-col items-start gap-1 rounded-xl p-3 text-left text-sm transition',
                    value === p.id
                      ? 'bg-slate-900 text-white shadow'
                      : 'border border-black/5 bg-white/70 hover:bg-white'
                  )}
                  aria-pressed={value === p.id}
                >
                  <span className="font-medium">{p.name}</span>
                  <span
                    className={cn(
                      'text-xs opacity-80',
                      value === p.id ? 'text-white/80' : 'text-slate-600'
                    )}
                  >
                    {p.tagline}
                  </span>
                </button>
              ))}
            </div>

            {/* Keyboard hint */}
            <div className="mt-3 flex items-center justify-center gap-2 border-t border-black/10 pt-2 text-xs text-slate-500">
              <kbd className="rounded-md border border-black/10 bg-white/70 px-1.5 py-0.5 shadow-sm">
                ⌘
              </kbd>
              <span>+</span>
              <kbd className="rounded-md border border-black/10 bg-white/70 px-1.5 py-0.5 shadow-sm">
                K
              </kbd>
              <span className="opacity-80">to switch</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
