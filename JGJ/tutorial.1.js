
function getWeather() {
  var location = getLocation();
    
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");

        } else {
            console.log(data.query.results);
            console.log(data.query.results.channel.item.condition.temp);
            var temp = (data.query.results.channel.item.condition.temp);
            
        }

    });
}

getWeather();


function getLocation() {
  location = ''
  $.getJSON('https://ipinfo.io').done(function(data) {
    location = data.postal.toString()
    console.log(data.postal.toString())
    console.log(location)
  })
  
  return location
};

