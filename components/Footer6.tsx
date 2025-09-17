import { getNavbarMenuItems } from "@/lib/articles";

const sitemap = [
  {
    title: "Artikelen",
    links: getNavbarMenuItems(),
  },
  {
    title: "Overig",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Voorwoord",
        href: "/foreword",
      },
      {
        title: "Bijlage 1: Overzicht werkgroepen",
        href: "/downloads/Bijlage_1_UWV_clientenraad_werkgroepen.pdf",
      },
      {
        title: "Bijlage 2: Ongevraagde adviezen",
        href: "/downloads/Bijlage_2_UWV_clientenraad_adviezen.pdf",
      },
      {
        title: "Colofon",
        href: "/colofon",
      },
    ],
  },
];

const Footer6 = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <footer>
          <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
            <div className="max-w-96">
              <div className="mb-6 flex items-center gap-3">
                <img
                  src="/images/logo_uwv.svg"
                  alt="UWV cliëntenraad logo"
                  className="h-12 w-auto object-contain object-center"
                />
                <h3 className="text-xl font-bold">Jaarverslag 2024</h3>
              </div>
              <p className="whitespace-nowrap text-lg md:text-xl font-medium" style={{ color: 'var(--purple)' }}>
                Werken aan kwalitatieve dienstverlening op maat
              </p>
            </div>
            <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
              <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                {sitemap.map((section) => (
                  <div key={section.title} className="h-fit">
                    <h4 className="mb-6 whitespace-nowrap text-base font-semibold">
                      {section.title}
                    </h4>
                    <ul className=" space-y-3 text-base font-medium">
                      {section.links.map((link) => {
                        const url = 'url' in link ? (link as any).url : (link as any).href;
                        const isExternal = /^https?:\/\//i.test(url);
                        const isFile = /\.(pdf|docx?|xlsx?|pptx?)($|\?)/i.test(url);
                        const newTab = isExternal || isFile;
                        return (
                          <li key={link.title}>
                            <a
                              href={url}
                              className="hover:underline whitespace-nowrap text-base"
                              style={{ color: 'var(--blue)' }}
                              target={newTab ? "_blank" : undefined}
                              rel={newTab ? "noopener noreferrer" : undefined}
                            >
                              {link.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-border flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16">
            <div className=" text-xs sm:text-sm">
              &copy; 2025 - UWV Cliëntenraad
            </div>
            <div className=" flex flex-col items-start gap-4 text-xs sm:text-sm md:flex-row lg:items-center">
              <a href="https://www.clientenraad-uwv.nl/wat-is-de-clientenraad" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--blue)' }}>
                Wat is de Cliëntenraad?
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer6 };
