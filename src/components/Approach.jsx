import { useState, useEffect } from "react";

import leftimage from "../assets/leftimage.jpg";
import diagram from "../assets/diagram.svg";
import { FaTrophy } from "react-icons/fa6";
import froggy from "../assets/froggg.jpg";

const fields = [
  {
    title: "Design",
    description: "Human-centered problem solving",
  },
  {
    title: "Brand Strategy",
    description: "Market positioning and differentiation",
  },
  {
    title: "Organizational Psychology",
    description: "How people function in groups",
  },
  {
    title: "Operations",
    description: "How systems actually work",
  },
  {
    title: "Communications",
    description: "How meaning gets transmitted",
  },
];

const slides = [
  {
    id: 1,
    image:
      "https://blackribbit.com/wp-content/uploads/2024/03/clutch_LP_portfolio_2.jpg.webp",
    caption: "Empowering the individual together",
  },
  {
    id: 2,
    image:
      "https://blackribbit.com/wp-content/uploads/2024/03/clutch_LP_portfolio_1.jpg.webp",
    caption: "Shackleton Research Trust",
  },
  {
    id: 3,
    image:
      "https://blackribbit.com/wp-content/uploads/2024/03/clutch_LP_portfolio_3.jpg.webp",
    caption: "Transforming your digital future",
  },
];

const stats = [
  { number: 16, label: "Weeks for complete delivery" },
  { number: 5, label: "Disciplines working simultaneously" },
  { number: 41, label: "Success metrics tracked" },
];

const steps = [
  {
    step: 1,
    title: "Evaluate — Comprehensive Reality Assessment",
    description:
      "We measure the complete organizational ecosystem through integrated analysis including employee engagement data connected to transformation locations, leadership dynamics, customer experience mapping, and total employee ecosystem analysis.",
  },
  {
    step: 2,
    title: "Strategize — Dual-Strategy Development",
    description:
      "We create your organizational DNA through one vision statement, two mission statements serving customer and employee value propositions, and one Culture Brand Statement™ that unifies everything.",
  },
  {
    step: 3,
    title: "Design — Integrated System Creation",
    description:
      "We build frameworks that express your Culture Brand Statement™ across every organizational touch point, from visual identity to communication frameworks to operational processes.",
  },
  {
    step: 4,
    title: "Activate — AI-Powered Implementation",
    description:
      "We deploy your Culture Brand Filter™—an AI-powered decision-making system that provides real-time guidance for consistent application across your entire organization.",
  },
  {
    step: 5,
    title: "Evolve — Unconscious Adoption",
    description:
      "Through learning by doing, your team internalizes the Culture Brand Filter™ until they embody your brand inherently, operating through the lens of your culture brand naturally without external tools.",
  },
];

