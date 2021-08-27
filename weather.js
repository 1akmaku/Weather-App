class Weather{
    constructor()
    {
        this.openweather_key='c14783144e48e8137bb93cf975f02ca2'
        this.city="Patiala"
        this.country="India"

    }
    //For fetching
    async getWeather()
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.openweather_key}`);
         
        const responseData=await response.json()
        return responseData
    }


    //Changing the Location


    changeLocation(city,country){
        this.city=city
        this.country=country

    }



}