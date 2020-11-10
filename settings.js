//dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//font sizes
function sizes(selectedTag) {
    var listValue = selectedTag.options[selectedTag.selectedIndex].text;
    document.body.style.fontSize = listValue;
}

//add friends
var counter = 0;
function Add() {
    //take the input
    var name = window.prompt("Enter your fren’s name: ");
    //creating cotainer to put the input on it
    var para = document.createElement("p");
    var at = "p"+counter;
    para.setAttribute("id", at);
    var node = document.createTextNode(name);
    para.appendChild(node);
    var element = document.getElementById("div 1");
    element.appendChild(para);

    //creating button to remove
    var button = document.createElement("button");
    var b = document.createTextNode("Delete");
    button.appendChild(b);
    var element = document.getElementById(at);
    element.appendChild(button);
    //remove function
    button.addEventListener ("click", function() {
       var elmnt = document.getElementById(at);
       elmnt.remove();
      });
      counter++;
}
