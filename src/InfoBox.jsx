import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import "./InfoBox.css"

export default function InfoBox({weatherInfo}){
    let IMG_URL="https://plus.unsplash.com/premium_photo-1700182582673-6f0de67eb677?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let COLD_URL="https://images.unsplash.com/photo-1613416721396-6565d7b3dcb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL="https://images.unsplash.com/photo-1623355626871-8a9c97da0b0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL="https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className='infoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                 sx={{ height: 140 }}
                 image={weatherInfo.humidity>=80?RAIN_URL:(weatherInfo.temp>30?HOT_URL:(weatherInfo.temp<15?COLD_URL:IMG_URL))}
                 title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.name}&nbsp; &nbsp;{weatherInfo.humidity>=80?<ThunderstormIcon/>:(weatherInfo.temp>30?<WbSunnyIcon/>:(weatherInfo.temp<15?<AcUnitIcon/>:<CloudIcon/>))}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
               <div><b>Temperature = {weatherInfo.temp}&deg;C</b></div>
               <div><b>Maximum Temperature = {weatherInfo.temp_max}&deg;C</b></div>
               <div><b>Minimum Temperature = {weatherInfo.temp_min}&deg;C</b></div>
               <div><b>Humidity = {weatherInfo.humidity}</b></div>
               <div><b>The Weather can be described as {weatherInfo.weather} Feels Like = {weatherInfo.feelslike}&deg;C</b></div>
          
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}
