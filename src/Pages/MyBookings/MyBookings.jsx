import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBookingList from "./MyBookingList";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  console.log(userEmail);

  // const loadedRoomBookingsData = useLoaderData();
//   console.log(loadedRoomBookingsData);


//booking data load using useEffect
const [bookigData, setBookingData] = useState([]);
const url = `http://localhost:5001/roomBooks?email=${user?.email}`;
useEffect(()=>{
  fetch(url, {credentials: 'include'})
  .then(res => res.json())
  .then(data => setBookingData(data))
},[])
console.log(bookigData);



  const [findUserRoom, setFindUserRoom] = useState(bookigData);
  useEffect(() => {
    const getRooms = bookigData.filter(
      (room) => room.userEmail === userEmail
    );
    setFindUserRoom(getRooms);
  }, [bookigData, userEmail]);
//   console.log(findUserRoom);
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