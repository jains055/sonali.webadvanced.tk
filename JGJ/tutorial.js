$( "#button" ).click(function() {
  $( "#button" ).hide();
  $( "#zip" ).hide();
});

function getWeather() {
    
     
    
   var location = (document.getElementById("zip").value);
    console.log(location)
    
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");
           
            
        }if(isNaN(location)){
         console.log("Location is invalid!");
        

        } else {
            console.log(data.query.results);
            
            var city = (data.query.results.channel.location.city);
            console.log(city);
            var region = (data.query.results.channel.location.region);
            console.log(region);
            var temp = (data.query.results.channel.item.condition.temp);
            console.log(temp);
            
            var use1 = city.toUpperCase();
            var use2 = region.toUpperCase();
            
            $( ".area" ).append(use1 + "," +use2);
            $( ".temp" ).append("   " + temp +" " + String.fromCharCode(176) + "F");
            $(".info").css('display','block');
            
                if (temp >= 60){
                     $(".a").css('display','block');
                }
                if (temp >49 && temp <60){
                     $(".b").css('display','block');
                }
                if (temp >39 && temp <50){
                     $(".c").css('display','block');
                }
                if (temp >29 && temp < 40){
                     $(".d").css('display','block');
                }
                if (temp >19 && temp < 30){
                     $(".e").css('display','block');
                }
                if (temp > 9 && temp <20){
                     $(".f").css('display','block');
                }
                if (temp > -1 && temp < 10){
                     $(".g").css('display','block');
                }
        }

    });
}

getWeather();




