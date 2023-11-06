/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const RoomDetails = ({ Rooms }) => {
  console.log(Rooms);
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

  //for date picker
  const [selectedDate, setSelectedDate] = useState(null);
  //state for check booked dates
  const [bookedDates, setBookedDates] = useState([]);
  //for booking summary
  const [bookingStatus, setBookingStatus] = useState('');
  //track avaialbel seats
  const [availableSeats, setAvailableSeats] = useState(availability);


  const handleBookNow = () => {
    if(!selectedDate) {
        setSelectedDate('please select a date for booking');
        return;
    }
    if(availableSeats <= 0){
        setBookingStatus('this room is fully booked for all available dates.')
    }
  }



  return (
    <div>
      <div className="w-[1500px] h-[600px] border border-red-600 mt-10 flex">
        <div className="w-[800px] border border-blue-700">
          <div>
            <img className="w-[600px] h-[350px]" src={roomPic} alt="" />
          </div>
          <div className="flex items-center ml-[50px] gap-4 mx-auto mt-6">
            <img className="w-[150px] h-[150px]" src={relatedRoomPic1} alt="" />
            <img className="w-[150px] h-[150px]" src={relatedRoomPic2} alt="" />
            <img className="w-[150px] h-[150px]" src={relatedRoomPic3} alt="" />
          </div>
        </div>
        <div className='p-6'>
            <h2 className="text-4xl font-bold mb-8">BOOKING</h2>
            <h2>Room Price: {roomPrice}</h2>
            <h2>Available Seats: {availability}</h2>
            <label htmlFor="">Select a booking Date : </label>
            <DatePicker className='border border-black' selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat='dd/MM/yyyy'></DatePicker> <br />
            <button onClick={handleBookNow} className='btn btn-primary mt-3'>Book Now</button>
            
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
