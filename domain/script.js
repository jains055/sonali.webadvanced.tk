
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
                       
function deviceMotionHandler(eventData) {
  var info, xyz = "[X, Y, Z]";

  // Grab the acceleration from the results
  var acceleration = eventData.acceleration;
  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);
  document.getElementById("moAccel").innerHTML = info;

  // Grab the acceleration including gravity from the results
  acceleration = eventData.accelerationIncludingGravity;
  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);
  document.getElementById("moAccelGrav").innerHTML = info;

  // Grab the rotation rate from the results
  var rotation = eventData.rotationRate;
  info = xyz.replace("X", rotation.alpha);
  info = info.replace("Y", rotation.beta);
  info = info.replace("Z", rotation.gamma);
  document.getElementById("moRotation").innerHTML = info;

  // // Grab the refresh interval from the results
  info = eventData.interval;
  document.getElementById("moInterval").innerHTML = info;       
}
                            
                            
 
              });
              
              