"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { getNavbarMenuItems } from "@/lib/articles";

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
import { ContentDivider } from "@/components/ContentDivider";
import FadeInSection from "@/components/FadeInSection";
import { Separator } from "@/components/ui/separator";

const Content4 = () => {
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
                Voorwoord van het redactieoverleg
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
                    Beste lezer,<br /> <br />
                    Met trots en betrokkenheid presenteert het redactieoverleg van de UWV Cliëntenraden het jaarverslag over 2024. Hierin blikken we terug op een jaar waarin de cliëntenraden zich opnieuw sterk hebben gemaakt voor de stem van cliënten binnen het UWV.
                  </p>
                  <p className="text-[19px] leading-8  mb-4">
                    De UWV-cliëntenraden bestaan uit vrijwilligers. Zij vertegenwoordigen alle cliënten van UWV, dus iedereen met een uitkering en/of voorziening van UWV. Het redactieoverleg bestaat uit afgevaardigden van de verschillende cliëntenraden. Naast het jaarverslag publiceren we artikelen over relevante onderwerpen op de website van UWV-cliëntenraden.
                  </p>
                  <p className="text-[19px] leading-8  mb-4">
                    De cliëntenraden hebben als taak om signalen, ervaringen en knelpunten van cliënten zichtbaar te maken. Dit gebeurt onder meer door gesprekken met managers binnen UWV en door signalen te vertalen naar zowel gevraagde als ongevraagde adviezen. Op deze manier hopen we bij te dragen aan een betere dienstverlening, meer toegankelijkheid en een organisatie die oog houdt voor de menselijke maat.
                  </p>
                  <p className="text-[19px] leading-8  mb-4">
                    Het jaar 2024 stond vooral in het teken van de kwaliteitscrisis bij UWV. Zowel op het gebied van de sociaal-medische beoordelingen van moeilijk objectiveerbare aandoeningen, als bij de berekeningen van de hoogte van, met name de WIA-uitkeringen bleek de kwaliteit ver onder de maat te zijn. De Centrale Cliëntenraad heeft voor beide kwaliteitsproblemen adviezen uitgebracht en regelmatig overleg gevoerd met de Raad van Bestuur en verantwoordelijke managers over de “hersteloperaties WIA”. Ook de overige ongevraagde adviezen van de Centrale Cliëntenraad hadden betrekking op het problematische terrein van SMZ (Sociaal Medische Zaken). Bij de districtsraden was er verschil in de manier waarop zij bij dit onderwerp betrokken waren.
                  </p>
                  <p className="text-[19px] leading-8  mb-4">
                    Naast deze kritieke punten besteden we in dit jaarverslag ook aandacht aan positieve ontwikkelingen bij UWV, zoals de morele beraden, re-integratie en het project “1 UWV”.
                  </p>
                  <p className="text-[19px] leading-8  mb-4">
                    Daarnaast besteden we in dit jaarverslag onder meer aandacht aan mogelijke verbeteringen in de kwaliteit van de dienstverlening. Ook gaat het over vraagstukken die in het afgelopen jaar niet op de voorgrond zijn gekomen, maar die de cliëntenraad wel zijn blijven volgen.
                  </p>
                  <p className="text-[19px] leading-8  mb-4">
                    We realiseren ons dat er nog veel uitdagingen zijn voor de cliëntenraden. Tegelijkertijd zien we dat goede samenwerking en dialoog kunnen leiden tot stappen vooruit. Als cliëntenraden blijven we ons daarom inzetten voor een UWV dat bereikbaar, begrijpelijk en betrouwbaar is.
                  </p>
                  <p className="text-[19px] leading-8  mb-4">
                    Onze dank gaat uit naar alle cliënten die hun ervaringen met ons hebben gedeeld, en naar de medewerkers van UWV die openstonden voor gesprek en samenwerking. Alleen samen kunnen we werken aan een dienstverlening die recht doet aan iedere cliënt.<br /> <br />
                    Benieuwd naar meer?<br />Lees dan nu het artikel van Maarten over <a href={getNavbarMenuItems()[0]?.url} className="underline">1UWV</a>.
                  </p>
                  <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-2xl bg-muted/50 p-14 text-center md:flex-row md:text-left mt-24">
          <h3 className="text-3xl font-semibold">
            Lees het jaarverslag 2024 in PDF
          </h3>
          <Button asChild size="lg" className="pdf-button">
            <a href="/downloads/UWV_clientenraad_jaarverslag2024.pdf" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </Button>
        </div>
        */}
      </div>
    </section>
    </FadeInSection>
  );
};

export { Content4 };
