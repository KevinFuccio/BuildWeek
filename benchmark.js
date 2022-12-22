let counter = 10
let timer = function(){
    if(counter > 0){
        document.querySelector("#timer").innerHTML = counter 
    }else if(counter <= 0){
        document.querySelector("#timer").innerHTML = "Il tempo è scaduto"
    }
    
    counter -= 1;
}
setInterval(timer,1000);