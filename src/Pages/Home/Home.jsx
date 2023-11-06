// import axios from "axios";
// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Map from "./Map";
import OfferSection from "./OfferSection";

const Home = () => {
    const data = useLoaderData();
    // const [hotelInfo, setHotelInfo] = useState([]);
    // const url = 'http://localhost:5001/trydata';

    // useEffect(()=> {
    //     axios.get(url, {withCredentials: true})
    //     .then(res => {
    //         setHotelInfo(res.data)
    //     })
    // },[url])

    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms data={data}></FeaturedRooms>
            <OfferSection></OfferSection>
            <Map></Map>

        </div>
    );
};

export default Home;