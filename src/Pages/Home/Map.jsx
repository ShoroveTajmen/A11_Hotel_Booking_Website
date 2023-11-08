import Lottie from "lottie-react";
import animation from '../../Animation - 1699389033345.json';

const Map = () => {
  return (
    <div className="mt-8 ">
      <h2 className="text-5xl font-bold text-center mt-[40px] mb-[40px]">Explore Our Region Here</h2>
      <div className=" mx-auto flex flex-col md:flex-row lg:flex-row justify-center gap-2 md:gap-8 lg:gap-8 bg-black h-[800px] md:h-[500px] lg:h-[500px]">
        <div className='w-[350px] ml-[30px] mt-[0px] md:mt-[80px] lg:mt-[0px] mb-[-100px] md:w-[300px] lg:w-[500px] h-[100px] md:h-[500px] lg:h-[500px]'>
        <Lottie animationData={animation} loop={true} />
        </div>
        <div className="mt-[50px]">
          {" "}
          <iframe
          className="w-[400px] h-[400px] p-4 ml-4 mt-[300px] md:mt-[0px] lg:mt-[0px] mb-[50px] rounded-3xl"
            src="https://maps.google.com/maps?q=dhaka&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            // style={{ width: "400px", height: "400px", borderRadius:"30px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
