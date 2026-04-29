import Logo from "../logo";

const navItems = ["About", "Experience", "Skills", "Work", "Contact"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white border-t border-white/5">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          <div className="md:col-span-5 space-y-4">
            <div className="opacity-90">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Full-stack developer based in Algiers. Building dependable web
              apps with Laravel, Livewire, and React.
            </p>
            <p className="mono text-xs uppercase tracking-wider text-emerald-400 inline-flex items-center gap-2">
              <span className="available-dot" aria-hidden /> Open to remote roles
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mono text-xs uppercase tracking-wider text-gray-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mono text-xs uppercase tracking-wider text-gray-500 mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/laminegaci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohamed-lamine-gaci-183650201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:mohamed61lamine@gmail.com"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  mohamed61lamine@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono text-xs uppercase tracking-wider text-gray-500">
            © {currentYear} Mohamed Lamine Gaci
          </p>
          <p className="mono text-xs uppercase tracking-wider text-gray-500">
            Built with Next.js · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
