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
        
        //color for line two
        
        var r = event.alpha - 105
        var g = (Math.abs(event.beta)) + 75;
        var b = (Math.abs(event.gamma)) + 165;
        $(".two").css("background", ("rgb:"+ r + "," + g + "," + b));
        
        console.log(r)
        console.log(g)
        console.log(b)
    });
    
       

                