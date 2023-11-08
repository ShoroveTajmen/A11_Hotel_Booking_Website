import { Link } from "react-router-dom";


const FeaturedRoomsDetail = ({data}) => {
    const {id, room_pic, price, description} = data || {};
    return (
        <div>      
          <div className="md:ml-[35px] ml-[60px] lg:ml-0 w-[300px] h-[450px] bg-base-100 shadow-xl border border-[#c97d4a]">
            <figure>
              <img className="w-full h-[200px]" src={room_pic} alt="Product" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center uppercase font-bold text-[20px]"><span className="text-[#c97d4a]">Room Price : </span>{price} TK</h2>
              <p className="text-sm text-gray-500">{description}</p>
              <Link to='/rooms'><button className="btn text-white bg-[#c97d4a]">Book Now</button></Link>
            </div>
          </div>
      </div>
    );
};

export default FeaturedRoomsDetail;