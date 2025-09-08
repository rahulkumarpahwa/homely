export const Navbar = () => (
  <nav className="flex flex-row mx-20 mt-3 items-center">
    <a
      className="font-extrabold text-2xl text-[#005c7a] no-underline mr-8"
      href="/homely"
    >
      homely<span className="text-[#61e212]">.org</span>
    </a>
    <div className="flex flex-row ml-auto space-x-8 items-center text-[1.5rem] font-medium">
      <a
        className="text-black hover:text-[#005c7a]"
        href="/homely/get-involved"
      >
        Get involved
      </a>
      <a className="text-black hover:text-[#005c7a]" href="/homely/about">
        Who we are
      </a>
      <a
        className="bg-black text-white px-4 py-2 rounded font-medium text-[1.5rem] hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105"
        href="/homely/donate"
      >
        Donate
      </a>
    </div>
  </nav>
);
