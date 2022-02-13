
var information = document.getElementsByClassName("information");

function dangLosers(){
    localStorage.setItem("field_one", information[0].value);
    localStorage.setItem("field_two", information[1].value);
    localStorage.setItem("field_three", information[2].value);
    localStorage.setItem("field_four", information[3].value);
    localStorage.setItem("field_five", information[4].value); 
    console.log(information[0].value);
    console.log(information[1].value); 
    console.log(information[2].value); 
    console.log(information[3].value); 
    console.log(information[4].value); 
}


    