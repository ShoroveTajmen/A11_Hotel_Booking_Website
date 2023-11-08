import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBookingList from "./MyBookingList";
import axios from "axios";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  console.log(userEmail);

  // const loadedRoomBookingsData = useLoaderData();
//   console.log(loadedRoomBookingsData);


//booking data load using useEffect
const [bookigData, setBookingData] = useState([]);
const url = `https://hotel-booking-server-steel.vercel.app/roomBooks?email=${user?.email}`;
useEffect(() => {
  axios.get(url, {withCredentials: true})
  .then(res => {
    setBookingData(res.data);
  })
}, [url]);
console.log(bookigData);



  const [findUserRoom, setFindUserRoom] = useState(bookigData);
  useEffect(() => {
    const getRooms = bookigData.filter(
      (room) => room.userEmail === userEmail
    );
    setFindUserRoom(getRooms);
  }, [bookigData, userEmail]);
console.log(findUserRoom)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  lg:gap-5 w-full md:w-[770px] lg:w-[1400px] mx-auto mt-[70px] md:mt-[70px] mb-[50px] md:mb-[70px]">
        {findUserRoom?.map((room) => (
          <MyBookingList
            key={room._id}
            room={room}
            findUserRoom={findUserRoom}
            setFindUserRoom={setFindUserRoom}
          ></MyBookingList>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;