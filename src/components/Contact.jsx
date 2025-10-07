import froggy from "../assets/froggg.jpg"
const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-semibold mb-7">
          Ready to make decisions 56x faster?
        </h1>
        <p className="text-gray-300 text-lg mb-10">Drop us a line and let's talk.</p>
        <div className="mt-4 border-t-2 border-[#f5b301] w-48 mx-auto relative">
          {/* <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[#f5b801] text-7xl">
            ”
          </span> */}
        </div>
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-lg text-gray-300 font-medium">Blackribbit Culture Branding</h2>
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
              Would you like a Rapid Brand Diagnostic? <span className="text-[#ff0000]">*</span>
            </label>
            <div className="space-y-1 text-sm">
              <label className="flex items-center space-x-2">
                <input type="radio" name="diagnostic" className="accent-[#f5b301]" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="diagnostic" className="accent-[#f5b301]" />
                <span>No</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="diagnostic" className="accent-[#f5b301]" />
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
    </div>
  );
};

export default Contact;
