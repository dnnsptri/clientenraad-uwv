import Image from "next/image"
import { Button } from "./ui/button"

const Cta5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col overflow-hidden rounded-lg md:rounded-xl lg:flex-row lg:items-center" style={{ backgroundColor: '#F8F4F8' }}>
          <div className="w-full shrink-0 self-stretch lg:w-1/2">
            <Image
              src="/images/visual_PDF.png"
              alt="Jaarverslag 2024 PDF preview"
              width={800}
              height={534}
              className="w-full h-full object-cover rounded-t-md md:rounded-t-none md:rounded-l-md"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Jaarverslag 2024 als PDF
            </h3>
            <p className="mb-8 lg:text-[19px]">
              Wilt u het jaarverslag liever bekijken in PDF of zelfs printen? Dat kan. Download het complete rapport en lees het op uw eigen tempo, waar en wanneer u wilt.
            </p>
            <Button asChild className="pdf-button">
              <a href="/downloads/UWV_clientenraad_jaarverslag2024.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Cta5 }