const CultureBranding = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect;
  // Auto-play every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % length);
  //   }, 500000);
  //   return () => clearInterval(interval);
  // }, [length]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

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
            every experience—{" "}
            <span className="text-[#ff9913]">
              {" "}
              turning every touch point into an emotional contract{" "}
            </span>{" "}
            designed with empathy.
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
              <b>
                {" "}
                Culture branding puts humanity first and designs every
                interaction as an emotional contract.
              </b>{" "}
              When people feel every moment is designed with them in
              mind—whether they’re buying or working—they won’t want to go
              anywhere else.
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
              <h3 className="font-semibold mb-2">Inside // Company Purpose</h3>
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
        <img
          src={diagram}
          width={1200}
          className="mt-10 bg-white rounded-3xl"
          alt="big diagram"
        />
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 py-10">
        <div className="relative h-32 md:h-60 rounded-lg overflow-hidden shadow-md">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm md:text-lg px-4 py-2 rounded"></div>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
              >
                &#8592;
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
              >
                &#8594;
              </button>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-[-20px] space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-black scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>

      <section className="bg-white text-gray-800">
        {/* Foundation Content */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto ">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              The Five-Field Foundation
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Culture branding exists at the intersection of five major
              disciplines:
            </p>

            {/* Fields Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className="bg-[#FF9900] text-white p-6 rounded-lg shadow text-center"
                >
                  <h3 className="font-bold text-black text-lg">
                    {field.title}
                  </h3>
                  <p className="mt-2 text-black text-sm">{field.description}</p>
                </div>
              ))}
            </div>

            {/* Footer Text */}
            <p className="mt-10 text-md text-gray-600  ">
              Most consultants operate in one field. Culture branding
              synthesizes all five into a unified methodology for organizational
              transformation.
            </p>

            {/* Decorative Line + Icon */}
            <div className="mt-6 flex items-center justify-center">
              <hr className="w-1/4 border-orange-400" />

              <span className="mx-4 text-orange-500 text-xl">
                <FaTrophy />
              </span>
              <hr className="w-1/4 border-orange-400" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-16 px-4">
        {/* Title & Description */}
        <div className="max-w-5xl mx-auto  mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            16-Week Transformation System
          </h2>
          <p className="text-sm text-gray-600">
            What typically takes organizations 6–12 months to develop, we
            deliver in 16 weeks.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto border border-gray-300 grid grid-cols-1 md:grid-cols-3  text-center  text-gray-900 mb-6">
          {stats.map((item, index) => (
            <div key={index} className="p-6">
              <div className="text-9xl font-bold mb-2">{item.number}</div>
              <div className="text-md">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Sub-description */}
        <div className="max-w-5xl mx-auto text-md font-600 text-gray-600  mb-10">
          This unique speed comes from our multidisciplinary design-thinking
          approach—five fields working simultaneously rather than sequentially,
          creating comprehensive transformation at the pace of human insight.
        </div>

        {/* How Transformation Happens */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            How Transformation Happens
          </h3>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.step} className="flex items-start space-x-4">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 hidden md:flex w-10 h-10 bg-[#FF9900] text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>

                {/* Step Content */}
                <div className="bg-[#FF9900] text-white rounded-lg p-4 flex-1">
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-16 flex items-center justify-center">
          <hr className="w-1/4 border-orange-400" />
          <span className="mx-4 text-orange-500 text-xl">
            <FaTrophy />
          </span>
          <hr className="w-1/4 border-orange-400" />
        </div>
      </section>


      {/* Started  */}

      <section className="min-h-screen bg-white text-gray-800 p-8 sm:p-12 font-sans">
      {/* Section 1: Header - "What You Receive in 16 Weeks" */}
      <section className="max-w-6xl mx-auto  mb-10 ">
        <h1 className="text-4xl sm:text-4xl font-light text-gray-900 leading-tight">
          What You Receive in <span className="font-semibold">16 Weeks</span>
        </h1>
      </section>

      {/* Section 2: Benefits Grid */}
      <section className="grid md:grid-cols-2 max-w-6xl mx-auto mb-16">
        {/* Quadrant 1: Analysis & Strategy */}
        <div className="border border-gray-700 p-6 sm:p-8  shadow-sm bg-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            Analysis & Strategy
          </h2>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Comprehensive situation analysis and brand evaluation
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Complete dual culture brand strategy (18 components)
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Culture Brand Statement™ and Filter™
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Customer and Employee profiles with segmentation
            </li>
          </ul>
        </div>

        {/* Quadrant 2: Communications & Tools */}
        <div className="border border-gray-700 p-6 sm:p-8  shadow-sm bg-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            Communications & Tools
          </h2>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Full messaging and communications framework
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Culture Brand Playback with templates
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Scenario, building and roleplay guidance
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Internal and external communication frameworks
            </li>
          </ul>
        </div>

        
        {/* Quadrant 3: Visual Identity & Digital */}
        <div className="border border-gray-700 p-6 sm:p-8 mt-4 shadow-sm bg-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            Visual Identity & Digital
          </h2>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Complete visual identity system
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Fully functional market-facing website
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Comprehensive style guides and templates
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Social media and corporate communication tools
            </li>
          </ul>
        </div>

        {/* Quadrant 4: Activation & Support */}
        <div className="border border-gray-700 p-6 sm:p-8 mt-4 shadow-sm bg-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            Activation & Support
          </h2>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> 3, 6, and 12-month activation plans
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Leadership and employee training schedules
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> KPI dashboard with 41 success metrics
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">&#x2713;</span> Employee and Go-To-Market activation strategy
            </li>
          </ul>
        </div>
      </section>
      
      <div className="mt-16 mb-20 flex items-center justify-center">
          <hr className="w-1/4 border-orange-400" />
          <span className="mx-4 text-orange-500 text-xl">
            <FaTrophy />
          </span>
          <hr className="w-1/4 border-orange-400" />
        </div>


      {/* Section 3: Metrics Header - "Culture Branding Program Metrics" */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 mb-8 text-center sm:text-left">
          Culture Branding Program Metrics
        </h2>

        {/* Section 4: Metrics Display */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 bg-white border border-gray-900  p-6 sm:p-8 shadow-sm">
          {/* Metric 1 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-5xl sm:text-7xl font-bold text-gray-900 mb-2">96%</p>
            <p className="text-sm sm:text-base text-gray-600">increased customer loyalty</p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-5xl sm:text-7xl font-bold text-gray-900 mb-2">56x</p>
            <p className="text-sm sm:text-base text-gray-600">faster decision-making</p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-5xl sm:text-7xl font-bold text-gray-900 mb-2">$2m</p>
            <p className="text-sm sm:text-base text-gray-600">saved in team retention</p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-5xl sm:text-7xl font-bold text-gray-900 mb-2">43%</p>
            <p className="text-sm sm:text-base text-gray-600">drop in hiring costs</p>
          </div>
        </div>
      </section>

    </section>

      <section className="culture-hero  text-white py-20 px-6 md:px-20 relative">
        <div className="overlay"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-white font-semibold mb-4">
            The Human Element
          </h1>
          <p className="text-md md:text-2xl md:ml-60 ml-10 leading-relaxed max-w-3xl">
            Technology accelerates capability,{" "}
            <span className="text-[#ff9913]">but humans drive adoption. </span>
            Blackribbit’s Culture Brand Filter™ provides AI-powered guidance,
            but its effectiveness depends entirely on human buy-in. Our
            methodology creates immediate belief because the strategy emerges
            from the organization’s existing purpose and values.
            <br />
            <br />
            <span className="text-[#ff9913]">
              When people recognize their own vision reflected in the Culture
              Brand Statement, adoption becomes natural rather than forced.
            </span>
          </p>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-16 px-4 md:px-16 lg:px-32">
        {/* Centered trophy with lines */}
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/4 border-orange-400 hidden sm:block" />
          <span className="mx-4 text-orange-500 text-2xl sm:text-3xl">
            <FaTrophy />
          </span>
          <hr className="w-1/4 border-orange-400 hidden sm:block" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-start space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Begin Your Transformation
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            The most effective starting point is understanding your current
            reality.
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Our 24-Hour Rapid Brand Diagnostic provides comprehensive assessment
            of your culture-brand alignment in which we identify and specify
            recommendations for transformation. Our diagnostic includes:
          </p>

          <ul className="list-disc list-inside text-start sm:text-left max-w-xl  space-y-2 text-gray-700">
            <li>Financial implications of any gaps in employee engagement</li>
            <li>
              Online brand perception from social media to reviews and articles
            </li>
            <li>
              Website culture-brand score including messaging and visual design
            </li>
          </ul>

          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-[#ff9913] text-white rounded-2xl text-base sm:text-lg hover:bg-orange-500 transition-colors duration-300"
          >
            Learn More and Book
          </a>
        </div>
      </section>

      <section className="min-h-screen bg-[#1f1f1f] text-white flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-3xl items-start md:text-4xl font-semibold mb-7">
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
    </div>
  );
};

export default CultureBranding;
