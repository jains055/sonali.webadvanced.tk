function getWeather() {
    
   if (typeof(location) === number) {
     location = number.toString()
   }
    
  let rootUrl = 'https://query.yahooapis.com/v1/public/';
  var query = 'yql?q='

    //Creating the URL for the GET request

    $.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    ,function (data) {
      /* Check that a place was found (we'll just grab the first) */
        //if (data.query.results === null) {
          //  console.log("Location not found: " + location + "!");

       // } else {
            console.log(data.query.results);
       // }

   
}

getWeather();



function getLocation() {
    this.data = '';
     $.getJSON('https://ipinfo.io', function(data) {
        .done(data) {
            this.data = data.toString();
        }
     })
     console.log(this.data)
    return this.data;
} 