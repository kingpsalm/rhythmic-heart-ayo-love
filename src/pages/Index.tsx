// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://ibb.co/RGYWFxCq")'}}>

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/20 text-2xl float">♥</div>
        <div className="absolute top-20 right-16 text-accent/20 text-xl float" style={{animationDelay: '1s'}}>♥</div>
        <div className="absolute bottom-32 left-20 text-primary/20 text-lg float" style={{animationDelay: '2s'}}>♥</div>
        <div className="absolute bottom-20 right-10 text-accent/20 text-2xl float" style={{animationDelay: '0.5s'}}>♥</div>
        <div className="absolute top-1/3 left-1/4 text-primary/20 text-sm float" style={{animationDelay: '1.5s'}}>♥</div>
        <div className="absolute top-2/3 right-1/4 text-accent/20 text-sm float" style={{animationDelay: '2.5s'}}>♥</div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Beating Heart */}
        <div className="mb-8 md:mb-12">
          <div className="heart-beat text-8xl md:text-9xl lg:text-[12rem] text-primary drop-shadow-lg">
            ♥
          </div>
        </div>

        {/* Romantic Message */}
        <div className="max-w-4xl mx-auto">
          <h1 className="romantic-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
            I LOVE YOU
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground/90 font-semibold">
            BABY LEXY YOU REALLY ARE THE BEST
          </h2>
        </div>

        {/* Subtle Sparkle Effects */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="animate-pulse text-yellow-300 text-xl">✨</div>
          <div className="animate-pulse text-yellow-300 text-lg" style={{animationDelay: '0.5s'}}>✨</div>
          <div className="animate-pulse text-yellow-300 text-xl" style={{animationDelay: '1s'}}>✨</div>
        </div>
      </div>

      {/* Bottom decorative hearts */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 text-primary/40">
        <span className="text-sm animate-pulse">♥</span>
        <span className="text-xs animate-pulse" style={{animationDelay: '0.3s'}}>♥</span>
        <span className="text-sm animate-pulse" style={{animationDelay: '0.6s'}}>♥</span>
      </div>
    </div>
  );
};

export default Index;
