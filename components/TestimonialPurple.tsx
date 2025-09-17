import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialPurpleProps {
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const TestimonialPurple = ({
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  author = {
    name: "Customer Name",
    role: "Role",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
}: TestimonialPurpleProps) => {
  return (
    <div className="relative mt-24">
      {/* Element positioned outside the blue box */}
      <div className="absolute -top-24 -left-0 z-20">
        <img 
          src="/images/element_top.svg" 
          alt="Decorative element" 
          className="w-32 h-32 object-contain"
        />
      </div>
      <section className="pt-16 testimonial-purple">
      <div className="container">
        <div className="flex flex-col items-start justify-center text-left min-h-[200px]">
          <p className="max-w-4xl px-8 font-regular lg:text-3xl text-left">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export { TestimonialPurple };
