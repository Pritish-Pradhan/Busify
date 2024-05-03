//function to blur the background on clicking navbar
$("nav button").on("click",function(){
    if($("#mainContainer").hasClass("Blur")){
        $("#mainContainer").removeClass("Blur");
    }
    else{
        $("#mainContainer").addClass("Blur");
    }
});

//function for removing nav on clicking elsewhere
$("#mainContainer").on("click",function(){
    if($("#mainContainer").hasClass("Blur")){
        $("nav button").click();
    }
});

//function to close nav on clicking a item in it
$(".nav-item").on("click",function(){
    $("nav button").click();
});
