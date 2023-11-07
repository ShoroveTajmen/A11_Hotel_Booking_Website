import Lottie from "lottie-react";
import animation from '../../Animation - 1699389033345.json';

const Map = () => {
  return (
    <div className="mt-8">
      <div className=" mx-auto border border-red-700 flex justify-center gap-8">
        <div className='w-[500px] h-[500px]'>
        <Lottie animationData={animation} loop={true} />
        </div>
        <div className="">
          {" "}
          <iframe
            src="https://maps.google.com/maps?q=dhaka&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            style={{ width: "500px", height: "500px", borderRadius:"30px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
