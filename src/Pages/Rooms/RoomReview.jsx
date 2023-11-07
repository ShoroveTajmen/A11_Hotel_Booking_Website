import { useEffect, useState } from "react";

const RoomReview = ({roomReview, setRoomReview}) => {
    // const {userName, comment, date, rating} = review || {};
console.log(roomReview);
   
    return (
        <div className="mb-4">
            {/* <h2>UserName: {userName}</h2>
            <h2>Rating: {rating}</h2>
            <h2>Comment: {comment}</h2>
            <h2>Date: {date}</h2> */}
            <h1>{roomReview.length}</h1>
        </div>
    );
};

export default RoomReview;