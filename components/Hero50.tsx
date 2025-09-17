
interface Hero50Props {
  title: string;
  description: string;
  image?: string;
}

const Hero50 = ({ 
  title = "Community & business data, centralized",
  description = "Showcase the value of your community to the business. Talkbase sets the stage for successful cross-collaboration among community teams working with customer, marketing, sales, and product development.",
  image = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
}: Hero50Props) => {
  return (
    <section className="relative">
      {/* Background image with fixed 640px height */}
      <div 
        className="h-[640px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Text box positioned half over visual, half over content */}
      <div className="relative -mt-24 z-10">
        {/* Element positioned above the blue box */}
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-20">
          <img 
            src="/images/element_top.svg" 
            alt="Decorative element" 
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-sm p-20 text-left h-[360px] flex flex-col justify-center" style={{ backgroundColor: 'var(--blue)', boxShadow: 'none', color: 'var(--white)' }}>
            <p className="pt-2 lg:text-xl">
              {description}
            </p>
            <h1 className="text-balance text-4xl font-medium lg:text-6xl mt-10">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero50 };