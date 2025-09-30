import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialBlueProps {
  quote?: string;
  image?: {
    src: string;
    alt: string;
  };
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const TestimonialBluePhoto = ({
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  image = {
    src: "/images/header_maarten.jpg",
    alt: "Foto",
  },
  author = {
    name: "Customer Name",
    role: "Role",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
}: TestimonialBlueProps) => {
  return (
    <div className="relative">
      <section className="py-0 overflow-visible">
        <div className="container">
          <div className="grid grid-cols-12 items-center gap-6 lg:gap-18">
            {/* Quote left */}
            <div className="col-span-12 lg:col-span-5 z-10 lg:-mr-20 relative">
              <div className="quote-bubble text-left">
                <p className="font-regular lg:text-3xl leading-relaxed text-left">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </div>
            {/* Photo right */}
            <div className="col-span-12 lg:col-span-7">
              <div className="relative w-full overflow-hidden rounded-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { TestimonialBluePhoto };
