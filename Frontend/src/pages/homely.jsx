const Homely = () => {
  return (
    <>
      <h1 className="mt-32 text-center text-[10rem] text-[#005c7a] font-bold py-12">
        Opening homes in times of crisis
      </h1>
      <img
        src="https://res.cloudinary.com/dwtcjjxwc/image/upload/v1702025115/pic0_hb6pwl.jpg"
        alt="banner"
        className="block mx-auto w-[70%] mb-8 rounded-lg shadow-lg"
      />
      <div className="bg-[#005c7a] flex items-center justify-center mb-16 py-16">
        <div className="w-[70%] text-5xl text-white">
          We partner with our community to offer housing in emergencies, from
          natural disasters to large-scale conflicts.
          <div className="mt-8">
            <a
              href="/about"
              className="text-white underline text-2xl hover:text-[#61e212]"
            >
              Learn more about us
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-start">
        <div className="text-[6rem] leading-[7rem] font-bold text-[#005c7a]">
          How can <br /> you help?
        </div>
        <div className="flex flex-col self-center">
          <div className="h-80 p-8 border-4 border-[#005c7a] my-8 text-[1.6rem] flex flex-col justify-center items-start">
            <h4 className="font-bold text-[1.75rem] text-[#005c7a] mb-2">
              I can donate
            </h4>
            <p className="mb-4">
              In times of crisis, your donation helps people find a <br /> place
              to call home.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded font-medium text-[1.5rem] hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105">
              Donate now
            </button>
          </div>
          <div className="h-80 p-8 border-4 border-[#005c7a] my-8 text-[1.6rem] flex flex-col justify-center items-start">
            <h4 className="font-bold text-[1.75rem] text-[#005c7a] mb-2">
              I can host
            </h4>
            <p className="mb-4">
              Join over 1,00,000 hosts and give people a free place to <br />
              stay when they need it most.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded font-medium text-[1.5rem] hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105">
              Offer your space
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homely;
