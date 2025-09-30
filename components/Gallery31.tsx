import React from "react";
import Link from "next/link";

import { DirectionAwareHover } from "@/components/aceternity/direction-aware-hover";
import { getNavbarMenuItems, articles } from "@/lib/articles";

const featureData = [
  {
    imgClass: "md:h-[320px] !w-full rounded-sm",
    imgsrc: "/images/header_maarten.jpg",
    ptitle: "1UWV",
    name: "Maarten Oosterveld (SMZ)",
    link: "/articles/1uwv-maarten-oosterveld",
  },
  {
    imgClass: "md:h-[320px] !w-full rounded-sm lg:col-span-2",
    imgsrc: "/images/header_hans.jpg",
    ptitle: "Kwaliteit door Bruggen Bouwen",
    name: "Hans Sijtsma (Noord)",
    link: "/articles/kwaliteit-hans-sijtsma",
  },
  {
    imgClass: "md:h-70 col-span-1 !h-full !w-full rounded-sm lg:row-span-2",
    imgsrc: "/images/header_ans.jpg",
    ptitle: "Menselijke maat in kwaliteit",
    name: "Ans Lockhoff (MOB)",
    link: "/articles/kwaliteit-ans-lockhoff",
  },
  {
    imgClass: "md:h-[320px] !w-full rounded-sm lg:col-span-2",
    imgsrc: "/images/header_theo_marloes.jpg",
    ptitle: "Moreel beraad",
    name: "Theo Hermsen & Marloes Barendrecht (SMZ)",
    link: "/articles/moreel-beraad-hermsen-barendrecht",
  },
  {
    imgClass: "md:h-[320px] !w-full rounded-sm",
    imgsrc: "/images/header_kees.jpg",
    ptitle: "Het nieuwe re-integratie-model",
    name: "Kees van Blerck (Re-integratie)",
    link: "/articles/reintegratie-kees-van-blerck",
  },
];

const Gallery31 = () => {
  return (
    <section id="artikelen" className="relative h-auto overflow-hidden py-32">
      <div className="container relative flex h-full w-full flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 mt-30">
          <h1 className="text-center text-6xl">
            Artikelen
          </h1>
          <p className=" text-center">
            Hieronder vindt u een overzicht van alle artikelen die in het jaarverslag 2024 zijn opgenomen.
          </p>
        </div>
        <div className="relative mt-16 mb-50 grid w-full grid-cols-1 justify-center gap-[12px] md:grid-cols-2 lg:grid-cols-4">
          {featureData.map((item, index) => {
            const articleSlug = articles[index]?.slug;

            if (articleSlug) {
              return (
                <Link key={index} href={`/articles/${articleSlug}`} className="contents">
                  <DirectionAwareHover
                    className={item.imgClass}
                    imageUrl={item.imgsrc}
                  >
                    <p className="text-xl font-bold">{item.ptitle}</p>
                    <p className="text-sm font-normal">{item.name}</p>
                  </DirectionAwareHover>
                </Link>
              );
            }

            return (
              <DirectionAwareHover
                key={index}
                className={item.imgClass}
                imageUrl={item.imgsrc}
              >
                <p className="text-xl font-bold">{item.ptitle}</p>
                <p className="text-sm font-normal">{item.name}</p>
              </DirectionAwareHover>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Gallery31 };
