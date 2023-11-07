import Lottie from "lottie-react";
import animation from '../../Animation - 1699389033345.json';

const Map = () => {
  return (
    <div className="mt-8 ">
      <h2 className="text-5xl font-bold text-center mt-[40px] mb-[40px]">Explore Our Region Here</h2>
      <div className=" mx-auto flex justify-center gap-8 bg-black">
        <div className='w-[500px] h-[500px]'>
        <Lottie animationData={animation} loop={true} />
        </div>
        <div className="mt-[50px]">
          {" "}
          <iframe
            src="https://maps.google.com/maps?q=dhaka&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            style={{ width: "400px", height: "400px", borderRadius:"30px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
