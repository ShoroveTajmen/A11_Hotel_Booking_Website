

const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[700px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/kM4M4x2/banner2.jpg')] bg-cover bg-center bg-no-repeat h-[700px] md:h-[700px]"></div>
        {/* white overlay */}
        <div className="absolute top-0 right-0 md:right-0 lg:right-0 bottom-0 left-0 bg-black opacity-70 "></div>
        <div
          className="relative ml-[19px] md:ml-[100px] lg:ml-[40px]"
          data-aos="zoom-in"
        >
          <div className="absolute mt-[180px] md:mt-[140px]  lg:mt-[250px] w-[650px] mx-auto ml-[440px] text-center ">
            <h1 className=" text-white text-5xl md:text-5xl lg:text-4xl font-xl mb-[10px] md:mb-[20px]">
            Luxury, redefined extraordinary !
            </h1>
            <img className="w-[500px] h-[30px] ml-[80px]" src="https://i.ibb.co/9gzjfpy/line2.jpg" alt="" />
            <p className="text-sm md:text-xl lg:text-sm font-semibold mb-[10px] md:mb-[20px] mt-[10px] text-[#FAF0E6]">
            Indulge in the epitome of sophistication and comfort at our luxury hotel, where every detail is meticulously crafted to ensure an unforgettable and opulent experience.
            </p>
            <button className="btn bg-[#FAF0E6]">BOOK ROOM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
