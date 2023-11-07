/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment/moment";
import { useParams } from "react-router-dom";
import RoomReview from "./RoomReview";

const RoomDetails = () => {
  const { _id } = useParams();

  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  // console.log(userEmail);

  //for date picker
  const [selectedDate, setSelectedDate] = useState(null);
  const formattedDate = moment(selectedDate).format("DD/MM/YYYY");

  //for update available seats
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true); //loading state
  const [roomReview, setRoomReview] = useState(null);

  //get specific room review
  useEffect(() => {
    fetch(`http://localhost:5001/roomReview/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoomReview(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);
  console.log(roomReview);

  //loading specific room data
  useEffect(() => {
    fetch(`http://localhost:5001/roomData/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoomData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id, loading]);



  const {
    availability,
    relatedRoomPic1,
    relatedRoomPic2,
    relatedRoomPic3,
    roomDescription,
    roomPic,
    roomPrice,
    roomSize,
    specialOffers,
  } = roomData || {};
  console.log(availability);
  const roomId = _id;
  console.log(roomId);

  const handleRoomBook = (_id) => {
    //seat availability related functionality
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
            setLoading(!loading);
            Swal.fire("available seat data update successfully", "success");
          }
        });
    }

    //send booking related room data object to the server
    // console.log(formattedDate) 
    const bookingsData = {
      roomId,
      roomPrice,
      roomDescription,
      userEmail,
      roomPic,
      selectedDate: formattedDate,
    };
    console.log(bookingsData);

    //now send data to the server
    fetch("http://localhost:5001/roomBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingsData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("room booking data added");
          Swal.fire("Room Booking data added ", "success");
        }
      });
  };

  return (
    <div>
      <div>
        {" "}
        <div className="w-[1500px] h-[600px]  mt-10 flex">
          <div className="w-[800px]">
            <div>
              <img className="w-[600px] h-[350px]" src={roomPic} alt="" />
            </div>
            <div className="flex items-center ml-[50px] gap-4 mx-auto mt-6">
              <img
                className="w-[150px] h-[150px]"
                src={relatedRoomPic1}
                alt=""
              />
              <img
                className="w-[150px] h-[150px]"
                src={relatedRoomPic2}
                alt=""
              />
              <img
                className="w-[150px] h-[150px]"
                src={relatedRoomPic3}
                alt=""
              />
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-4xl font-bold mb-8">BOOKING</h2>
            <h2>{_id}</h2>
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
              className="btn btn-primary mt-3"
              disabled={availability <= 0}
              onClick={() => {
                document.getElementById("my_modal_1").showModal();
                handleRoomBook(_id);
              }}
            >
              BOOKING AVAILABLE
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box text-center">
                <h3 className="font-bold text-lg">Room Price: {roomPrice}</h3>
                <h3 className="font-bold text-lg">
                  Booking Date: {formattedDate}
                </h3>
                <p className="py-2 font-bold text-lg">{roomDescription}</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-primary mr-[150px]">
                      Confirm Booking
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
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
     
    </div>
  );
};

export default RoomDetails;
