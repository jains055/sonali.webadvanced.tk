   if (!window.DeviceOrientationEvent) {
            document.getElementById('do-unsupported').classList.remove('hidden');
         } else {
            document.getElementById('do-info').classList.remove('hidden');
 
            window.addEventListener('deviceorientation', function(event) {
               document.getElementById('cube').style.webkitTransform =
               document.getElementById('cube').style.transform =
                       'rotateX(' + event.beta + 'deg) ' +
                       'rotateY(' + event.gamma + 'deg) ' +
                       'rotateZ(' + event.alpha + 'deg)';
 
               document.getElementById('beta').innerHTML = Math.round(event.beta);
               document.getElementById('gamma').innerHTML = Math.round(event.gamma);
               document.getElementById('alpha').innerHTML = Math.round(event.alpha);
            });
         }
 
  