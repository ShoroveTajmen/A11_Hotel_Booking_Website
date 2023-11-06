/* eslint-disable react/prop-types */

import moment from "moment";
import Swal from "sweetalert2";

/* eslint-disable no-unused-vars */
const MyBookingList = ({ room, findUserRoom, setFindUserRoom }) => {
  const { _id, roomDescription, roomPrice, selectedDate, userEmail, roomPic } =
    room || {};
  //   console.log(userEmail);

  //tract current date
  const currentDate = moment();
  const formattedDate = moment(selectedDate, "DD/MM/YYYY");
//   console.log(currentDate);
  // Calculate the date before which a booking can be deleted (e.g., one day before the booking date)
  const deleteBeforeBookingDate = formattedDate.clone().subtract(1, "days");
//   console.log(deleteBeforeBookingDate);

  const handleDelete = (_id) => {
    console.log(_id);
    // Check if the current date is before the deleteBeforeDate
    if (currentDate.isBefore(deleteBeforeBookingDate)) {
      console.log("booking can be deleted.");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then(result => {
        if(result.isConfirmed){
            fetch(`http://localhost:5001/roomBooks/${_id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire("Deleted!", "Your product has been deleted.", "success");
                    const remaining = findUserRoom.filter(room => room._id !== _id)
                    setFindUserRoom(remaining)
                }
            })
        }
      })
    } else {
      console.log("Booking cant be deleted.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Booking can not be deleted!",
      });
    }
  };

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
                onClick={() => handleDelete(_id)}
                className="bg-black text-white p-3  font-bold  mt-[50px]"
              >
                Delete Booking
              </button>
              <button className="bg-black text-white p-3  font-bold  mt-[50px]">
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
