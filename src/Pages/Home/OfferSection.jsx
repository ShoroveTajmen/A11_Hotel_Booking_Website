const OfferSection = () => {
  return (
    <div>
      <div className="relative w-full h-[500px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/2gZLBZs/room5.jpg')] bg-cover bg-center bg-no-repeat lg:h-[500px] md:h-[700px]"></div>

        {/* white overlay */}
        <div className="absolute top-0 right-0 md:right-0 lg:right-[600px] bottom-0 left-0 bg-black opacity-50 rounded-r-[250px]"></div>
        <div className="absolute top-0 right-0 md:right-0 lg:right-[540px] bottom-0 left-0 bg-black opacity-30 rounded-r-[250px]"></div>
        <div className="absolute top-0 right-0 md:right-0 lg:right-[650px] bottom-0 left-0 bg-black opacity-30 rounded-r-[250px]"></div>
        <div className="absolute top-0 right-0 md:right-0 lg:right-[0px] bottom-0 left-0 bg-black opacity-10 "></div>


        <div
          className="relative ml-[19px] md:ml-[100px] lg:ml-[40px]"
          data-aos="zoom-in"
        >
          <div className="absolute mt-[180px] md:mt-[140px]  lg:mt-[80px] w-[650px] mx-auto lg:ml-[40px]  ">
          <h2 className="text-[#B8860B] text-sm mb-8">GRAP YOUR SPECIAL OFFER...</h2>
            <h1 className=" text-[#F5DEB3] text-2xl md:text-5xl lg:text-6xl font-xl mb-[10px] md:mb-[10px] ">
              STAY 3 !
            </h1>
            <h1 className=" text-white text-5xl md:text-5xl lg:text-6xl font-xl mb-[10px] ">PAY 2</h1>
            <h2 className="text-[#B8860B] text-sm">STARTS FROM</h2>
            <h1 className=" text-white text-5xl md:text-5xl lg:text-6xl font-xl mb-[10px] md:mb-[20px] ">3000 TK</h1>
            <h2 className="text-white">Book your dream getaway now and enjoy exclusive savings on our luxurious hotel rooms. Don't miss this limited-time offer for an unforgettable stay   <span className="font-bold text-[#c97d4a]">!!</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
