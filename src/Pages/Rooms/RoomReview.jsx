import { useEffect, useState } from "react";

const RoomReview = ({review}) => {
const {userName, comment, date, rating} = review || {};
console.log(review);
   
    return (
        <div className="mb-4">
            <h2>UserName: {userName}</h2>
            <h2>Rating: {rating}</h2>
            <h2>Comment: {comment}</h2>
            <h2>Date: {date}</h2>
        </div>
    );
};

export default RoomReview;