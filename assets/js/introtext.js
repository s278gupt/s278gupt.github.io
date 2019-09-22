var clicks = 0;
var called = 0;
function onClick() {
    clicks += 1;
    called = 1;
    var message = "";
    if (clicks==0) {
        message = "Saumya Gupta."
    }
    else if (clicks==1) { 
        message = "a developer.";
    }
    else if (clicks==2) { 
        message = "a designer hobbyist.";
    }
    else if (clicks==3) { 
        message = "a Kenyan.";
    }
    else if (clicks==4) { 
        message = "a sports enthusiast.";
    }
    else {
        clicks = -1;
        message = "curious.";
    }
    document.getElementById("message").innerHTML = message;
    called = 0; 
};

setInterval(
    function() {
        if (called == 0) {
            onClick();
        }
    }, 6000
);