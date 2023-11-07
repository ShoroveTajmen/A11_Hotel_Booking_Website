import Lottie from "lottie-react";
import animation2 from '../../Animation - 1699389918336.json';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center ">
        <Lottie animationData={animation2} loop={true} />
        <Link to='/'><button className="btn bg-[#c97d4a] text-white">Go Back Home</button></Link>
      </div>
    );
};

export default ErrorPage;