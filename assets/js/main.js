function changeColor(){

    
  var color = document.querySelectorAll(".box")
  var color1 = color[0].style.backgroundColor;
  var color2 = color[1].style.backgroundColor;
  var color3 = color[2].style.backgroundColor;

  
  color[0].style.backgroundColor = color2;
  color[1].style.backgroundColor = color3;
  color[2].style.backgroundColor =color1;

  
}


