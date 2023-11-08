/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";

const AllRoomsData = ({ roomData }) => {
  // console.log(roomData);
  const {
    _id,
    availability,
    relatedRoomPic1,
    relatedRoomPic2,
    relatedRoomPic3,
    roomDescription,
    roomPic,
    roomPrice,
    roomSize,
    specialOffers,
  } = roomData;

  return (
    <div>
      <div className="h-[500px] w-[350px] mb-[40px] md:mb-[40px] lg:mb-[40px] border border-[#c97d4a] mx-auto">
        <div className="">
          <Link to={`/roomDetails/${_id}`}>
            <img className="h-[300px] w-[350px]" src={roomPic} alt="" />
          </Link>
        </div>
        <div className="text-center mt-[20px]">
          {" "}
          <h2 className="font-bold text-[#c97d4a] text-xl">{roomPrice} TK PerNight</h2>
          <h2 className="text-sm text-gray-600">{roomDescription}</h2>
          <Link to={`/roomDetails/${_id}`}><button className="btn text-white bg-[#c97d4a] mt-12">Book Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllRoomsData;
