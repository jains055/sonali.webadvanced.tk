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
            
        //line 1 width based on alpha
        var alpha = event.alpha/10;
        $(".one").css("height", ( alpha + "px"));
        console.log(alpha)
        
        //line 2 width based on beta
        var beta = (Math.abs(event.beta))/2;
        $(".two").css("height", ( beta + "px"));
        console.log(beta)
        
        //line 3 width based on gamma
        var gamma = (Math.abs(event.gamma))/2;
        $(".three").css("height", ( gamma + "px"));
        console.log(gamma)
        
    });
    
       

                