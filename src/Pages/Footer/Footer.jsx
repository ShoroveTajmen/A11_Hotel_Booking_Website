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
    <div className="bg-[#DCDCDC] h-[1200px] md:h-[600px] lg:h-[500px] text-black">
      {/* footer container div */}
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 ml-[90px] md:ml-[40px] lg:ml-[150px] pt-[100px] ">
        {/* 1st part */}
        <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px] text-gray-600">
          <h1 className="text-3xl font-bold mb-3 md:mb-7 text-black">
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
        <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px] text-gray-600">
          <h1 className="text-3xl font-bold mb-3 md:mb-7 text-black">
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
          <h1 className="text-3xl font-bold mb-3 md:mb-7 text-black">
            PRODUCT TAG
          </h1>
          <div className="flex gap-2 text-gray-600">
            {" "}
            <h1 className="border border-gray-600 p-2">Winter</h1>
            <h1 className="border border-gray-600 p-2">Fashion</h1>
            <h1 className="border border-gray-600 p-2">Bag</h1>
          </div>
          <div className="flex gap-2 mt-2 text-gray-600">
            {" "}
            <h1 className="border border-gray-600 p-2">Denime</h1>
            <h1 className="border border-gray-600 p-2">Summer Style</h1>
            <h1 className="border border-gray-600 p-2">Leather</h1>
          </div>
          <div className="flex gap-2 mt-2 text-gray-600">
            {" "}
            <h1 className="border border-gray-600 p-2">Dress</h1>
            <h1 className="border border-gray-600 p-2">Shoes</h1>
            <h1 className="border border-gray-600 p-2">Cosmetics</h1>
          </div>
        </div>
        {/* 4th part */}
        <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px]">
          <h1 className="text-3xl font-bold mt-8 lg:mt-0 mb-3 md:mb-7 text-black">
            STAY WITH US
          </h1>
          <p className="text-gray-600">
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
        &copy; 2023 Fashion&Apparel. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
