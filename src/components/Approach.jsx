import leftimage from "../assets/leftimage.jpg";
import diagram from "../assets/diagram.svg";


const CultureBranding = () => {
  return (
    <div className="w-full flex flex-col">
      {/* --- Section 1: Header --- */}
      <section className="culture-hero  text-white py-20 px-6 md:px-20 relative">
  <div className="overlay"></div>

  <div className="relative max-w-5xl mx-auto">
    <h1 className="text-3xl md:text-5xl text-white font-semibold mb-4">
      What is Culture Branding?
    </h1>
    <p className="text-md md:text-2xl md:ml-60 ml-10 leading-relaxed max-w-3xl">
      Most people think culture branding means marketing to cultural
      groups. Instead, culture branding is connecting company values to
      every experience— <span className="text-[#ff9913]">  turning every touch point into an emotional
      contract </span> designed with empathy.
    </p>
  </div>
</section>


      {/* --- Section 2: Fundamental Problem --- */}
      <section className="bg-[#ff9913] text-black py-16 px-6 md:px-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-xl md:text-4xl  text-white font-semibold mb-4">
              The Simple Truth of a Fundamental Problem
            </h2>
            <p className="text-sm md:text-lg  leading-relaxed mb-3">
              Companies treat customers as dollars made and employees as dollars
              spent, and touch points become transactional rather than
              meaningful.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-3">
             <b> Culture branding puts humanity first and designs every interaction
              as an emotional contract.</b> When people feel every moment is
              designed with them in mind—whether they’re buying or working—they
              won’t want to go anywhere else.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              This happens when company values truthfully connect to customer
              experiences and employee experiences at the same time.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="md:w-96 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm">
              <img src={leftimage} alt="Portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Inside-Outside-In Model --- */}
      <section className="bg-[#ff9913] text-black py-16 px-6 md:px-40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-4xl text-white font-semibold mb-4">
            The Inside–Outside–In™ Model
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-10">
            Culture branding operates through three interconnected value
            propositions.
          </p>

          {/* Boxes */}
          <div className="grid md:grid-cols-3 gap-6  mb-10">
            {/* Inside */}
            <div className="bg-[#FFFFFF52]  rounded-lg p-5 shadow-md">
              <h3 className="font-semibold mb-2">
                Inside // Company Purpose
              </h3>
              <p className="text-sm leading-relaxed">
                Why your organization exists and why anyone should care. The
                foundational truth that drives every other decision.
              </p>
            </div>

            {/* Outside */}
            <div className="bg-[#FFFFFF52] rounded-lg p-5 shadow-md">
              <h3 className="font-semibold mb-2">
                Outside // Customer Value Proposition
              </h3>
              <p className="text-sm leading-relaxed">
                Why people would want to buy from you. Designed for human needs,
                not just market positioning.
              </p>
            </div>

            {/* In */}
            <div className="bg-[#FFFFFF52] rounded-lg p-5 shadow-md">
              <h3 className="font-semibold mb-2">
                In // Employee Value Proposition
              </h3>
              <p className="text-sm leading-relaxed">
                Why people would want to work for you. Designed for genuine
                fulfillment, not just retention.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <p className="text-sm md:text-base leading-relaxed max-w-4xl">
            Each proposition serves the human experience first. When aligned
            through shared purpose, they create organizational coherence that
            builds both engagement and results.
          </p>
        </div>
      <img src={diagram} width={1200} className="mt-10 bg-white rounded-3xl" alt="big diagram" />
      </section>

    </div>
  );
};

export default CultureBranding;
