async function getWeather(city){
    try{
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

  let raw =await  fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric `
    )
    let realdata = await raw.json()
    console.log(realdata); 
    if(!raw.ok){
        throw new Error("City not found , try something different");
    } 
}catch(err){
   console.error(err.message);
}
}

getWeather("Dhule");