const GetInvolved = () => {
  return (
    <>
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
        <h1 className="text-7xl font-bold text-[#005c7a] mb-8">Get Involved</h1>
        <p className="text-3xl font-bold">Join more than 60,000 hosts who provide emergency housing in times of crisis.</p>
        <div className="flex gap-2 items-center">
          <div className=" p-4 my-8 text-[1.4rem] flex flex-col justify-center items-center">
            <div className="w-[36rem]"> 
            <img src="./outside_home.png" alt="" className=" w-full rounded-xl"/>
            </div>
            <h4 className="font-bold text-[2rem] text-[#005c7a] mb-2">
              Donate each time you host
            </h4>
            <p className="mb-4">
              Give a little every time you hostby donating a percentage of your payout.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded font-medium  hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105">
              Donate now
            </button>
          </div>
          <div className=" p-4 my-8 text-[1.4rem] flex flex-col justify-center items-center">
            <div className="w-[36rem]"> 
            <img src="./making_bed.png" alt="" className="w-full rounded-xl" />
            </div>
            <h4 className="font-bold text-[2rem] text-[#005c7a] mb-2">
              Offer a safe place to stay
          
            </h4>
            <p className="mb-4">
              List your space for people in times of crisis.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded font-medium  hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105">
              Offer your space
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
