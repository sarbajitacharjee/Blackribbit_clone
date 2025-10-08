/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { TfiBarChart } from "react-icons/tfi";
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaTrophy } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RapidDiagnostic = () => {


  const [selectedDate, setSelectedDate] = useState(null);

  const timeSlots = ["12:45am", "1:00am", "1:15am", "1:30am", "1:45am"];
  const availableDates = [13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29];


    const examples = [
    { title: 'Employee Engagement Calculator', image: 'https://blackribbit.com/wp-content/uploads/2025/08/cMRI_calculator-1.jpg' },
    { title: 'LAPD online Diagnostic', image: 'https://blackribbit.com/wp-content/uploads/2025/08/rbd_example_cover-1.jpg' },
    { title: 'Website Scorecard', image: 'https://blackribbit.com/wp-content/uploads/2025/08/website-scorecard-1.jpg' },
  ];

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? examples.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === examples.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <>

    <section className="culture-hero  text-white py-20 px-6 md:px-20 relative">
        <div className="overlay"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-white font-semibold mb-4">
Your 24-Hour Culture Brand Diagnostic
          </h1>

          <div className="flex justify-center items-center max-w-5xl md:px-10 ">
          <BsClockHistory className="text-[#ff9913] hidden md:block text-9xl"/>


          <p className="text-md md:text-2xl md:ml-60 ml-10 leading-relaxed max-w-3xl">
            Get a comprehensive assessment of your culture-brand alignment with specific recommendations for transformation.


          </p>
          </div>
        </div>
      </section>

      

      

      <section className="bg-[#FC9C04] text-white py-12 px-4">
      <div className="max-w-5xl md:px-10 mx-auto">
        <h2 className="text-5xl font-bold text-start mb-12">
          Your Diagnostic Will Include:
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-black">
          {/* Card 1 */}
          <div className="bg-[#FCBB53] p-6 rounded-2xl shadow-md">
            <div className="text-6xl text-white flex justify-center items-center mb-4">
              <TbMoneybag />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-start">
              Financial Impact Analysis
            </h3>
            <p className="text-sm text-start">
              Understanding the monetary implications of any gaps in employee engagement through comprehensive data analysis and benchmarking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FCBB53] p-6 rounded-2xl shadow-md">
            <div className="text-6xl text-white flex justify-center items-center mb-4">
              <BsGlobe />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-start">
              Online Brand Perception
            </h3>
            <p className="text-sm text-start">
              Complete evaluation of your digital presence from social media to reviews and articles, measuring public sentiment and brand consistency.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FCBB53] p-6 rounded-2xl shadow-md">
            <div className="text-6xl text-white flex justify-center items-center mb-4">
              <TfiBarChart />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-start">
              Website Culture-Brand Score
            </h3>
            <p className="text-sm text-start">
              Comprehensive analysis of your website’s messaging and visual design, scored against culture-brand alignment principles.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Examples</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* Full image as background */}
              <img
                src={example.image}
                alt={example.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay with blur */}
              <div className="absolute inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center px-4 text-lg font-semibold">
                  {example.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              <FaTimes />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-10"
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-10"
            >
              <FaChevronRight />
            </button>

            {/* Image Preview */}
            <img
              src={examples[currentIndex].image}
              alt={examples[currentIndex].title}
              className="w-full h-auto max-h-[590px] object-contain mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>

    

    <section className="bg-white text-gray-800 px-6 py-16">

    <div className="mt-1 mb-10 flex items-center justify-center">
          <hr className="w-1/4 border-orange-400" />
          <span className="mx-4 text-orange-500 text-xl">
            <FaTrophy />
          </span>
          <hr className="w-1/4 border-orange-400" />
        </div>
      {/* Top Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-8 text-start">
          This Diagnostic Will Help With:
        </h2>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-[#FC9C04] text-black rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-lg mb-2">Strategic Clarity</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Most companies operate with blind spots about how their internal culture translates to
              external perception. This diagnostic reveals exactly where disconnects exist and what
              they’re costing you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FC9C04] text-black rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-lg mb-2">Financial Impact</h3>
            <p className="text-sm md:text-base leading-relaxed">
              The assessment includes quantified analysis of how culture gaps affect your bottom
              line—from recruitment costs to customer acquisition efficiency.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FC9C04] text-black rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-lg mb-2">Actionable Recommendations</h3>
            <p className="text-sm md:text-base leading-relaxed">
              You receive specific, prioritized steps for closing any gaps we identify, whether
              that’s through our full Culture Branding Program or independent initiatives.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 flex items-center justify-center">
          <hr className="w-1/4 border-orange-400" />
          <span className="mx-4 text-orange-500 text-xl">
            <FaTrophy />
          </span>
          <hr className="w-1/4 border-orange-400" />
        </div>

      {/* How It Works Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-start md:text-3xl font-semibold mb-10 text-gray-700">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  border border-gray-700 rounded-lg p-8">
          {/* Step 1 */}
          <div>
            <div className="w-16 h-16 text-3xl flex items-center justify-center bg-[#FC9C04] text-white rounded-full mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="font-semibold text-2xl mb-2">Schedule & Prepare</h3>
            <p className="text-sm md:text-lg text-gray-600">
              30-minute diagnostic planning session to understand your situation and gather
              necessary access information.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="w-16 h-16 text-3xl flex items-center justify-center bg-[#FC9C04] text-white rounded-full mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="font-semibold text-2xl mb-2">Analysis & Assessment</h3>
            <p className="text-sm md:text-lg text-gray-600">
              Our team conducts comprehensive evaluation across all three diagnostic components
              using proprietary frameworks.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="w-16 h-16 text-3xl flex items-center justify-center bg-[#FC9C04] text-white rounded-full mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="font-semibold text-2xl mb-2">Results & Recs</h3>
            <p className="text-sm md:text-lg text-gray-600">
              In 24 hours, receive your complete diagnostic report with specific recommendations for
              transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 flex items-center justify-center">
          <hr className="w-1/4 border-orange-400" />
          <span className="mx-4 text-orange-500 text-xl">
            <FaTrophy />
          </span>
          <hr className="w-1/4 border-orange-400" />
        </div>
    </section>


   <section className="bg-white text-gray-800 px-6 py-16">
   
      <div className="max-w-5xl mx-auto relative">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-700">
          Begin Your Assessment
        </h2>
        <p className="text-gray-900 mb-10 text-sm md:text-base">
          Ready to understand exactly where your culture and brand align—and where they don’t?
          Schedule your diagnostic planning session and receive your complete assessment in 24
          hours.
        </p>

      
        <div
          className={`bg-white shadow-lg border border-gray-200 rounded-xl p-6 md:p-10 transition-all duration-500 ${
            selectedDate
              ? "md:flex md:flex-row md:items-start md:justify-between"
              : "flex justify-center"
          }`}
        >
          {/* Ribbon */}
          <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-xl">
            Powered by Calendy
          </div>

          {/* Left Calendar */}
          <motion.div
            layout
            className={`${
              selectedDate ? "w-full md:w-1/2" : "w-full max-w-md"
            } transition-all duration-500`}
          >
            <h3 className="text-gray-900 font-semibold mb-4 text-lg text-center md:text-left">
              Select a Date & Time
            </h3>

            {/* Month Header */}
            <div className="flex justify-between items-center mb-4 text-gray-700">
              <button className="text-xl font-semibold hover:text-orange-500">&lt;</button>
              <p className="font-medium">October 2025</p>
              <button className="text-xl font-semibold hover:text-orange-500">&gt;</button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 text-center text-gray-700 mb-4">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <span key={day} className="font-semibold text-xs md:text-sm">
                  {day}
                </span>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-2 text-sm md:text-base">
              {Array.from({ length: 31 }).map((_, i) => {
                const date = i + 1;
                const isAvailable = availableDates.includes(date);
                const isSelected = selectedDate === date;
                return (
                  <button
                    key={date}
                    onClick={() => isAvailable && setSelectedDate(date)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full mx-auto transition-all duration-200 
                      ${
                        isSelected
                          ? "bg-orange-600 text-white scale-110"
                          : isAvailable
                          ? "bg-orange-200 text-orange-700 hover:bg-orange-400 hover:text-white"
                          : "text-gray-400 cursor-default"
                      }`}
                  >
                    {date}
                  </button>
                );
              })}
            </div>

            {/* Timezone */}
            <div className="flex items-center justify-center md:justify-start mt-4 text-sm text-gray-700">
              <FaGlobeAsia className="mr-2 text-orange-500" />
              <span>India Standard Time (3:48pm)</span>
            </div>
          </motion.div>

          {/* Right Side - Time Slots (appears with animation) */}
          <AnimatePresence>
            {selectedDate && (
              <motion.div
                key="times"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="w-full md:w-1/2 mt-8 md:mt-0"
              >
                <h4 className="font-semibold text-gray-900 mb-4 text-center md:text-left">
                  Thursday, October {selectedDate}
                </h4>
                <div className="flex flex-col gap-3">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      className="border border-orange-400 text-orange-500 font-semibold py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 border border-gray-400 rounded-lg p-6 bg-white">
        <h3 className="text-lg md:text-4xl font-semibold mb-2 text-gray-700">
          Important Consideration
        </h3>
        <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
          A minimum of 1-year online presence is required for comprehensive online diagnostic.
          Companies with limited digital presence can still access the full Culture Branding Program
          and cMRI calculator.
        </p>
      </div>
    </section>
  


    </>
  )
}

export default RapidDiagnostic;
