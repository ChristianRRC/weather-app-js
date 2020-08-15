export class Weather{
  constructor(city,countryCode){
    this.apiKey = "e90f96ca435b0e22b37033e84ee6a8d1";
    this.city= city;
    this.countryCode=countryCode;
  }

  async getWeather(){
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=
    ${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(uri);
    const data = await response.json();
    
    return data;
  }

  changeLocation(city,countryCode){
    this.city = city
    this.countryCode = countryCode
    
  }

}