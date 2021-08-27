const weather=new Weather('patiala','India');

const ui=new UI()
const storage=new Storage()
//Get weather on dom loading ke time pr

document.addEventListener('DOMContentLoaded',getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city=document.getElementById('city').value;
    //const country=document.getElementById('country').value;
    weather.changeLocation(city)

    storage.setLocationData(city)

    //Get weather 
    getWeather();
    //close modal

    $('#locModal').modal('hide');

})



//weather.changeLocation('delhi','India');

function getWeather()
{
weather.getWeather()
.then(res=>{
    ui.paint(res)
})
.catch(err=>console.log(err));

}