//Global Variable
var touch;
var startX;
var startY;
var endX;
var endY;
var time1;
var time2;
var totalTime;

/**
* Reads if device is touch capable.
* @function is_touch_device
*/
function is_touch_device()
{
 return 'ontouchstart' in window;
}

/**
* Handles touch start input.
* @function onTouchStart
*/
function onTouchStart(e)
{
   var canvas = document.getElementById('mycanvas');
   var ctx = canvas.getContext('2d');

   time1 = new Date();
   var touches = e.touches;
   // Print out (x,y) co-ords of touch: touches[0].clientX contains
   //  the x position.
   console.log(touches[0].clientX + ", " + touches[0].clientY);
   startX = touches[0].clientX;
   startY = touches[0].clientY;
   ctx.beginPath();
   ctx.moveTo(startX,startY);	//the previous touch
}

/**
* Handles touch move input.
* @function onTouchMove
*/
function onTouchMove(e)
{
   var canvas = document.getElementById('mycanvas');
   var ctx = canvas.getContext('2d');
   var touches = e.touches;

   endX = touches[0].clientX;
   endY = touches[0].clientY;
   ctx.lineTo(endX,endY);	//the current touch
   ctx.stroke();
}

/**
* Handles swipes.
* @function onTouchEnd
*/
function onTouchEnd(e)
{
   var canvas = document.getElementById('mycanvas');
   var ctx = canvas.getContext('2d');

   var totalLength;
   time2 = new Date();
   totalTime = time2 - time1;
   totalLength = Math.sqrt((endX - startX) * (endX - startX) + (endY - startY) * (endY - startY));

   if(totalLength > 200  && totalTime < 500)
   {
     console.log("swipe");
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     document.body.style.background = "Red";
   }

}
