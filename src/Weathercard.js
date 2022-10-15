import React, { useEffect, useState } from 'react';
import  './Weatherapp.css';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { WiHumidity } from 'react-icons/wi';
import { WiSmoke } from 'react-icons/wi';
import { GiSunset } from 'react-icons/gi';
import { WiNightRainWind } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';

function Weathercard({ tempinfo }) {
  const [weatherstate, setWeatherstate] = useState('')
    const {
        temp,
        humidity,
        pressure,
        climate,
        name,
        country,
        speed,
        dt,
        sunset
    } = tempinfo;
    useEffect(() => {
      if (climate) {
         switch (climate) {
          case ("Haze"):
            setWeatherstate("wi-day-haze")
            break;
          case ("Smoke"):
            setWeatherstate("wi-day-fog")
            break;
          case ("Mist"):
            setWeatherstate("wi-day-fog")
            break;
          case ("Clear"):
            setWeatherstate("wi-night-clear")
            break;
          case ("Clouds"):
            setWeatherstate("wi-day-cloudy")
            break;
          case ("Rain"):
            setWeatherstate("wi-day-showers")
            break;
          case ("Snow"):
            setWeatherstate("wi-day-snow")
            break;
          case ("Fog"):
            setWeatherstate("wi-day-fog")
            break;
          case ("Dust"):
            setWeatherstate("wi-day-fog")
            break;
         
          default: setWeatherstate(<TiWeatherPartlySunny />)
            break;
         }
      }
    })
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    <div className='wheather_card_container'>
      <section >
        <div className='container'>
          <div className='icon_sect'>
            <div className='custom_icon'>
              <i className={`wi ${weatherstate}`}></i>
            </div>
          </div>
        </div>
      </section>
      <section className='wheather_info'>
        <div className='wheather_info_container'>
          <div className='wheather_glance'>
            <p className='temp'>{temp}&deg;c</p>
            <div className='w_location'>
              <p className='climate'>{climate}</p>
              <p className='location'>{name}, {country}</p>
            </div>
          </div>
        </div>
        <div className='temp_sect'>
          {new Date().toLocaleString()}
        </div>
      </section>  
      <section className='extra_weather_info'>
        {/* sunset humidity pressure wind */}
         <div className='extra_weather_row'>
           <div className='section1'>
              <GiSunset className='sunset' />
              <div className='d-blcok'>
                <p>{timeStr}</p>
                <p>sunset</p>
              </div>
           </div>
           <div className='section1'>
              <WiHumidity className='sunset' />
              <div className='d-blcok'>
                <p>{humidity}%</p>
                <p>humidity</p>
              </div>
           </div>
           <div className='section1'>
              <WiNightRainWind className='sunset' />
              <div className='d-blcok'>
                <p>{pressure }mBar</p>
                <p>pressure</p>
              </div>
           </div>
           <div className='section1'>
              <WiStrongWind className='sunset' />
              <div className='d-blcok'>
                <p>{speed}mph</p>
                <p>wind</p>
              </div>
           </div>
         </div>
      </section>
    </div>
    </>
  )
}

export default Weathercard;