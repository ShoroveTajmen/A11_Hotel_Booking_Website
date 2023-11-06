import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaPinterest,
  FaGooglePlusG,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-black h-[1200px] md:h-[600px] lg:h-[600px] text-white pt-[100px]">
        {/* footer container div */}
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 ml-[90px] md:ml-[40px] lg:ml-[150px] pt-[100px] ">
          {/* 1st part */}
          <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px] ">
            <h1 className="text-3xl font-bold mb-3 md:mb-7 text-[#c97d4a]">
              INFORMATION
            </h1>
            <h1 className="">About us</h1>
            <h1 className="mt-2">Customer Service</h1>
            <h1 className="mt-2">Manufactures</h1>
            <h1 className="mt-2">Privacy Policy</h1>
            <h1 className="mt-2">Terms & Condition</h1>
            <h1 className="mt-2 mb-8 lg:mb-0">Blog</h1>
          </div>
          {/* 2nd part */}
          <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px] text-white">
            <h1 className="text-3xl font-bold mb-3 md:mb-7 text-[#c97d4a]">
              MY ACCOUNT
            </h1>
            <p>My Account</p>
            <h1 className="mt-2">Login</h1>
            <h1 className="mt-2">Order History</h1>
            <h1 className="mt-2">Wish List</h1>
            <h1 className="mt-2">View Cart</h1>
            <h1 className="mt-2 mb-8 lg:mb-0">Latest Post</h1>
          </div>
          {/* 3rd part */}
          <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px]">
            <h1 className="text-3xl font-bold mb-3 md:mb-7 text-[#c97d4a]">
              ROOMS TYPE
            </h1>
            <div className="flex gap-2 ">
              {" "}
              <h1 className="border border-gray-600 p-2">Presidential Suite</h1>
              <h1 className="border border-gray-600 p-2">Royal Penthouse</h1>
              <h1 className="border border-gray-600 p-2">Executive Villa</h1>
            </div>
            <div className="flex gap-2 mt-2 ">
              {" "}
              <h1 className="border border-gray-600 p-2">Oceanfront Deluxe</h1>
              <h1 className="border border-gray-600 p-2">Luxury Spa Retreat</h1>
              <h1 className="border border-gray-600 p-2">Garden View Chalet</h1>
            </div>
          </div>
          {/* 4th part */}
          <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px]">
            <h1 className="text-3xl font-bold mt-8 lg:mt-0 mb-3 md:mb-7 text-[#c97d4a]">
              STAY WITH US
            </h1>
            <p className="">
              Fashion and apparel encompass the art of self-expression through
              clothing, enabling individuals to convey their unique style and
              personality to the world.
            </p>
            <div className="flex gap-3 mt-5">
              {" "}
              <h1>
                <FaFacebook></FaFacebook>
              </h1>
              <h1>
                <FaTwitterSquare></FaTwitterSquare>
              </h1>
              <h1>
                <FaLinkedin></FaLinkedin>
              </h1>
              <h1>
                <FaPinterest></FaPinterest>
              </h1>
              <h1>
                <FaGooglePlusG></FaGooglePlusG>
              </h1>
              <h1>
                <FaInstagramSquare></FaInstagramSquare>
              </h1>
            </div>
          </div>
        </div>
        <h1 className="mt-[100px] text-center font-semibold">
          &copy; 2023 Online Hotel Booking. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
