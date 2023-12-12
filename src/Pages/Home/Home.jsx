// import axios from "axios";
// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Map from "./Map";
import OfferSection from "./OfferSection";
import NewsLetter from "./NewsLetter";
import { Helmet } from "react-helmet";
import PrivacyPolicy from "./PrivacyPolicy";
import AboutUs from "./AboutUs";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Hotel Booking System</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <FeaturedRooms data={data}></FeaturedRooms>
      <OfferSection></OfferSection>
      <Map></Map>
      <AboutUs></AboutUs>
      <PrivacyPolicy></PrivacyPolicy>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
