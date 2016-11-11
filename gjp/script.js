    //dissable scroll
    document.ontouchmove = function(e){ e.preventDefault(); }

    //append multiple lines
    for (var i = 0; i <34; i++) {
        $(".lines").append("<div class='one'></div>");
        $(".lines").append("<div class='two'></div>");
        $(".lines").append("<div class='three'></div>");
        console.log(3);
    }
    
    //enable rotation
    
     window.addEventListener('deviceorientation', function(event) {
        
        document.getElementById('lines').style.webkitTransform =
        document.getElementById('lines').style.transform =
            'rotateX(' + event.beta + 'deg) ' +
            'rotateY(' + event.gamma + 'deg) ' +
            'rotateZ(' + event.alpha + 'deg)';
                       
    });
    

                