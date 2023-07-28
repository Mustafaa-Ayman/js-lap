
var btn = document.getElementById('btn');
var intervalId = null; 

function newTab() {
  var newTab = window.open('', '_blank', 'width=100,height=100');
  var x = 0;
  var y = 0;
  var direction = 1;

  
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    
    intervalId = setInterval(moveTab, 500);
  }

  function moveTab() {
    
    newTab.moveTo(x, y);
    x += 100 * direction;

    
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;

    
    if (x + 100 > screenWidth || x < 0) {
      direction *= -1;
      y += 100;
    }

    
    if (y + 100 > screenHeight) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
}

btn.addEventListener('click', newTab);
