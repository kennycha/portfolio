import { useEffect, useState } from 'react';
import type { LandingPageConfig } from '@/lib/toml';
import { cn } from '@/lib/utils';

interface FeaturesSectionProps {
  config: NonNullable<LandingPageConfig['features']>;
}

export function FeaturesSection({ config }: FeaturesSectionProps) {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  useEffect(() => {
    setSelectedFeatureIndex(0);
  }, [config]);

  return (
    <section className="bg-white px-6 py-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="column-gap-12 row-gap-6 flex flex-col items-center md:grid md:grid-cols-2 md:items-start">
          <div className="order-1 flex flex-col items-center md:order-1 md:items-start">
            {config.title && (
              <h2 className="mb-3 text-center text-3xl leading-tight font-bold text-gray-900 md:text-left lg:mb-4 lg:text-5xl">
                {config.title}
              </h2>
            )}
            {config.subtitle && (
              <p className="mb-4 text-lg leading-relaxed text-gray-600 lg:mb-8">
                {config.subtitle}
              </p>
            )}
          </div>
          <div className="order-2 flex flex-col items-center md:order-2 md:items-start">
            {config.items && config.items.length > 0 && (
              <div className="mb-4 flex flex-wrap justify-center gap-3 md:justify-start lg:mb-8">
                {config.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFeatureIndex(index)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150 lg:text-base',
                      selectedFeatureIndex === index
                        ? 'border-gray-800 bg-gray-800 text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-800 hover:text-gray-800'
                    )}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
