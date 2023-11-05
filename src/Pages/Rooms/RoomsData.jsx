import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RoomDetails from "./RoomDetails";

const RoomsData = () => {
    const [Rooms, setRooms] = useState({});

    //room data load fromdatabase
    const roomsData = useLoaderData();
    // console.log(roomsData);

    //get specific room id'
    const {_id} = useParams();
    // console.log(_id);

    useEffect(()=> {
        const getRoom = roomsData?.find(room => room._id === _id)
        setRooms(getRoom)
    },[_id, roomsData])
    // console.log(Rooms);

    return (
        <div>
            <RoomDetails Rooms={Rooms}></RoomDetails>
        </div>
    );
};

export default RoomsData;