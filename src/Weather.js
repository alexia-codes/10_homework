import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
    }
    let apiKey = "cf96ae07a91844c140556e9c95593114";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return ( < Loader type = "Puff"
        color = "orange"
        height = { 100 }
        width = { 100 }
        timeout = { 3000 } //3 secs

        />
    );
}