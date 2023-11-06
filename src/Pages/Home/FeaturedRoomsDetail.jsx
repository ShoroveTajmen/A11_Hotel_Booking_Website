

const FeaturedRoomsDetail = ({data}) => {
    const {id, room_pic, price, description} = data || {};
    return (
        <div>      
          <div className="ml-[65px] lg:ml-0 w-[300px] bg-base-100 shadow-xl border border-black">
            <figure>
              <img className="w-full h-[200px]" src={room_pic} alt="Product" />
            </figure>
            <div className="card-body">
              <h2 className="text-center uppercase font-bold text-[20px]">{price}</h2>
              <p>{description}</p>
            </div>
          </div>
      </div>
    );
};

export default FeaturedRoomsDetail;