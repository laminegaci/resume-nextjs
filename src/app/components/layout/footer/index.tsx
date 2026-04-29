import Logo from "../logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="opacity-80">
              <Logo />
            </div>
            <p className="text-sm text-gray-400">
              Full-Stack Developer specializing in Laravel & modern web technologies
            </p>
          </div>

          <div className="flex flex-col items-center md:items-center gap-4">
            <div className="flex items-center gap-6">
              {["About", "Experience", "Skills", "Work", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Mohamed Lamine Gaci. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
