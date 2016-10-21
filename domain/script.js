
            window.addEventListener('deviceorientation', function(event) {
               document.getElementById('shape').style.webkitTransform =
               document.getElementById('shape').style.transform =
                       'rotateX(' + event.beta + 'deg) ' +
                       'rotateY(' + event.gamma + 'deg) ' +
                       'rotateZ(' + event.alpha + 'deg)';

            });
        
 
  