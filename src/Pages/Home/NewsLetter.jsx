const NewsLetter = () => {
  return (
    <div>
      <div className="relative w-[1200px] h-[300px] mx-auto bottom-[-130px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/JBqRbyf/frame2.jpg')] bg-cover bg-center bg-no-repeat lg:h-[300px] md:h-[700px] "></div>

        {/* white overlay */}
        <div className="absolute top-0 right-0 md:right-0 lg:right-[0px] bottom-0 left-0 bg-[#B8860B] opacity-90 "></div>
        <div
          className="relative ml-[19px] md:ml-[100px] lg:ml-[40px]"
          data-aos="zoom-in"
        >
          <div className="absolute mt-[180px] md:mt-[140px]  lg:mt-[80px]   lg:ml-[40px] ">
            <div>
              <h2>NEWSLETTER</h2>
              <h1 className=" text-[#FFF8DC] text-2xl md:text-5xl lg:text-6xl font-xl mb-[10px] md:mb-[10px] ">
                Stay In The Know !
              </h1>
            </div>
            <div className="join">
              <input
                className="input join-item"
                placeholder="Your Email Here"
              />
              <button className="btn join-item bg-[#c97d4a] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
