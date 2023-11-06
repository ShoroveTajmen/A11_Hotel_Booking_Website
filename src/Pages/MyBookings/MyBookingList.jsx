const MyBookingList = ({ room, findUserRoom, setFindUserRoom }) => {
  const { _id, roomDescription, roomPrice, selectedDate, userEmail, roomPic } =
    room || {};
  console.log(userEmail);

  return (
    <div>
      <div>
        <div className="w-[350px] h-[550px] border border-black lg:ml-0 ml-[40px]">
          <figure>
            <img
              className="w-[200px] h-[200px] ml-[50px] mt-[20px]"
              src={roomPic}
              alt="Shoes"
            />
          </figure>
          <div className="mt-8 ml-[50px] space-y-5">
            <div className="space-y-3 font-bold">
              <h2 className="">Room Price: {roomPrice}</h2>
              <h2>Booking Date: {selectedDate}</h2>
              <p>{roomDescription}</p>
            </div>
            <div className="flex text-sm gap-2">
              <button
                className="bg-black text-white p-3  font-bold  mt-[50px]"
              >
                Delete Booking
              </button>
              <button
                className="bg-black text-white p-3  font-bold  mt-[50px]"
              >
                Update Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingList;
