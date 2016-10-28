
              window.addEventListener('deviceorientation', function(event) {
                  
                for (var i = 0; i < 10; i++) {
                 $(".cube").append("<div class='one'></div>");
                     $(".cube").append("<div class='two'></div>");
                   }
                  
                  
                 document.getElementById('cube').style.webkitTransform =
                 document.getElementById('cube').style.transform =
                    'rotateX(' + event.beta + 'deg) ' +
                       'rotateY(' + event.gamma + 'deg) ' +
                       'rotateZ(' + event.alpha + 'deg)';
                       
                      // $(".one").css("background-color","rgb(" + event.beta + "," + event.gamma + "," + event.alpha + ")");
                       

              });
              
            
            window.addEventListener('devicemotion', function(event) {
               document.getElementById('acceleration-x').innerHTML = Math.round(event.acceleration.x);
               document.getElementById('acceleration-y').innerHTML = Math.round(event.acceleration.y);
               document.getElementById('acceleration-z').innerHTML = Math.round(event.acceleration.z);
 
               document.getElementById('acceleration-including-gravity-x').innerHTML =
                       Math.round(event.accelerationIncludingGravity.x);
               document.getElementById('acceleration-including-gravity-y').innerHTML =
                       Math.round(event.accelerationIncludingGravity.y);
               document.getElementById('acceleration-including-gravity-z').innerHTML =
                       Math.round(event.accelerationIncludingGravity.z);
 
               document.getElementById('interval').innerHTML = event.interval;
               
                // $(".two").css("background-color","rgb(" + accelerationIncludingGravity.x + "," + event.accelerationIncludingGravity.y + "," + accelerationIncludingGravity.z + ")");
               
            });
            

if (window.DeviceOrientationEvent) {
    
     window.addEventListener('deviceorientation', function(event) {
        
       var alpha = event.alpha;
       var beta = event.beta;
       var gamma = event.gamma;
       var hue = 0, saturation = 0, lightness = 0, red, blue, green;

       // use -20 to +20 degrees angle for calculating saturation 
       // value according to beta angle
       beta += 20;
       if (beta < 0) saturation = 0;
       else if (beta > 40) saturation = 100;
       else {
         saturation = 100 / 40 * beta;
       }

       // use -20 to +20 degrees angle for calculating lightness 
       // value according to gamma angle
       gamma += 20;
       if (gamma < 0) lightness = 0;
       else if (gamma > 40) lightness = 100;
       else {
         lightness = 100 / 40 * gamma;
       }

       // use the whole 360 degree angle for calculating 
       // red value according to alpha angle
       alpha = Math.abs(alpha);
       hue = alpha;

       hue = Math.round(hue);
       saturation = Math.round(saturation);
       lightness = Math.round(lightness);

       var hslString = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
       var rgb = hslToRgb(hue / 360, saturation / 100, lightness / 100);
       red = rgb[0];
       green = rgb[1];
       blue = rgb[2];

       var rgbStringInverted = "rgb(" + (255 - red) + ", " + (255 - green) + ", " + (255 - blue) + ")";
       var hexString = "#" + rgbToHex(red, green, blue);

       document.getElementById("color-preview").style.backgroundColor = hslString;
       document.getElementById("headline").style.color = rgbStringInverted;
       document.getElementById("headline").innerHTML = hslString + "<br />" + hexString;
       
  });
  
}


