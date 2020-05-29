var deBug = true;
var timeout = deBug ? 0 : 500;
function stopLoader(){
    setTimeout(function(){
        $('.loaderContainer').fadeOut();
    }, timeout);
}

function servicesDropdown(){
    dropdown = $("#serviceDropdown");
    if( dropdown.css("opacity")=="0" ){
        $(".down-arrow svg").css("transform","rotate(-90deg)");
        dropdown.css("z-index","4");
        dropdown.animate({
            top: "0px",
            opacity: "1",
        }, 300);
    } else {
        $(".down-arrow svg").css("transform","rotate(90deg)");
        dropdown.animate({
            top: "16px",
            opacity: "0",
            zIndex: "-2",
        }, 300);
    }
}
window.onclick = function(event) {
    if (!event.target.matches('.nav-item')) {
        if( dropdown.css("opacity")!="0" ){
            $(".down-arrow svg").css("transform","rotate(90deg)");
            dropdown.animate({
                top: "16px",
                opacity: "0",
                zIndex: "-2",
            }, 300);
        }
    }
}