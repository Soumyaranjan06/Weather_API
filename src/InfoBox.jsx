/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const init_url="https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=1024x1024&w=is&k=20&c=FzBhkGLI-zWZ36jW-uKKSeJJcFSNLFJ0b_kWmGlscuk="
   
    const Hot_url="https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=1024x1024&w=is&k=20&c=6VIN3G56kXUaUPMNjv_JH_PasEiY2s4CRx3mmiy-t5Y=";
    const Cold_url="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_url="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=1024x1024&w=is&k=20&c=6D4nOCZt39KSqx0-nDyxSj6n8JFrSI5cSCDUUt4o17w=";
    return (
      
        <div className='infoBox'>
          <br />
          <div className='cardContainer'>
      <Card sx={{ maxWidth: 2345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? Rain_url:info.temp > 15 ? Hot_url :Cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity > <ThunderstormIcon/>? Rain_url:info.temp > 15 ?<AcUnitIcon/> :<WbSunnyIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
   <div>
    <p>Tempreture : {info.temp}&deg;C</p>
    <p>FeelsLike : {info.feelsLike}&deg;C</p>
    <p>Humidity : {info.humidity}</p>
    <p>Min Temp : {info.tempMin}</p>
    <p>Max Temp : {info.tempMax}</p>
    <p>Weather : {info.weather}</p>
    
   </div>
    </Typography>
    </CardContent>
     
    </Card>
    </div> 
        </div>
    )
}