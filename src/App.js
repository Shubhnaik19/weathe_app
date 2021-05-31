import logo from './logo.svg';
import './App.css';
import Weather from './app_component/weather.component';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import CityForm from './app_component/cityForm.component';

// api call link api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api_Key ="763ad035d1bfa0632c8ea11551fd30dc"

class App extends Component{
  constructor(){
    super();
    this.state ={
      city: null,
      country: null,
      mintemp: null,
      maxtemp: null,
      currentTemp: null,
      description: null,
      icon: null,
      error: false,
    };
  }
  getCelcius(temp){
      let celcius = Math.floor(temp - 273.15);
      return celcius;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    if(city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=763ad035d1bfa0632c8ea11551fd30dc`);
    const response = await api_call.json();
    console.log(response);
    this.setState({
      error:false,
      city: `${response.name},${response.sys.country}`,
      mintemp: this.getCelcius(response.main.temp_min),
      maxtemp: this.getCelcius(response.main.temp_max),
      currentTemp: this.getCelcius(response.main.temp),
      description:response.weather[0].description,
      id: response.weather[0].id
    });
    } else {
      this.setState({error: true});
    }
  };
  render(){
    return(
      <div className="App">
        <CityForm loadWeather={this.getWeather} error={this.state.error}/>
        <Weather city={this.state.city} country={this.state.country}
         mintemp={this.state.mintemp} maxtemp={this.state.maxtemp} 
         currentTemp={this.state.currentTemp}
         description={this.state.description}
         id={this.state.id}/>
          
    </div>
    );
  }
}

export default App;
