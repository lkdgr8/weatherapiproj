import React, { useEffect, useState } from 'react'
import  './Weatherapp.css'
import Weathercard from './Weathercard';


function Weatherapp() {
  const [searchval, setSearchval] = useState("mumbai");
  const [tempinfo, setTempinfo] = useState({})

  const search_func =  async () => {
    try{
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=beeb216de43724d83a9fa8de4e19f93c`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: climate } = data.weather[0];
      const { name } = data;
      const { country } = data.sys;
      const { speed } = data.wind; 
      const { dt } = data;
      const { sunset } = data.sys;

      const mynewweatherinfo = {
        temp,
        humidity,
        pressure,
        climate,
        name,
        country,
        speed,
        dt,
        sunset
      };
      setTempinfo(mynewweatherinfo);
    } catch (error) {
     console.log(error);
  }
};
  useEffect(() => {
    search_func();
  }, []);
  return (
    <>
      <form className='myform'>
          <div className='form_elem'>
              <input 
              id="search"
              type="search" 
              value={searchval}
              placeholder='your city'
              autoFocus
              className='searchfield'
              onChange={(e) => setSearchval(e.target.value)}
              />
            <button className='submit_btn' type="button" onClick={search_func}>Submit</button>
          </div>
      </form>
      <Weathercard tempinfo={tempinfo}/>
    </>
  )
}

export default Weatherapp;