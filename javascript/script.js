var title = document.getElementById('title') ;

var redButton = document.getElementById('green');

var blueButton = document.getElementById('yellow');

var blackButton = document.getElementById('blue');

redButton.addEventListener("mouseover", function()
    { 
    title.style = "color: green;";
  });
  
  blueButton.addEventListener("mouseover", function() {
      
    title.style = "color: yellow;";
  });
  
  blackButton.addEventListener("mouseover", function() {
      
    title.style = "color: blue;";
  });