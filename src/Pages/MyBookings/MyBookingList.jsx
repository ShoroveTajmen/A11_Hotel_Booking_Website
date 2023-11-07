/* eslint-disable react/prop-types */
import moment from "moment";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const MyBookingList = ({ room, findUserRoom, setFindUserRoom }) => {
  const {
    _id,
    roomDescription,
    roomPrice,
    selectedDate,
    userEmail,
    roomPic,
    roomId,
  } = room || {};
  //console.log(userEmail);
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  // console.log(user.displayName)

  //tract current date
  const currentDate = moment();
  const formattedDate = moment(selectedDate, "DD/MM/YYYY");
  //console.log(currentDate);
  // Calculate the date before which a booking can be deleted (e.g., one day before the booking date)
  const deleteBeforeBookingDate = formattedDate.clone().subtract(1, "days");
  //console.log(deleteBeforeBookingDate);

  //booking delete function
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
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5001/roomBooks/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your product has been deleted.",
                  "success"
                );
                const remaining = findUserRoom.filter(
                  (room) => room._id !== _id
                );
                setFindUserRoom(remaining);
              }
            });
        }
      });
    } else {
      console.log("Booking cant be deleted.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Booking can not be deleted!",
      });
    }
  };

  //room review function
  const handleRoomReview = (e) => {
    e.preventDefault();
    // const roomId = _id;
    // console.log(roomId);

    const form = e.target;

    const rating = form.rating.value;
    const comment = form.comment.value;
    const date = form.date.value;
    console.log(rating, comment, date);

    const review = {
      userName,
      rating,
      comment,
      date,
      roomId,
    };
    console.log(review);

    //send roomReview data to the server
    fetch("http://localhost:5001/roomReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Review Added Successful", "success");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div>
        <div className="w-[350px] h-[700px] border border-black lg:ml-0 ml-[40px]">
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
              <Link to={`/updateDate/${_id}`}>
                <button className="bg-black text-white p-3  font-bold  mt-[50px]">
                  Update Date
                </button>
              </Link>
            </div>
            <div className="w-[200px]">
              <h2>Added Room Review:</h2>
              <div className="bg-[#DCDCDC] ">
                <form onSubmit={handleRoomReview} className="space-y-1 p-2">
                  {/*  rating row */}
                  <div className="form-control">
                    <input
                      type="number"
                      name="rating"
                      placeholder="Rating"
                      className="input border border-black input-xs w-full max-w-xs"
                    />
                  </div>
                  {/* comment row */}
                  <div className="form-control">
                    <input
                      type="text"
                      name="comment"
                      placeholder="Put a cooment"
                      className="input border border-black input-xs w-full max-w-xs"
                    />
                  </div>
                  {/* timestamp */}
                  <div className="form-control">
                    <input
                      type="date"
                      name="date"
                      placeholder="Put a cooment"
                      className="input border border-black input-xs w-full max-w-xs"
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit Review"
                    className=" btn btn-xs bg-black text-white"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingList;
