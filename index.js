$("nav button").on("click",function(){
    if($("#mainContainer").hasClass("Blur")){
        $("#mainContainer").removeClass("Blur");
    }
    else{
        $("#mainContainer").addClass("Blur");
    }
});