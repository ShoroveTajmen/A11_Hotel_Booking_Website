import axios from "axios";
import { useEffect, useState } from "react";
import AllRoomsData from "./AllRoomsData";
import { Helmet } from "react-helmet";

const Rooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);

  const url = "https://hotel-booking-server-steel.vercel.app/roomData";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Room - Hotel Booking System</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-center mt-[40px]">
        {" "}
        <h2 className="text-2xl font-bold mb-[20px]">
          You Can Filter Room By Price
        </h2>
        <div>
          <label htmlFor="minPrice" className="font-bold text-[#c97d4a]">
            Minimum Price :{" "}
          </label>
          <input
            className="border border-[#c97d4a] mb-4"
            type="number"
            id="minPrice"
            placeholder=" Put Price"
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="maxPrice" className="font-bold text-[#c97d4a]">
            Maximum Price :{" "}
          </label>
          <input
            className="border border-[#c97d4a]"
            type="number"
            id="maxPrice"
            placeholder=" Put Price"
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5  md:w-[770px] w-[350px] lg:w-[1200px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px] ">
        {filteredRooms.map((roomData) => (
          <AllRoomsData key={roomData._id} roomData={roomData}></AllRoomsData>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
