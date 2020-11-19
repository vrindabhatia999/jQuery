$(document).ready(function(){

    //fading out
    $("button").click(function(){              
        $("#div1").fadeOut(1200);
        $("#div1").fadeIn(2000);
        $("#div1").fadeTo(1200,0.4);
        $("#div1").fadeTo(1000,0.4);
        $("#div2").fadeOut(1200);
        $("#div2").fadeIn(2000);
        $("#div2").fadeTo(1200,0.4);
        $("#div3").fadeOut(1200);
        $("#div3").fadeIn(2000);
        $("#div3").fadeTo(1200,0.4);
    })
    //hover 
    $("#div1").hover(function(){
        $(this).css(
            "background-color","teal"
        )
    },
    function(){
        $(this).css(
            "background-color","yellow"
        )

    })


    
})



 