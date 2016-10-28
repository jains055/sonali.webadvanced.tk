
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
                       
                       //$(".pattern").css("background-color","rgb(" + event.beta + "," + event.gamma + "," + event.alpha + ")");
              });
              
              