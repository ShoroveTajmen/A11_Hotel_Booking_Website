// import axios from "axios";
// import { useEffect, useState } from "react";

import Banner from "./Banner";
import OfferSection from "./OfferSection";

const Home = () => {

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
            <OfferSection></OfferSection>

        </div>
    );
};

export default Home;