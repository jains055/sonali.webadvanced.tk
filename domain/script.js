
              window.addEventListener('deviceorientation', function(event) {
                  
               //   for (var i = 0; i < 10; i++) {
                 //    $(".cube").append("<div class='one'></div>");
                   //  $(".cube").append("<div class='two'></div>");
                    //}
                  
                  
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
            });
     