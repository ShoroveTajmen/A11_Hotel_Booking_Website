/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const RoomDetails = ({Rooms}) => {
  // console.log(Rooms);
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
  } = Rooms;
  console.log(availability);

  //for date picker
  const [selectedDate, setSelectedDate] = useState(null);
  //for track available seats
  const [avaiableSeats, setAvailableSeats] = useState(availability);

  const handleRoomBook = (_id) => {
    console.log("clickedd");
    if (availability <= 0) {
      console.log("This is booked for all available dates.");
      return;
    } else {
      //send avaiable seats data to the server
      fetch(`http://localhost:5001/roomData/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire("available seat data update successfully", "success");
          }
        });
    }

    // //send avaiable seats data to the server
    // fetch(`http://localhost:5001/roomData/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({}),
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   if(data. modifiedCount > 0){
    //     Swal.fire('available seat data update successfully', "success");
    //   }
    // })
  };

  return (
    <div>
      <div className="w-[1500px] h-[600px]  mt-10 flex">
        <div className="w-[800px]">
          <div>
            <img className="w-[600px] h-[350px]" src={roomPic} alt="" />
          </div>
          <div className="flex items-center ml-[50px] gap-4 mx-auto mt-6">
            <img className="w-[150px] h-[150px]" src={relatedRoomPic1} alt="" />
            <img className="w-[150px] h-[150px]" src={relatedRoomPic2} alt="" />
            <img className="w-[150px] h-[150px]" src={relatedRoomPic3} alt="" />
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-8">BOOKING</h2>
          <h2>Room Price: {roomPrice}</h2>
          <h2>Available Seats: {availability}</h2>
          <label htmlFor="">Select a booking Date : </label>
          <DatePicker
            className="border border-black"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
          ></DatePicker>{" "}
          <br />
          <button
            onClick={() => handleRoomBook(_id)}
            disabled={availability <= 0}
            className="btn btn-primary mt-3"
          >
            Book AVAILABLE
          </button>
        </div>
      </div>
      <div className="w-[600px] h-[600px] border border-red-600 mt-8">
        <h2 className="text-3xl text-bold">Room Description</h2>
        <h2>{roomDescription}</h2>
        <h2>Room Price: {roomPrice}</h2>
        <h2>Room Size: {roomSize}</h2>
        <h2>Avaiablity: {availability}</h2>
        <h2>Special Offer: {specialOffers}</h2>
      </div>
    </div>
  );
};

export default RoomDetails;
