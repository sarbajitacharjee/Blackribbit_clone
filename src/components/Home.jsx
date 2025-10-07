import heroVideo from "../assets/background.mp4";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-black py-4 text-center text-3xl md:text-5xl font-semibold">
        Make Decisions 56x Faster
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Welcome to Blackribbit's <br />
            <span className="text-orange-400">Culture Branding Program</span>
          </h1>
          <p className="text-2xl md:text-3xl mt-6">How can we help?</p>

          <div className="flex flex-col md:flex-row gap-10 justify-center mt-12 text-lg md:text-base font-medium">
            <a href="#" className="underline hover:text-orange-300 text-xl">
              What’s Culture Branding?
            </a>
            <a href="#" className="underline hover:text-orange-300 text-xl">
              See Our Work
            </a>
            <a href="#" className="underline hover:text-orange-300 text-xl">
              Speak With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
