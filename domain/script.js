            window.addEventListener('deviceorientation', function(event) {
               document.getElementById('shapes').style.webkitTransform =
               document.getElementById('shapes').style.transform =
                       'rotateX(' + event.beta + 'deg) ' +
                       'rotateY(' + event.gamma + 'deg) ' +
                       'rotateZ(' + event.alpha + 'deg)';

            });
        
 
  