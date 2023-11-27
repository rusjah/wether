import axios from 'axios';
import React from 'react'

function Form({setWether}) {
  const KEY = process.env.REACT_APP_API_KEY;
  
  const submitHandler = (e) => {
    e.preventDefault();
    const wetherData = {}
    const city = e.target.city.value;
    e.target.city.value = '';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
        .then(res => {
            console.log('res', res);
          wetherData.icon = res.data.weather[0].icon;
          // wetherData.main = res.data.weather[0].main;
          wetherData.descrp = res.data.weather[0].description;
          wetherData.temp =  res.data.main.temp + "°C";  
          wetherData.feel = "Feels as " + res.data.main.feels_like;
          wetherData.city = res.data.name;
        
          setWether(i => wetherData)
        })
        .catch(err => console.log(err));
  }

  return (
    <form className='join' onSubmit={submitHandler}>
        <input type="text" name="city" id='city' className="input input-bordered join-item" placeholder="City"/>
        <button className="btn join-item rounded-r-full" type='submit'>Show wether</button>
    </form>
  )
}

export default Form