export const Footer = () => (
  <>
    <div className="bg-[#004156] mt-8 px-4 py-8 text-white text-[1.2rem] font-medium">
      <div className="flex flex-row mx-20 items-center h-16">
        <div className="w-1/4">Our story</div>
        <div className="w-1/4">Host a stay</div>
        <div className="w-1/4">Hosting support</div>
      </div>
      <div className="flex flex-row mx-20 items-center h-16">
        <div className="w-1/4">Our board</div>
        <div className="w-1/4">Donate to stays</div>
        <div className="w-1/4">Donations support</div>
      </div>
      <div className="flex flex-row mx-20 items-center h-16">
        <div className="w-1/4">Our work</div>
      </div>
    </div>
    <div className="bg-[#005c7a] text-white h-20 px-8 text-[1.1rem] text-center flex justify-between items-center">
      <div>
        <a
          className="font-extrabold text-2xl no-underline text-white"
          href="/homely"
        >
          homely<span className="text-[#61e212]">.org</span>
        </a>
      </div>
      <div>
        Made with <span className="text-red-500">&hearts;</span> by{" "}
        <a
          href="https://linkedin.com/in/rahulkumarpahwa"
          className="text-white underline hover:text-[#61e212]"
        >
          Rahul Kumar
        </a>
      </div>
      <div>
        © 2023 homely.org. All rights reserved.{" "}
        <a href="#" className="text-white underline hover:text-[#61e212] ml-2">
          Privacy Policy
        </a>
      </div>
    </div>
  </>
);
