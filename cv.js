function thankyou(){
    document.getElementById("Button").innerHTML = "Thank You";
    console.log("Thank You");

}

var myName = "Roy Avigdorov" ;
console.log(myName);
    
function checkValidity(EmailC, note1){
    const inpObj= document.getElementById("EmailC");
    if(!inpObg.checkValidity()){
        document.getElementById(note1).innerHTML= inpObj.validationMwssage;
    }
}