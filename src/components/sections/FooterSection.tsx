const LINKS = [
  {
    text: 'Github',
    url: 'https://github.com/kennycha',
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/%EC%98%81%EB%B6%80-%EC%B0%A8-2ba731229/',
  },
  {
    text: 'Email',
    url: 'mailto:dudqn136@naver.com',
  },
];

export function FooterSection() {
  return (
    <footer className="bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0">
          <div className="flex items-center gap-2">
            <p className="text-md text-gray-500">@ 2025 Kennycha</p>
          </div>
          <div className="flex gap-x-4 gap-y-2 text-left">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-md text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
