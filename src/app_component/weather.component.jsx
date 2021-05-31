import React from 'react'
import sunny from '../icons/wi-sunrise.svg'
import cloudy from '../icons/wi-cloud.svg'
import rainy from '../icons/wi-rain.svg'
import snow from '../icons/wi-snow.svg'
import '../icons/icon.css'

const Weather = ({city, mintemp, maxtemp, currentTemp, description, id}) => {
    return (
        <div className="container">
            <div className="card pt-4">
                <h1 className="heading"> 
                   {city}
                </h1>
                <h5 className="py-4">
                    {id ?<img src={icon(id)} className="image"></img> : null }        
                </h5>   
                {currentTemp ?<h1 className="py-2">{currentTemp}&deg;</h1> : null } 
                {minmaxTemp(mintemp, maxtemp)}
                <h4 className="py-3">{description}</h4>
            </div>
        </div>
    )
}

function minmaxTemp(min,max){
    if(min && max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
            
        </h3>
    )
    }
    else {
        return null;
    }
}

function icon(id){
       if (id>=500 && id <=531 )
       {
           return rainy;
       }
       else if(id>=600 && id <=622)
       {
           return snow
       }
       else if(id>=801 && id <=804)
       {
           return cloudy
       }
       else
       return sunny
    }
export default Weather;