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
      <div className="h-[400px] w-[450px] border mx-auto">
        <div className="relative">
          <Link to={`/roomDetails/${_id}`}>
            <img className="h-[350px] w-[]" src={roomPic} alt="" />
          </Link>
        </div>
        <h2 className="absolute bottom-[600px] bg-white ml-7">
          {roomPrice} TK PerNight
        </h2>
        <h2>{roomDescription}</h2>
      </div>
    </div>
  );
};

export default AllRoomsData;
