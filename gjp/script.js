    //dissable scroll
    document.ontouchmove = function(e){ e.preventDefault(); }

    //append multiple lines
    for (var i = 0; i <34; i++) {
        $(".lines").append("<div class='one'></div>");
        $(".lines").append("<div class='two'></div>");
        $(".lines").append("<div class='three'></div>");
        console.log(3);
    }
    
    
     window.addEventListener('deviceorientation', function(event) {
        
        //enable rotation
        document.getElementById('lines').style.webkitTransform =
        document.getElementById('lines').style.transform =
            'rotateX(' + event.beta + 'deg) ' +
            'rotateY(' + event.gamma + 'deg) ' +
            'rotateZ(' + event.alpha + 'deg)';
            
        //line one w & h based on alpha
        var alpha = event.alpha/10;
        $(".one").css("height", ( alpha + "px"));
        $(".one").css("width", ( (100-alpha) + "%"));
   
        //line two w & h based on beta
        var beta = (Math.abs(event.beta))/2;
        $(".two").css("height", ( beta + "px"));
        $(".two").css("width", ( (100-beta) + "%"));
     
        //line three w & h based on gamma
        var gamma = Math.abs(event.gamma);
        $(".three").css("height", ( gamma + "px"));
        $(".three").css("width", ( (100-gamma) + "%"));
        
            //color for line three
            var color = "#" + Math.floor(Math.random()*16777215).toString(16);
            $(".two").css("background-color", color );
        
                //color for line two
                var r = Math.round(Math.abs(event.alpha - 105))
                var g = Math.round((Math.abs(event.beta)) + 75);
                var b = Math.round((Math.abs(event.gamma)) + 165);
                $(".two").css("background-color", "rgb("+ r +","+ g +","+ b +")" );
        
                       //color for line one
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
                
                       //document.getElementById("color-preview").style.backgroundColor = hslString;
                       
                       $(".one").css("background-color", hslString);
        
    });
    
       

                