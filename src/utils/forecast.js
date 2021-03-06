const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d0a6222654d7c96abdf68fe405272995&query='+latitude+','+longitude+'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            console.log(body.current)
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. Feels like '+body.current.feelslike +' degrees out. There is a '+body.current.precip+'% chance of rain.')
        }
    })

}

module.exports=forecast