
            window.addEventListener('deviceorientation', function(event) {
               document.getElementById('cube').style.webkitTransform =
               document.getElementById('cube').style.transform =
                       'rotateX(' + event.beta + 'deg) ' +
                       'rotateY(' + event.gamma + 'deg) ' +
                       'rotateZ(' + event.alpha + 'deg)';

            });
        
 
  