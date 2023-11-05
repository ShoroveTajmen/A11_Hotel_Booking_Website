import axios from "axios";
import { useEffect, useState } from "react";
import AllRoomsData from "./AllRoomsData";


const Rooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);


  const url = "http://localhost:5001/roomData";

  useEffect(() => {
    axios.get(url).then((res) => {
      setAllRooms(res.data);
    });
  }, [url]);

  //filter method
  const filterRoomsByPrice = () => {
    return allRooms.filter(
      (roomData) =>
        roomData.roomPrice >= minPrice && roomData.roomPrice <= maxPrice
    );
  };

  const filteredRooms = filterRoomsByPrice();

  return (
    <div>
      <h2>All available rooms here: {filteredRooms.length}</h2>
      <div>
        <label htmlFor="minPrice">Minimum Price: </label>
        <input
          className="border border-red-600 mb-4"
          type="number"
          id="minPrice"
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Maximum Price: </label>
        <input
          className="border border-red-600"
          type="number"
          id="maxPrice"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5  md:w-[770px] w-[350px] lg:w-[1500px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px] ">
        {filteredRooms.map((roomData) => (
          <AllRoomsData key={roomData._id} roomData={roomData}></AllRoomsData>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
