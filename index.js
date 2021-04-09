var numberofdrum = document.querySelectorAll(".drum").length;

var i = 0;
while(i<numberofdrum) {
//for(var i=0; i<numberofdrum; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
 
  var buttonInnerHtml = this.innerHTML;

  makeSound(buttonInnerHtml);
  buttonShadow(buttonInnerHtml);
  

}

);

i++;

}

//var sound = new Audio("sounds/tom-1.mp3");
   // sound.play();


document.addEventListener("keypress" , function (event) {

var keyLetter = event.key;    // use console.log(event); to check and know about event . it will show the objects of the pressed key . That object will have key property . we are using that key property from pressed key object.

  makeSound(keyLetter);
  buttonShadow(keyLetter);


   }
);




  function makeSound(key) {
    switch(key) {

      case "w" : var crash = new Audio("sounds/crash.mp3");
                        crash.play(); 
  
                        break;
      
               case "a" : var kick = new Audio("sounds/kick-bass.mp3");
                        kick.play(); 
  
                        break;
  
               case "s" : var snare = new Audio("sounds/snare.mp3");
                        snare.play(); 
  
                        break;
  
               case "d" : var tom1 = new Audio("sounds/tom-1.mp3");
                        tom1.play(); 
  
                        break;
  
               case "j" : var tom2 = new Audio("sounds/tom-2.mp3");
                        tom2.play(); 
  
                        break;
  
  
               case "k" : var tom3 = new Audio("sounds/tom-3.mp3");
                        tom3.play(); 
  
                        break;
  
  
               case "l" : var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play(); 
  
                        break;
  
               default :  console.log(keyLetter);
                          break;
     }
  }

  //To make Box-shawdoo while pressing

  function buttonShadow (clickedButton) {
      
    var buttonPressed = document.querySelector("." + clickedButton);
      buttonPressed.classList.add("pressed");

      setTimeout(function () {
        buttonPressed.classList.remove("pressed");
      } , 100);
  }