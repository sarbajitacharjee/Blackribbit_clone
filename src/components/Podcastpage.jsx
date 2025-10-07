import { useEffect,useState } from "react";
import { FaArrowDown } from "react-icons/fa";


export default function Podcast() {
  
  
  const images = [
    "https://blackribbit.com/wp-content/uploads/2024/02/stayWellTravels_thumb-b.jpg",
    "https://blackribbit.com/wp-content/uploads/2022/09/smoothLimo_thumb.jpg",
    "https://blackribbit.com/wp-content/uploads/2022/09/reclaimedBeing_thumb.jpg",
    "https://blackribbit.com/wp-content/uploads/2022/09/base_thumb.jpg",
    "https://blackribbit.com/wp-content/uploads/2024/02/marentetteArchitects_thumb.jpg",
    "https://blackribbit.com/wp-content/uploads/2022/09/smoothLimo_thumb.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Calculate visible images (3 at a time)
  const visibleImages = [
    images[index % images.length],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  return (
    <section className="bg-[#292929] text-white font-sans">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-start py-5 px-4">
        <p className="text-sm text-gray-400 mb-2">Shackleton Research Trust</p>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Intercultural Scientific Advancement
        </h1>

        {/* Logo Card */}
        <div className=" rounded-lg shadow-md p-10 mt-8 flex flex-col items-center justify-center">
          <img
            src="https://blackribbit.com/wp-content/uploads/2022/09/shackletonTrust_slide_1-768x433.jpg.webp"
            alt="Shackleton Research Trust Logo"
            width={1200}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* White Section - Description */}
      <div className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          <p className="mb-6">
            The Shackleton Research Trust (SRT), a 501(c)(3) non-profit,
            embarked on a mission to maximize the global footprint of
            underrepresented students of science through adventure-driven
            research initiatives.
          </p>

          <h2 className="text-4xl font-semibold mb-3">Challenge</h2>
          <p className="mb-5 text-lg">
            SRT faced unique challenges in establishing its culture brand:{" "}
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Highlighting the global influence of the organization.</li>
            <li>
              Addressing diverse cultural, demographic, economic, and linguistic
              barriers.
            </li>
            <li>
              Appealing to multiple target audiences across sponsors, partners,
              students, and participants.
            </li>
            <li>
              Differentiating from established scholarship and grant programs.
            </li>
            <li>Creating an organic, professional, and non-commercial path.</li>
          </ul>

          <p className="mt-6">
            Our goal: Develop a public brand identity that positions SRT as a
            catalyst for intercultural scientific advancement, resonating with a
            global audience.
          </p>
        </div>
      </div>

      {/* Dark Section - Device Mockup */}
      <div className="bg-[#292929] text-center py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <img
            src="https://blackribbit.com/wp-content/uploads/2022/09/shackletonTrust_slide_2.jpg.webp"
            alt="Devices mockup"
            className="w-full mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-3xl mx-auto mt-8 text-start">
          <h2 className="text-xl text-gray-300 md:text-3xl font-semibold mb-3">
            Architecting a Platform for Scientific Empowerment
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Through our Inside–Outside™ approach, we crafted a comprehensive
            online brand strategy that amplified SRT’s mission for intercultural
            collaboration and scientific empowerment.
          </p>

          <ul className="list-disc mt-5 list-inside marker:text-gray-300 space-y-2">
            <li className="text-gray-300">
              Defined the brand essence as “Intercultural scientific
              advancement”
            </li>
            <li className="text-gray-300">
              Created the empowering brand mantra: “Empowering the individual
              together”
            </li>
            <li className="text-gray-300">
              Established brand pillars: Education, Adventure, Inclusion, and
              Leadership
            </li>
            <li className="text-gray-300">
              {" "}
              Developed a tone of voice that is inclusive, educational,
              adventurous, and encouraging
            </li>
          </ul>
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <img
            src="https://blackribbit.com/wp-content/uploads/2024/09/shackletonTrust_slide_cover.jpg.webp"
            alt="Devices mockup"
            className="w-full mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-3xl mx-auto mt-8 text-start">
          <h2 className="text-xl text-gray-300 md:text-3xl font-semibold mb-3">
            Launching a Global Scientific Movement
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            To bring the SRT culture brand to life, we implemented strategic
            initiatives:
          </p>

          <ul className="list-disc mt-5 list-inside marker:text-gray-300 space-y-2">
            <li className="text-gray-300 text-sm">
              Designed a seasonal journal featuring underrepresented global
              scientists as the primary marketing driver
            </li>
            <li className="text-gray-300 text-sm">
              Crafted targeted messaging for students and investors, emphasizing
              global recognition and impact
            </li>
            <li className="text-gray-300 ">
              Created a multi-lingual digital presence to reach a diverse,
              international audience
            </li>
          </ul>
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <img
            src="https://blackribbit.com/wp-content/uploads/2024/09/shackletonTrust_slide_3.jpg.webp"
            alt="Devices mockup"
            className="w-full mx-auto rounded-lg shadow-lg"
          />
        </div>


        <div className="max-w-5xl mx-auto mt-10">
          <img
            src="https://blackribbit.com/wp-content/uploads/2024/09/shackletonTrust_slide_6-1.jpg.webp"
            alt="Devices mockup"
            className="w-full mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="max-w-5xl mx-auto mt-10">
          <img
            src="https://blackribbit.com/wp-content/uploads/2024/09/shackletonTrust_slide_4.jpg.webp"
            alt="Devices mockup"
            className="w-full mx-auto rounded-lg shadow-lg"
          />
        </div>


<div className="max-w-3xl mx-auto mt-8 text-start p-5">

  <h1>SRT evolved into a culture brand symbolizing progressive, inclusive scientific advancement. They stand as a beacon for those seeking to make their mark in the scientific world, offering extraordinary opportunities for professional and scientific advancement while cultivating a sense of belonging in the global scientific community.

</h1>
</div>
        
     <div className="max-w-5xl mx-auto mt-10">
          <img
            src="https://blackribbit.com/wp-content/uploads/2022/09/shackletonTrust_slide_5.jpg.webp"
            alt="Devices mockup"
            className="w-full mx-auto rounded-lg shadow-lg"
          />
        </div>


        <div className="bg-[#292929] text-white p-8 mt-10 flex items-center justify-center ">
      <div className="max-w-3xl text-start">
        <div className=" text-start ">
          <p className="text-orange-500 text-6xl font-bold leading-none">“</p>
        </div>
        <p className="text-gray-300 text-lg sm:text-xl md:text-xl mb-6 leading-relaxed font-light">
          Blackribbit was the key solution for our branding and marketing strategy. They looked at every facet of
          market analysis and what type of brand image we wanted to portray. We didn’t have a lot of these
          questions answered, so they walked us through a systematic process.
        </p>
        <div className="max-w-5xl text-start">
          <p className="text-white text-xl sm:text-2xl font-semibold mb-1">Charlton S.</p>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            Executive Director | Shackleton Research Trust
          </p>
        </div>
      </div>
    </div>


    <div className="mt-16  flex items-center justify-center">
              <hr className="w-1/4 border-orange-600" />
              <span className="mx-4 text-3xl text-gray-300">
                More of Our Work
              </span>
              <hr className="w-1/4 border-orange-400" />
            </div>

      </div>



      <section className="bg-[#292929] text-white font-sans min-h-screen flex flex-col">
      {/* Carousel Section */}
      <div className=" py-6 overflow-hidden">
      <div className=" flex items-center justify-center gap-4 transition-all duration-700 ease-in-out">
        {visibleImages.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-1/3 transition-transform duration-700 ease-in-out"
          >
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-48 md:h-60 object-cover rounded-md shadow-lg border border-gray-700"
            />
          </div>
        ))}
      </div>
    </div>




      {/* Contact Form Section */}
      <div className="flex-1 flex items-center justify-center py-16 px-6 bg-[#292929">
        <div className="bg-[#292929] rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full">
          <h2 className="text-center text-gray-300 text-2xl font-semibold mb-8">
            Let’s Connect
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#292929] border border-gray-600 text-white rounded-md px-4 py-2  outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-2">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full bg-[#292929] border border-gray-600 text-white rounded-md px-4 py-2 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#292929] border border-gray-600 text-white rounded-md px-4 py-2  outline-none"
              />
            </div>

            {/* Question 1 */}
            <div>
              <label className="block text-sm mb-2">
                Where do you want to be in 3 years?
              </label>
              <div className="space-y-1 text-sm text-gray-300">
                <label className="block">
                  <input type="radio" name="goal" className="mr-2" /> My
                  revenue has gone up 100% every year
                </label>
                <label className="block">
                  <input type="radio" name="goal" className="mr-2" /> I’ll have
                  50 more employees
                </label>
                <label className="block">
                  <input type="radio" name="goal" className="mr-2" /> My company
                  is a symbol of progress
                </label>
                <label className="block">
                  <input type="radio" name="goal" className="mr-2" /> I’ll have
                  sold my company
                </label>
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <label className="block text-sm mb-2">
                Do you want a Rapid Brand Diagnostic?
              </label>
              <div className="space-y-1 text-sm text-gray-300">
                <label className="block">
                  <input type="radio" name="diagnostic" className="mr-2" /> Yes
                </label>
                <label className="block">
                  <input type="radio" name="diagnostic" className="mr-2" /> No
                </label>
                <label className="block">
                  <input type="radio" name="diagnostic" className="mr-2" /> I
                  don’t know
                </label>
              </div>
            </div>

            {/* Text Area */}
            <div>
              <label className="block text-sm mb-2">
                What can we help you with? <span className="text-orange-400">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full bg-[#292929] border border-gray-600 text-white rounded-md px-4 py-2  outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </section>

    

  );
}
