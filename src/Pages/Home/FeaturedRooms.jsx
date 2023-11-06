/* eslint-disable react/prop-types */
import FeaturedRoomsDetail from "./FeaturedRoomsDetail";

const FeaturedRooms = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">FEATURED ROOMS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 w-full md:w-[770px] lg:w-[1000px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px] ">
        {data?.map((data) => (
          <FeaturedRoomsDetail key={data.id} data={data}></FeaturedRoomsDetail>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
