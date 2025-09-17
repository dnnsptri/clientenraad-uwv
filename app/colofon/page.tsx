"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FadeInSection from "@/components/FadeInSection";

export default function ColofonPage() {
  const [activeHeader, setActiveHeader] = useState<string | null>(null);
  const headerRefs = useRef<Record<string, HTMLElement>>({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const headers = Object.keys(headerRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeader(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    headers.forEach((headerId) => {
      const element = headerRefs.current[headerId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addHeaderRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      headerRefs.current[id] = ref;
    }
  };

  return (
    <FadeInSection>
      <section className="py-24">
      <div>
        <div className="container">
          <div className="mt-9 flex justify-center">
            <div className="w-full max-w-5xl">
              <h1 className="blank text-balance text-4xl md:text-5xl">
                Colofon
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center mt-16">
          <div className="w-full max-w-5xl">
            <div className="w-full">
              <div>
                <div className="prose prose-h2:scroll-m-10 mt-6">
                <p className="text-[19px] leading-8  mb-4">
                      Dit jaarverslag is samengesteld door de UWV Cliëntenraad en geeft een overzicht van onze activiteiten en bevindingen over het afgelopen jaar. We danken alle betrokkenen voor hun waardevolle bijdrage.
                    </p>
                    <h2 id="header-1" ref={(ref) => addHeaderRef("header-1", ref)} className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                      Redactie:
                    </h2>
                    <p className="text-[19px] leading-8  mb-4">
                      - Gerard Haan (cliëntenraad Noord, voorzitter Redactieoverleg)<br />
                      - Petra van Wieringen (cliëntenraad Overijssel en Gelderland-Noord, lid Redactieoverleg)<br />
                      - Eric Beukema (cliëntenraad Overijssel en Gelderland-Noord, lid Redactieoverleg)<br />
                      - Else te Brake (centrale cliëntenraad, lid Redactieoverleg)<br />
                      - Dick Tolsma (cliëntenraad Midden- en Oost-Brabant, lid Redactieoverleg)<br />
                      - André Houting (cliëntenraad Rijnmond, lid Redactieoverleg)<br /><br />
                    </p>
                    <h2 id="header-1" ref={(ref) => addHeaderRef("header-1", ref)} className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                      Vormgeving & realisatie:
                    </h2>
                    <p className="text-[19px] leading-8  mb-4">
                      - Dennis Petri (Backspace)<br />
                      - Menno van der Veen (Backspace)<br /><br />
                    </p>
                    <h2 id="header-1" ref={(ref) => addHeaderRef("header-1", ref)} className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                      Met dank aan:
                    </h2>
                    <p className="text-[19px] leading-8  mb-4">
                      - Saskia Bos (UWV, ambtelijk secretaris centrale cliëntenraad)<br />
                      - Wonne Wolters (UWV, adviseur cliëntenparticipatie)<br />
                      - Pia Dijkstra (EMMA Communicatie, procesbegeleiding)<br />
                      - Joris Jenster (EMMA Communicatie, procesbegeleiding en eindredactie)<br /><br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
