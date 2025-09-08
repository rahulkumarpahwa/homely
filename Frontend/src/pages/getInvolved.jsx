import React from "react";
const GetInvolved = () => {
  return (
    <>
      <Navbar />
      {/* Add your get involved page content here, styled with Tailwind to match the original */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
        <h1 className="text-5xl font-bold text-[#005c7a] mb-8">Get Involved</h1>
        {/* Add more content as per getInvolved.ejs */}
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
