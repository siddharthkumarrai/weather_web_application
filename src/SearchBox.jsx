import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] = useState("");

    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    // const API_KEY="f10b264bb179a84187f9074d4de026b3";
    const API_KEY=import.meta.env.VITE_WEATHER_API;


    let getWeatherInfo = async ()=>{
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JsonResponse = await response.json();
            let result = {
                name: JsonResponse.name,
                feelslike: JsonResponse.main.feels_like,
                humidity: JsonResponse.main.humidity,   
                temp: JsonResponse.main.temp,
                temp_max: JsonResponse.main.temp_max,
                temp_min: JsonResponse.main.temp_min,
                weather: JsonResponse.weather[0].description,
            }
                     console.log(result)
                     setError("")
                      return result;
                      
        } catch (error) {
            throw error
        }
       

    }

    let handleChangeInput = (event)=>{
        setCity(event.target.value);
    };

    let handleForm = async (event)=>{
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo) 
        } catch (error) {
            setError(error)
        }
        
    };
    return(
        <div className='SearchBox'>
            <form onSubmit={handleForm}>
            <TextField id="City" label="City" variant="outlined"  value={city} onChange={handleChangeInput} />
            <br/><br/>
            <Button variant="contained" color="success" type='submit'>
              Search
            </Button>
            </form>
           {error && <b style={{color: "red"}}>No Such Place Exist In This API</b>}
        </div>
    )
}