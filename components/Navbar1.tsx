"use client";

import React from "react";
import { Book, Menu, Sunset, Trees, Zap, FileText, UserRound } from "lucide-react";
import { getNavbarMenuItems } from "@/lib/articles";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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
        icon: <UserRound className="size-8 shrink-0" />
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
    download: { title: "Bekijk PDF", url: "/downloads/UWV_cliëntenraad_jaarverslag2024.pdf" },
  },
}: Navbar1Props) => {
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
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto" style={{ backgroundColor: 'var(--white)', fontFamily: 'Work Sans, sans-serif' }}>
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild className="pdf-button">
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
          className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium nav-item"
          style={{ backgroundColor: 'var(--white)' }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--white)'}
          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--white)'}
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
        className="bg-background hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors nav-item"
        style={{ backgroundColor: 'var(--white)' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold nav-item">
      {item.title}
    </a>
  );
};

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
        <div className="text-sm font-semibold mb-1">{item.title}</div>
        {item.description && (
          <p className=" text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
