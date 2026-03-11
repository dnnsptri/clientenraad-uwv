import Image from "next/image"

interface TestimonialPhotoProps {
  quote?: string
  image?: {
    src: string
    alt: string
  }
  variant: "blue" | "purple"
}

const TestimonialPhoto = ({
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  image = { src: "/images/header_maarten.jpg", alt: "Foto" },
  variant,
}: TestimonialPhotoProps) => {
  const bubbleClass = variant === "blue" ? "quote-bubble" : "quote-bubble-purple"

  return (
    <div className="relative mt-4 -mb-4 lg:my-32">
      <section className="py-0 overflow-visible">
        <div className="container">
          <div className="grid grid-cols-12 items-center gap-0 lg:gap-18">
            {/* Quote left */}
            <div className="col-span-12 lg:col-span-5 z-10 lg:-mr-20 relative order-2 lg:order-1">
              <div className={`${bubbleClass} text-left`}>
                <p className="font-regular lg:text-3xl leading-relaxed text-left">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </div>
            {/* Photo right */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <div className="relative w-full overflow-hidden rounded-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={540}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Named exports preserve all existing article page imports unchanged
const TestimonialBluePhoto = (props: Omit<TestimonialPhotoProps, "variant">) => (
  <TestimonialPhoto {...props} variant="blue" />
)
const TestimonialPurplePhoto = (props: Omit<TestimonialPhotoProps, "variant">) => (
  <TestimonialPhoto {...props} variant="purple" />
)

export { TestimonialBluePhoto, TestimonialPurplePhoto }
