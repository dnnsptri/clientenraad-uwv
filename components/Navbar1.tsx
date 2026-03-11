"use client";

import React, { useState } from "react";
import { Menu, FileText, X } from "lucide-react";
import { getNavbarMenuItems } from "@/lib/articles";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    download: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/logo_uwv.svg",
    alt: "UWV cliëntenraad logo",
    title: "Jaarverslag 2024",
  },
  menu = [
    { title: "Voorwoord", url: "/foreword" },
    {
      title: "Artikelen",
      url: "#",
      items: getNavbarMenuItems().map((item) => ({
        ...item,
        icon: (
          <img
            src={item.image}
            alt={item.title}
            className="size-12 shrink-0 rounded-sm object-cover"
          />
        ),
      })),
    },
    {
      title: "Bijlagen",
      url: "#",
      items: [
        {
          title: "Overzicht werkgroepen",
          description: "Bijlage 1",
          icon: <FileText className="size-8 shrink-0" />,
          url: "/downloads/Bijlage_1_UWV_clientenraad_werkgroepen.pdf",
        },
        {
          title: "Ongevraagde adviezen",
          description: "Bijlage 2",
          icon: <FileText className="size-8 shrink-0" />,
          url: "/downloads/Bijlage_2_UWV_clientenraad_adviezen.pdf",
        },
      ],
    },
  ],
  auth = {
    download: { title: "Bekijk PDF", url: "/downloads/UWV_clientenraad_jaarverslag2024.pdf" },
  },
}: Navbar1Props) => {
  // Controlled state so we can close the sheet on navigation
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="relative z-50 py-6" style={{ backgroundColor: 'var(--white)', fontFamily: 'Work Sans, sans-serif' }}>
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-6">
              <img
                src={logo.src}
                className="max-h-16 dark:invert"
                alt={logo.alt}
              />
              <span className="text-[28px] font-semi-bold" style={{ color: 'var(--purple)' }}>
                {logo.title}
              </span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center relative z-50">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Button asChild size="sm" className="pdf-button">
              <a href={auth.download.url} target="_blank" rel="noopener noreferrer">{auth.download.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-3">
              <img
                src={logo.src}
                className="max-h-10 dark:invert"
                alt={logo.alt}
              />
              <span className="text-xl font-semibold" style={{ color: 'var(--purple)' }}>
                JV &rsquo;24
              </span>
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-3 transition-all duration-300 ease-in-out hover:bg-[var(--blue)]"
                  style={{
                    backgroundColor: 'var(--light-blue)',
                    color: 'var(--white)',
                    borderRadius: '2px',
                  }}
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto" style={{ backgroundColor: 'var(--white)', fontFamily: 'Work Sans, sans-serif' }}>
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-3">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                      <span className="text-lg font-semibold" style={{ color: 'var(--purple)' }}>
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigatiemenu
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, () => setMobileOpen(false)))}
                  </Accordion>

                  <div className="border-t pt-4" style={{ borderColor: 'var(--light-gray)' }}>
                    <Button asChild className="pdf-button w-full">
                      <a href={auth.download.url} target="_blank" rel="noopener noreferrer">{auth.download.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium nav-item transition-colors"
          style={{ backgroundColor: 'var(--white)' }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--white)'; el.style.color = 'var(--blue)'; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--white)'; el.style.color = ''; }}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground z-[9999] relative" style={{ backgroundColor: 'var(--white)' }}>
          <div className="grid w-[600px] gap-3 p-6 grid-cols-1">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title} className="w-full">
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors nav-item"
        style={{ backgroundColor: 'var(--white)' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--white)'; e.currentTarget.style.color = 'var(--blue)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--white)'; e.currentTarget.style.color = ''; }}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, onNavigate: () => void) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b" style={{ borderColor: 'var(--light-gray)' }}>
        <AccordionTrigger className="text-md py-3 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-1">
          {item.items.map((subItem) => (
            <MobileSubMenuLink key={subItem.title} item={subItem} onNavigate={onNavigate} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      onClick={onNavigate}
      className="text-md font-semibold py-3 border-b block transition-colors hover:text-[var(--blue)]"
      style={{ borderColor: 'var(--light-gray)' }}
    >
      {item.title}
    </a>
  );
};

/* Desktop sub-menu link — keeps original styling */
const SubMenuLink = ({ item }: { item: MenuItem }) => {
  const isExternal = /^https?:\/\//i.test(item.url);
  const isFile = /\.(pdf|docx?|xlsx?|pptx?)($|\?)/i.test(item.url);
  const newTab = isExternal || isFile;

  return (
    <a
      className="hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-4 leading-none no-underline outline-none transition-colors"
      href={item.url}
      target={newTab ? "_blank" : undefined}
      style={{ backgroundColor: 'var(--white)' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <div className="text-foreground flex-shrink-0">{item.icon}</div>
      <div className="flex-1">
        <div className="text-lg font-semibold mb-1">{item.title}</div>
        {item.description && (
          <p className=" text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

/* Mobile sub-menu link — smaller thumbnails, closes sheet on tap */
const MobileSubMenuLink = ({ item, onNavigate }: { item: MenuItem; onNavigate: () => void }) => {
  const isExternal = /^https?:\/\//i.test(item.url);
  const isFile = /\.(pdf|docx?|xlsx?|pptx?)($|\?)/i.test(item.url);
  const newTab = isExternal || isFile;

  return (
    <a
      className="flex select-none flex-row gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[var(--light-gray)]"
      href={item.url}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      onClick={newTab ? undefined : onNavigate}
    >
      {/* Smaller thumbnails on mobile */}
      <div className="text-foreground flex-shrink-0 [&>img]:size-10 [&>img]:rounded-sm [&>img]:object-cover [&>svg]:size-6">
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-base font-semibold mb-0.5 truncate">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
