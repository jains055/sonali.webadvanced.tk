    //dissable scroll
    document.ontouchmove = function(e){ e.preventDefault(); }

    //append multiple lines
    for (var i = 0; i <13; i++) {
        $(".lines").append("<div class='one'></div>");
        $(".lines").append("<div class='space1'></div>");
        $(".lines").append("<div class='two'></div>");
        $(".lines").append("<div class='space2'></div>");
        $(".lines").append("<div class='three'></div>");
        $(".lines").append("<div class='space3'></div>");
        console.log(3);
    }
    
    
     window.addEventListener('deviceorientation', function(event) {
         
         //button info
          $('.button').click(function(){
             $('.info').toggleClass('none'); 
         });
        
        //enable rotation
        document.getElementById('lines').style.webkitTransform =
        document.getElementById('lines').style.transform =
            'rotateX(' + event.beta + 'deg) ' +
            'rotateY(' + event.gamma + 'deg) ' +
            'rotateZ(' + event.alpha + 'deg)';
            
        //line one w & h based on alpha
        var alpha = event.alpha/15;
        $(".one").css("height", ( alpha + "px"));
        $(".one").css("width", ( (100-alpha) + "%"));
   
        //line two w & h based on beta
        var beta = (Math.abs(event.beta))/2;
        $(".two").css("height", ( beta + "px"));
        $(".two").css("width", ( (100-beta) + "%"));
     
        //line three w & h based on gamma
        var gamma = Math.abs(event.gamma)*2;
        $(".three").css("height", ( gamma + "px"));
        $(".three").css("width", ( (100-gamma) + "%"));
        
            //color for line three
            // var color = "#" + Math.floor(Math.random()*16777215).toString(16);
            // $(".three").css("background-color", color );
        
                //color for line two
                // var r = Math.round(Math.abs(event.alpha - 105));
                // var g = Math.round((Math.abs(event.beta)) + 75);
                // var b = Math.round((Math.abs(event.gamma)) + 165);
                // $(".two").css("background-color", "rgb("+ r +","+ g +","+ b +")" );
        
                       //color for line one
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
                               
                                //$(".one").css("background-color", hslString);
                                
                                //getting other colors using colorflow
                    
                    //var palette=$ui.color.triadic(hexString);
                    
                    var color = "#" + Math.floor(Math.random()*16777215).toString(16);
                    
                    var palette=$ui.color.complement(color, 'split');
                      
                      var one = palette[0];
                      var two = palette[1];
                      console.log(two);
                      var three = palette[2];
                             
                             $(".three").css("background-color", one);  
                             $(".two").css("background-color", two);
                             $(".one").css("background-color", three);
                               
                              });
                              
                            }
                            
                            
                                //Utility functions
                                
                                /**
                                 * Converts an HSL color value to RGB. Conversion formula
                                 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
                                 * Assumes h, s, and l are contained in the set [0, 1] and
                                 * returns r, g, and b in the set [0, 255].
                                 *
                                 * @param   {number}  h       The hue
                                 * @param   {number}  s       The saturation
                                 * @param   {number}  l       The lightness
                                 * @return  {Array}           The RGB representation
                                 */
                                function hslToRgb(h, s, l) {
                                  var r, g, b;
                                
                                  if (s == 0) {
                                    r = g = b = l; // achromatic
                                  } else {
                                    var hue2rgb = function hue2rgb(p, q, t) {
                                      if (t < 0) t += 1;
                                      if (t > 1) t -= 1;
                                      if (t < 1 / 6) return p + (q - p) * 6 * t;
                                      if (t < 1 / 2) return q;
                                      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                                      return p;
                                    }
                                
                                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                                    var p = 2 * l - q;
                                    r = hue2rgb(p, q, h + 1 / 3);
                                    g = hue2rgb(p, q, h);
                                    b = hue2rgb(p, q, h - 1 / 3);
                                  }
                                
                                  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
                                }
                                
                                function rgbToHex(r, g, b) {
                                  return componentToHex(r) + componentToHex(g) + componentToHex(b);
                                }
                                
                                function componentToHex(c) {
                                  var hex = c.toString(16);
                                  return hex.length == 1 ? "0" + hex : hex;
                                }
                        
                    
    });
    
       

                