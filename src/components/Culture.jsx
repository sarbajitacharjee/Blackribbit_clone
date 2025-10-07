/* eslint-disable no-unused-vars */
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import froggy from "../assets/froggg.jpg";
import { motion } from 'framer-motion';



const teamMembers = [
  // Row 1
  {
    name: 'Member One',
    title: 'Lead Something',
    image: 'https://blackribbit.com/wp-content/uploads/2024/03/nader_headshot_0324.jpg',
  },
  {
    name: 'Member Two',
    title: 'Lead Design',
    image: 'https://blackribbit.com/wp-content/uploads/2025/09/tammy_f_headshot.jpg',
  },
  {
    name: 'Member Three',
    title: 'CEO',
    image: 'https://blackribbit.com/wp-content/uploads/2025/09/ben_o_headshot.jpg',
  },
  // Row 2
  {
    name: 'Ashley Gloates',
    title: 'Lead Organizational Strategist',
    image: 'https://blackribbit.com/wp-content/uploads/2023/10/ashley_g_headshot.jpg',
  },
  {
    name: 'Member Five',
    title: 'Developer',
    image: 'https://blackribbit.com/wp-content/uploads/2024/09/nick_h_headshot.jpg',
  },
  {
    name: 'Member Six',
    title: 'Marketing',
    image: 'https://blackribbit.com/wp-content/uploads/2025/09/bob_k_headshot.jpg',
  },
  // Row 3
  {
    name: 'Member Seven',
    title: 'Manager',
    image: 'https://blackribbit.com/wp-content/uploads/2025/09/josh_h_headshot.jpg',
  },
  {
    name: 'Anna Barkova',
    title: 'Lead Visual Designer',
    image: 'https://blackribbit.com/wp-content/uploads/2025/09/anna_b_headshot.jpg',
  },
  {
    name: 'Member Nine',
    title: 'Engineer',
    image: 'https://blackribbit.com/wp-content/uploads/2025/09/emilio_a_headshot.jpg',
  },
  {
    name: 'Member ten',
    title: 'Engineer',
    image: 'https://blackribbit.com/wp-content/uploads/2022/10/fish_luna_headshot.jpg',
  },
  {
    name: 'Member Eleven',
    title: 'Engineer',
    image: 'https://blackribbit.com/wp-content/uploads/2022/10/jackie_d_headshot.jpg',
  },
  {
    name: 'Member Twelve',
    title: 'Engineer',
    image: 'https://blackribbit.com/wp-content/uploads/2022/10/chris_w_headshot.jpg',
  },
];
const Culture = () => {
    const rows = [];

  for (let i = 0; i < teamMembers.length; i += 3) {
    const rowMembers = teamMembers.slice(i, i + 3);
    rows.push(rowMembers);
  }

  return (
    <>
      <div className="bg-[#292929] text-white font-sans px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold tracking-wide">
            The Blackribbit Standard
          </h1>
          <p className="text-gray-300 mt-2 text-sm">
            Reliable. Compassionate. Deliberate.
          </p>
          <div className="mt-16 flex items-center justify-center">
            <hr className="w-1/4 border-orange-400" />
            <span className="mx-4 text-orange-500 text-xl">
              <FaRegClock />
            </span>
            <hr className="w-1/4 border-orange-400" />
          </div>
        </div>

        {/* Our Origin */}
        <div className="mb-16 md:px-40">
          <h2 className="text-4xl font-semibold mb-4">Our Origin</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Placeholder */}
            <div className="bg-white w-full md:w-1/3 p-6 flex justify-center items-center">
              <img
                src="https://blackribbit.com/wp-content/uploads/2023/04/blackribbit_logo_about_1080x1080-768x768.png.webp"
                alt="Kismet Frog"
                className="w-40 object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 text-gray-300 text-sm space-y-4">
              <p>
                Our co-founder saw our future one dark fall day while passing a
                tattoo parlor on a street corner in Munich.
              </p>
              <p>
                Inspired by the sign so quickly, he memorized the image of a
                blackribbit and was instantly swimming through a sea of
                mesmerizing tree frogs.
              </p>
            </div>
          </div>
        </div>

        <div className="md:px-40 px-1">
          <p className="mb-4">
            The experience led him through a world of symbolism revealing the
            frog's capacity for empathy and compassion, transformation, and the
            wisdom to empower oneself. The visions resonated so deeply with
            Nadav, it felt destined to name his company the same.
          </p>
          <p>
            In 2018, Blackribbit was launched, and the happy little tree frog
            aptly named Kismet was born.
          </p>
        </div>

        <div className="mt-16 mb-12 flex items-center justify-center">
          <hr className="w-1/4 border-orange-400" />
          <span className="mx-4 text-orange-500 text-xl">
            <GiSevenPointedStar />
          </span>
          <hr className="w-1/4 border-orange-400" />
        </div>

        {/* What We've Built */}
        <div className="mb-16 md:px-40 px-1">
          <h2 className="text-4xl font-semibold mb-4">What We've Built</h2>
          <p className="text-gray-300 text-sm mb-4">
            Today, Blackribbit has become The Culture Branding Company with a
            vision to harmonize humanity by lifting our relationship with the
            workplace.
          </p>
          <p className="text-gray-300 text-sm mb-4">
            We’ve developed the first comprehensive methodology that operates at
            the intersection of five major disciplines: Design, Brand Strategy,
            Organizational Psychology, Operations, and Communications. Most
            consultants work in one field. We’ve synthesized all five into a
            unified transformation system.
          </p>
          <p className="text-gray-300 text-sm">
            Our proprietary Inside {">"} Outside™ program delivers in 16 weeks
            what typically takes organizations 12–18 months, combining strategic
            partnerships with CMRI and The Fitzpatrick Collective to create
            unprecedented organizational transformation.
          </p>
        </div>

        <div className="mt-16 mb-12 flex items-center justify-center">
          <hr className="w-1/4 border-orange-400" />
          <span className="mx-4 text-orange-500 text-xl">
            <FaHandshakeAngle />
          </span>
          <hr className="w-1/4 border-orange-400" />
        </div>

        {/* Strategic Partnerships */}
        <div className="md:px-40">
          <h2 className="text-4xl font-semibold mb-6">
            Strategic Partnerships
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-sm md:px-28">
            {/* Partnership Card 1 */}
            <div className="bg-[#ffffff52] p-6 rounded-md ">
              <h3 className="text-white text-xl font-semibold mb-2">
                The Culture MRI® Integration
              </h3>
              <p>
                Quantitative measurement of employee engagement connected to
                financial implications through a proprietary return-on-labor
                analysis.
              </p>
            </div>

            {/* Partnership Card 2 */}
            <div className="bg-[#ffffff52] p-6 rounded-md">
              <h3 className="text-white text-xl font-semibold mb-2">
                The Fitzpatrick Collective® Collaboration
              </h3>
              <p>
                Leadership dynamics assessment and organizational health
                evaluation integrated into our transformation methodology.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-6 mb-10">
            These partnerships expand our capability to measure, strategize, and
            implement culture brand transformation with unprecedented depth and
            precision.
          </p>
        </div>
      </div>
      <section className="bg-[#ff9913] py-16 px-4 sm:px-6 lg:px-8">
        <div className="md:px-40">
          <h2 className="text-white text-5xl font-bold mb-12">
            Our Innovation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Culture Brand Statement */}
            <div className="bg-[#fcbb53]  rounded-lg p-8 shadow-md">
              <h3 className="text-black text-2xl font-semibold mb-4">
                Culture Brand Statement™
              </h3>
              <p className="text-gray-900 text-lg">
                Every organization receives a foundational statement: "Company
                does everything it does because it values [core values], and
                wants people to experience [desired experience]." This becomes
                the decision-making filter for every choice across your
                ecosystem.
              </p>
            </div>

            {/* Culture Brand Filter */}
            <div className=" bg-[#fcbb53] rounded-lg p-8 shadow-md">
              <h3 className="text-black text-2xl font-semibold mb-4">
                Culture Brand Filter™
              </h3>
              <p className="text-gray-700 text-lg ">
                An AI-powered system trained on your complete culture brand
                strategy, providing real-time guidance to ensure every decision
                honors your Culture Brand Statement. Eventually, organizations
                internalize this wisdom and operate authentically without
                external tools.
              </p>
            </div>

            {/* 16-Week Delivery */}
            <div className="bg-[#fcbb53] rounded-lg p-8 shadow-md">
              <h3 className="text-black text-2xl font-semibold mb-4">
                16-Week Delivery
              </h3>
              <p className="text-gray-700 text-lg">
                Our multidisciplinary approach allows us to deliver
                comprehensive transformation in 16 weeks rather than the
                industry standard of 6-12 months. Speed comes from systematic
                methodology, not shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#292929] min-h-screen text-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Our Culture Brand Statement */}
          <h1 className="text-4xl text-gray-300 font-bold mb-6">
            Our Culture Brand Statement™
          </h1>
          <div className="bg-[#ff9913] text-white p-6 rounded-lg mb-12">
            <p className="text-lg">
              Blackribbit does everything it does because it values reliability,
              compassion, and deliberate action, and wants people to experience
              compassionate design.
            </p>
          </div>
          <p className="text-lg mb-12">
            Every decision we make honors this statement. Every touchpoint
            creates an experience of compassionate design. This is our
            operational framework. This is our way of life.
          </p>

          <div className="mt-16 mb-12 flex items-center justify-center">
            <hr className="w-1/4 border-orange-400" />
            <span className="mx-4 text-orange-500 text-xl">
              <GiSevenPointedStar />
            </span>
            <hr className="w-1/4 border-orange-400" />
          </div>

          {/* Our Customer Experience */}
          <h2 className="text-4xl text-gray-300 font-bold mb-6">
            Our Customer Experience
          </h2>
          <p className="text-lg mb-6">
            Our customers describe their experience as "feeling heard." This
            happens because our methodology surfaces and systematizes what
            already exists within organizations rather than imposing external
            transformation.
          </p>
          <p className="text-lg mb-12">
            When leadership recognizes their own vision reflected in our Culture
            Brand Statement™, adoption becomes natural rather than forced. We
            facilitate organizational evolution through design thinking
            principles rooted in empathy and human experience.
          </p>

          <div className="mt-16 mb-12 flex items-center justify-center">
            <hr className="w-1/4 border-orange-400" />
            <span className="mx-4 text-orange-500 text-2xl">
              <MdGroups2 />
            </span>
            <hr className="w-1/4 border-orange-400" />
          </div>

          {/* Meet the Blackribbit Team */}
          <h2 className="text-4xl text-gray-300 font-bold mb-6">
            Meet the Blackribbit Team
          </h2>
          <p className="text-lg mb-6">
            Our team combines expertise across five disciplines to deliver
            unprecedented organizational transformation. Each member brings
            specialized knowledge in Design, Brand Strategy, Organizational
            Psychology, Operations, or Communications.
          </p>
          <p className="text-lg mb-6">
            Our approach remains reliable, compassionate, and deliberate because
            we understand that lasting change happens through deep listening and
            systematic implementation.
          </p>
        </div>
      </div>


      <section className="bg-[#292929] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Animate row-by-row */}
        <div className="space-y-8">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: rowIndex * 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {row.map((member, index) => (
                <div key={index} className="relative group overflow-hidden rounded">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <h3 className="text-white text-sm font-bold">{member.name}</h3>
                      <p className="text-gray-200 text-xs mt-1">{member.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <div className="bg-[#292929] min-h-screen text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mt-16 mb-12 flex items-center justify-center">
            <hr className="w-1/4 border-gray-400" />
            <span className="mx-4 text-gray-300 text-xl">
              <FaCanadianMapleLeaf />
            </span>
            <hr className="w-1/4 border-gray-400" />
          </div>

          {/* Our Customer Experience */}
          <h2 className="text-4xl text-gray-300 font-bold mb-6">
            Designed for Sustainability
          </h2>
          <p className="text-lg mb-6">
            We embrace digital-first sustainability. Our model minimizes
            environmental impact while maximizing human potential through
            digital deliverables and remote collaboration. This deliberate
            approach supports our vision of a more harmonious future where
            people have space to become better humans.
          </p>

          <div className="mt-16 mb-12 flex items-center justify-center">
            <hr className="w-1/4 border-gray-300" />
            <span className="mx-4 text-gray-300 text-2xl">
              <GiGraduateCap />
            </span>
            <hr className="w-1/4 border-gray-300" />
          </div>
          <h2 className="text-4xl text-gray-300 font-bold mb-6">
            Future Leader Development
          </h2>
          <p className="text-lg mb-6">
            Our internship program redefines entry-level experience by immersing
            college students in director-level responsibilities from day one.
            Interns own strategic initiatives with complete support, working
            directly with our founder and team while earning required credits.
          </p>

          <p>
            This reflects our commitment to developing the next generation of
            leaders who understand that business can serve human flourishing
            rather than extract from it.
          </p>
        </div>
      </div>
      {/* podcast talk part */}

      <section className="relative hidden md:block w-full h-96 overflow-hidden">
        {/* Background Image covering the entire section */}
        <img
          src="https://blackribbit.com/wp-content/uploads/2024/11/nader-microphone_1920x1080.jpg.webp" // <-- Replace with the URL of your combined image
          alt="Frog Talk podcast section"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale"
        />

        {/* Overlay content: text and link */}
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 z-10">
          <h2 className="text-white font-luckiestguy text-5xl font-bold mb-4 tracking-widest uppercase ml-16">
            Frog Talk
          </h2>
          <p className="text-gray-300 text-lg text-left mb-6 max-w-md ml-16">
            Curious how we think about clarity, brand and culture? We talk about
            it here.
          </p>
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg border-b-2 border-yellow-500 pb-1 ml-16"
          >
            Listen Now
          </a>
        </div>

        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      </section>

      {/* Mobile section */}

      <section className="bg-black  block md:hidden p-4 sm:p-6 md:p-8 max-w-sm mx-auto">
        {" "}
        <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
          {" "}
          <div className="w-full h-48 sm:h-56 md:h-64 relative bg-gray-700">
            {" "}
            <img
              src="https://blackribbit.com/wp-content/uploads/2024/11/nader-microphone_1920x1080.jpg.webp" // Replace with the actual URL of your image
              alt="Man speaking into a microphone"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="p-6 sm:p-8 text-center sm:text-left">
            {" "}
            <h2 className="text-white font-luckiestguy text-4xl sm:text-5xl font-bold mb-4 tracking-widest uppercase">
              Frog Talk
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Curious how we think about clarity, brand and culture? We talk
              about it here.
            </p>
            <a
              href="#"
              className="inline-block text-yellow-500 hover:text-yellow-400 font-semibold text-base sm:text-lg border-b-2 border-yellow-500 pb-1"
            >
              Listen Now
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#292929] text-white flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-3xl text-start md:text-4xl font-semibold mb-7">
          Speak With Us
        </h1>
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="space-y-4">
            <h2 className="text-lg text-gray-300 font-medium">
              Blackribbit Culture Branding
            </h2>
            <div className="space-y-1 text-sm text-gray-300">
              <p>📧 info@blackribbit.com</p>
              <p>📞 +1.713.714.8345</p>
              <p>📍 Houston, Texas, USA</p>
            </div>

            <div className="mt-6">
              <img
                src={froggy}
                alt="Frog"
                className="rounded-md shadow-md w-full object-cover"
              />
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-white text-black border border-gray-400 focus:outline-none focus:border-[#f5b301]"
            />
            <input
              type="Number"
              placeholder="Phone"
              className="w-full p-2 rounded bg-white text-black border border-gray-400 focus:outline-none focus:border-[#f5b301]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white text-black border border-gray-400 focus:outline-none focus:border-[#f5b301]"
            />

            <div>
              <label className="block text-sm mb-2">
                Would you like a Rapid Brand Diagnostic?{" "}
                <span className="text-[#ff0000]">*</span>
              </label>
              <div className="space-y-1 text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="diagnostic"
                    className="accent-[#f5b301]"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="diagnostic"
                    className="accent-[#f5b301]"
                  />
                  <span>No</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="diagnostic"
                    className="accent-[#f5b301]"
                  />
                  <span>I don’t know</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">
                How can we help? <span className="text-[#ff0000]">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full p-2 rounded text-black bg-white border border-gray-400 focus:outline-none focus:border-[#f5b301]"
              ></textarea>
            </div>

            <div className=" flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#f5b301] text-black font-medium px-6 py-2 rounded-full hover:bg-[#ffcb2d] transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Culture;
