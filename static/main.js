function clickAddMonth(){
    $.get("/addMonth",{},function(response){
        $("#addMonth-area").html(display);
    });
}

function clickFinish(){
    $.get("/finish",{},function(response){
    //Simulation starts, taking in all the variables and spitting out the output.
    
    $("#finish-area").html(display);
    });
}