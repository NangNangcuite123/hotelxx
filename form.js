(function (){
    let floor = document.querySelector("#floor");
    let room = document.querySelector("#room");
    let arr = [];
    document.querySelector("#mainBtn").onsubmit = function (event){
        event.preventDefault();
        Validate();
        myarr();
        document.querySelector("#mainBtn").reset();
        
    }
    function myarr(){
    arr.push(floor.value,room.value);
    console.log(arr);
    localStorage.setItem("arr",JSON.stringify(arr));
    location = "tableofhotel.html";
    }


    function Validate(){
    if(floor.value == ""){
        alert("Please Input Floor");
        return false;
    }
    else if (room.value == ""){
        alert("Please Input Room");
        return true ;
    }   
    else{
        alert("Room Added");
        
        return true;
    }
    }
    
})();