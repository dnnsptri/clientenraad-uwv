interface HeroPurpleProps {
  title: string;
  description: string;
  image?: string;
}

const HeroPurple = ({ 
  title = "Community & business data, centralized",
  description = "Showcase the value of your community to the business. Talkbase sets the stage for successful cross-collaboration among community teams working with customer, marketing, sales, and product development.",
  image = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
}: HeroPurpleProps) => {
  return (
    <section className="relative">
      {/* Background image with fixed 720px height */}
      <div 
        className="h-[720px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Text box positioned half over visual, half over content */}
      <div className="relative -mt-24 z-10">
        <div className="container">
          <div className="relative mx-auto max-w-5xl">
            {/* Purple decorative element above the left edge of the purple box */}
            <div className="absolute -top-24 left-0 z-20">
              <img 
                src="/images/element_top_purple.svg" 
                alt="Decorative element" 
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="rounded-sm p-8 lg:p-20 text-left min-h-[260px] lg:h-[360px] flex flex-col justify-center" style={{ backgroundColor: 'var(--purple)', boxShadow: 'none', color: 'var(--white)' }}>
              <p className="pt-1 text-base lg:text-xl">
                {description}
              </p>
              <h1 className="text-balance text-3xl lg:text-6xl font-medium mt-6 lg:mt-10">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroPurple };


