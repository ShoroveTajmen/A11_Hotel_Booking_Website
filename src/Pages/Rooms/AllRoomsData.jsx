
const AllRoomsData = ({roomData}) => {
    console.log(roomData);
    const {_id, availability, relatedRoomPic1, relatedRoomPic2, relatedRoomPic3, roomDescription, roomPic, roomPrice, roomSize, specialOffers} = roomData;
    return (
        <div>
           <div className="h-[400px] w-[450px] border mx-auto">
            <div className="relative">
                <img className="h-[350px] w-[]" src={roomPic} alt="" />
            </div>
            <h2 className="absolute bottom-[400px] bg-white ml-7">{roomPrice} TK</h2>
            <h2>{roomDescription}</h2>
           </div>
        </div>
    );
};

export default AllRoomsData;