import axios from "axios";
import { useEffect, useState } from "react";
import AllRoomsData from "./AllRoomsData";

const Rooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const url = "http://localhost:5001/roomData";

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setAllRooms(res.data);
    });
  }, [url]);

  return (
    <div>
      <h2>all available rooms here: {allRooms.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5  md:w-[770px] w-[350px] lg:w-[1500px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px] ">
        {
            allRooms.map(roomData => <AllRoomsData key={roomData._id} roomData={roomData}></AllRoomsData>)
        }

      </div>
    </div>
  );
};

export default Rooms;
