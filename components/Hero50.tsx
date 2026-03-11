"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface HeroProps {
  title: string
  description: string
  image: string  // required — always provided by article pages
  variant: "blue" | "purple"
}

const Hero = ({ title, description, image, variant }: HeroProps) => {
  const bgColor = variant === "blue" ? "var(--blue)" : "var(--purple)"
  const svg = variant === "blue" ? "/images/element_top.svg" : "/images/element_top_purple.svg"

  return (
    <section className="relative mb-[-5rem] sm:mb-0">
      {/* Hero photo — fill container, priority-loaded since it's above the fold */}
      <div className="relative h-[380px] sm:h-[420px] lg:h-[680px]">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Triangle + box animate together as one unit */}
      <div className="relative -mt-28 sm:-mt-48 lg:-mt-64 z-10">
        <div className="container">
          <div className="relative mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute -top-32 left-0 z-20">
                <img
                  src={svg}
                  alt=""
                  aria-hidden="true"
                  className="w-32 h-32 object-contain object-bottom"
                />
              </div>
              <div
                className="rounded-sm px-6 pt-6 pb-8 lg:p-20 text-left lg:min-h-[360px] flex flex-col justify-start"
                style={{ backgroundColor: bgColor, boxShadow: "none", color: "var(--white)" }}
              >
                <p className="pt-1 text-sm lg:text-xl">{description}</p>
                <h1 className="text-balance text-2xl sm:text-3xl lg:text-6xl font-medium mt-4 lg:mt-10">
                  {title}
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Named exports preserve all existing article page imports unchanged
const HeroBlue = (props: Omit<HeroProps, "variant">) => <Hero {...props} variant="blue" />
const HeroPurple = (props: Omit<HeroProps, "variant">) => <Hero {...props} variant="purple" />

export { HeroBlue, HeroPurple }
