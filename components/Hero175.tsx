"use client";

import { ArrowDown, CirclePlay } from "lucide-react";

import { badgeVariants } from "./ui/badge";
import { Button } from "./ui/button";

const Hero175 = () => {
  return (
    <section className="dark font-public_sans relative py-12 before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-[15rem] before:w-full before:bg-linear-to-b before:from-muted before:to-transparent before:content-[''] md:py-32" style={{ backgroundColor: 'var(--purple)' }}>
      <div className="relative z-20 container">
        <div className="relative z-20 mx-auto flex max-w-[56.25rem] flex-col items-center gap-6">
          {/* <div
            className="mb-4 flex w-fit items-center gap-1 rounded-full border px-2.5 py-1.5"
            style={{ backgroundColor: 'var(--light-blue)' }}
          >
            <p className="text-sm font-semibold text-white">
              Jaarverslag 2024
            </p>
          </div> */}
          <h1 className="w-full text-center text-5xl font-medium text-foreground md:text-7xl">
            Werken aan kwalitatieve dienstverlening op maat
          </h1>
          <p className="text-center text-[19px] text-white">
            Dankzij de ervaringen van cliënten en de dialoog met UWV werken de cliëntenraden aan meer bereikbaarheid, begrijpelijkheid en betrouwbaarheid. Alleen samen kunnen we stappen zetten naar een dienstverlening die recht doet aan iedere cliënt.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Button
              asChild
              className="flex h-fit items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium"
            >
              <a 
                href="#artikelen" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('artikelen')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="scroll-smooth"
              >
                <div>Naar de artikelen</div>
                <ArrowDown className="size-5!" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero175 };