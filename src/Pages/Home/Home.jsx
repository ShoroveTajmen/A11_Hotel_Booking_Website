import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

    const [hotelInfo, setHotelInfo] = useState([]);
    const url = 'http://localhost:5001/trydata';

    useEffect(()=> {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setHotelInfo(res.data)
        })
    },[url])

    return (
        <div>
            <h2>this is home page: {hotelInfo.length}</h2>
        </div>
    );
};

export default Home;