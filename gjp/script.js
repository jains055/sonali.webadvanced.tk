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
            
      
        
        //line 2 width based on beta
        var beta = Math.abs(event.beta)/2;
        $(".two").css("height", ( alpha + "px"));
        
        
        
    });
    
       
        window.addEventListener('devicemotion', function(event) {
                
                //line 1 width based on alpha 
                
                var intervalone = (event.interval)*100
                var alpha = (event.alpha)/intervalone;
                $(".one").css("height", ( alpha + "px"));
                console.log(intervalone)
        });
    

                