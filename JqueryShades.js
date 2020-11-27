$(document).ready(function(){

    //fading out
    $("#btn0").click(function(){              
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

var d1=document.createElement('div');
document.body.appendChild(d1);

d1.style.padding='5px;'
 
d1.style.textAlign='center'
d1.style.backgroundColor=' #e5eecc'
d1.style.boxShadow='2px 2px 2px purple'
d1.innerHTML="Click this bulletin";
d1.style.fontFamily='gothic'
d1.style.fontSize='25px'
d1.style.marginLeft='20%'
d1.style.marginRight='20%'
 
d1.style.marginTop='-20%'
d1.id='toggle1'

var panel=document.createElement('div');
document.body.appendChild(panel);

panel.style.padding='5px;'
panel.style.textAlign='center'
panel.style.backgroundColor=' #e5eecc'
panel.style.boxShadow='2px 2px 2px purple'

panel.style.marginLeft='20%'
panel.style.marginRight='20%'
panel.id='panel1';
panel.style.fontFamily='gothic'
panel.style.fontSize='20px'


$('#toggle1').click(function(){
    $("#panel1").slideToggle();
})
 
document.body.style.backgroundColor='black'


 





 