/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";

const UpdateBookingDate = () => {
  const roomBookingData = useLoaderData();
  console.log(roomBookingData);
  const { _id, roomDescription, roomPic, roomPrice, userEmail } =
    roomBookingData || {};
 

  //update booking date related state
  const [selectedDate, setSelectedDate] = useState(null);
  const newDate = moment(selectedDate).format("DD/MM/YYYY");
  console.log(newDate)



  //date update functionality
  const handelUpdatedDate = (_id) => {
    console.log(_id);
    const updateDate = {
        _id,
        selectedDate:newDate,
    }
    console.log(updateDate);

    //send new date to the server
    fetch(`http://localhost:5001/roomBooks/${_id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(updateDate),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data. modifiedCount > 0){
            Swal.fire("Date Updated Successfully", "success")
        }
    })
  }

  return (
    <div className="mt-12 mb-12 w-[700px] mx-auto h-[300px]">
      <div>
        <label htmlFor="" className="text-2xl font-bold">Select a new booking date: </label>
        <DatePicker
          className="border border-black text-black"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
        ></DatePicker>
      </div>
      <button onClick={()=>handelUpdatedDate(_id)} className="btn bg-[#c97d4a] text-white border-none ml-[100px] mt-[30px]">Booking Update</button>
    </div>
  );
};

export default UpdateBookingDate;
