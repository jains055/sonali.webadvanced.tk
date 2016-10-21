
            window.addEventListener('deviceorientation', function(event) {
               document.getElementsByClassName('shape').style.webkitTransform =
               document.getElementsByClassName('shape').style.transform =
                       'rotateX(' + event.beta + 'deg) ' +
                       'rotateY(' + event.gamma + 'deg) ' +
                       'rotateZ(' + event.alpha + 'deg)';

            });
        
