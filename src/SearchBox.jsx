import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    // eslint-disable-next-line no-unused-vars
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="04455131ed7f5f7891e6145a32165728";

    let getWeatherInfo=async()=>{
      
     // eslint-disable-next-line no-useless-catch
     try{
      let Response=   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let jsonResponse=await Response.json();
  
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
       weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;

     }catch(err){
      throw err;
     }
    }

let handleChange= (event)=>{
  setcity(event.target.value);
}

let handlesubmit= async(evt)=>{
try{
  evt.preventDefault();
  console.log(city);
 setcity("");
 let newInfo=  await getWeatherInfo();
 updateInfo(newInfo);
}catch(err){
setError(true)
}
}
    return (
        <div className='SearchBox'>
            <h3>Search For The Weather</h3>
            <form action="" onSubmit={handlesubmit}>
            <TextField 
            id="city" 
            label="CityName" 
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange}
            
            />
           <br /> <br /><br />
            <Button 
            variant="contained" 
            type='submit'
            >Search
            </Button>
         
          { error &&< h3 style={{color:"red"}}>No such place exist</h3>
          }
            </form>
        </div>
    )
}