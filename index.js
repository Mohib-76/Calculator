var buttons = document.querySelectorAll("button");
var screen1 = document.querySelector(".text1");
var screen2 = document.querySelector(".text2");

for(var i=0 ; i<buttons.length; i++){
  buttons[i].addEventListener("click", function(event){
    // console.log(this.innerHTML);
    if(this.innerHTML != "=" && this.innerHTML != "C"){
      screen1.innerHTML += this.innerHTML;
    }
    else if (this.innerHTML === "="){
      screen2.innerHTML = "= " + eval(screen1.innerHTML);
    }
    else if (this.innerHTML === "C"){
      screen1.innerHTML = "";
      screen2.innerHTML = "";
    }
  });
}

var keys = ["1", "2", "3" ,"4" , "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "." , "(" , ")"];

document.addEventListener("keydown" , function(event){
    // console.log(event.key);
    for(var i=0;i<keys.length;i++){
      if(event.key === keys[i]){
        screen1.innerHTML += event.key;
      }
    }
    if(event.key === "Backspace"){
      screen1.innerHTML = screen1.innerHTML.substr(0,screen1.innerHTML.length-1);
    }
    else if (event.key === "=" || event.key === "Enter"){
      screen2.innerHTML = "= " + eval(screen1.innerHTML);
    }
    else if (event.key === "C"){
      screen1.innerHTML = "";
      screen2.innerHTML = "";
    }
  });
