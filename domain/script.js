
              window.addEventListener('deviceorientation', function(event) {
                 document.getElementsByClassName("cube").style.webkitTransform =
                 document.getElementsByClassName("cube").style.transform =
                    'rotateX(' + event.beta + 'deg) ' +
                       'rotateY(' + event.gamma + 'deg) ' +
                       'rotateZ(' + event.alpha + 'deg)';
              });