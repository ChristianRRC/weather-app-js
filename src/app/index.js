require('./index.css');
const {UI} = require('./UI')
const {Store}  = require('./Store')

const {Weather} = require('./Weather')



const ui = new UI()
const store = new Store()
const {city,countryCode} = store.getLocationData()
const weather = new Weather(city,countryCode)


async function fetchWeather(){
const data = await weather.getWeather();
ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value
  const countryCode = document.getElementById('countryCode').value
  e.preventDefault()
   weather.changeLocation(city,countryCode)
   store.setLocationData(city,countryCode)
   fetchWeather()
})

document.addEventListener('DOMContentLoaded',fetchWeather)