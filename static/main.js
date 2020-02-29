function inputName(){

} //Stores input into name

function inputPrice(){

} //Stores input into price

function inputQuantity(){

} //Stores input into quantity

function inputCategory(){

}//stores input into category

function clickAddMonth(){ //Make a function that increases the number of rows per click.
    $.get("/addMonth",{},function(response){
        row.getAddMonth("addRow").innerHTML = inputName();

    });
}

function clickFinish(){
    $.get("/finish",{},function(response){
    //Simulation starts, taking in all the variables and spitting out the output.
    //Output = graphs of past data based on total resources per month used and price, future predictions based on those graphs
   
   
    $("#finish-area").html(display);
    });
}