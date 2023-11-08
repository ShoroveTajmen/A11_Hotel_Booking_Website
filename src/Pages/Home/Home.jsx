// import axios from "axios";
// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Map from "./Map";
import OfferSection from "./OfferSection";
import NewsLetter from "./NewsLetter";

const Home = () => {
    const data = useLoaderData();
    // const [hotelInfo, setHotelInfo] = useState([]);
    // const url = 'https://hotel-booking-server-steel.vercel.app/trydata';

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
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;