interface TestimonialProps {
  quote?: string
  variant: "blue" | "purple"
}

const Testimonial = ({
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  variant,
}: TestimonialProps) => {
  const cssClass = variant === "blue" ? "testimonial-blue" : "testimonial-purple"
  const svg = variant === "blue" ? "/images/element_top.svg" : "/images/element_top_purple.svg"

  return (
    <div className="relative mt-10 -mb-4 lg:my-32">
      <div className="absolute -top-16 lg:-top-32 left-0 z-20">
        <img
          src={svg}
          alt=""
          aria-hidden="true"
          className="w-16 h-16 lg:w-32 lg:h-32 object-contain object-bottom"
        />
      </div>
      <section className={`pt-8 lg:pt-16 ${cssClass}`}>
        <div className="container">
          <div className="flex flex-col items-start text-left">
            <p className="mb-4 lg:mb-16 max-w-4xl px-4 lg:px-8 font-regular lg:text-3xl text-left">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// Named exports preserve all existing article page imports unchanged
const TestimonialBlue = (props: Omit<TestimonialProps, "variant">) => (
  <Testimonial {...props} variant="blue" />
)
const TestimonialPurple = (props: Omit<TestimonialProps, "variant">) => (
  <Testimonial {...props} variant="purple" />
)

export { TestimonialBlue, TestimonialPurple }
