
var count=0;
function on() {
    var waterElement = document.getElementById("water");
    var can = document.getElementById("can");
    var tap =document.getElementById("tap-handle")
    var water=document.getElementById("water-flow")
    if(count%2===0){
      waterElement.style.backgroundColor="#d3d3d3"
      can.style.backgroundColor="#3498db"
    waterElement.style.animation = "water-on 5s linear forwards";
    tap.style.background="Green"
    water.style.background="#3498db"
  }
  else{
    waterElement.style.animationPlayState = "paused";
    tap.style.background="Red"
    water.style.background="White"
  }
  count++;
//   if(count>1){
//   if(waterElement.style.animation="none"){
//     water.style.background="White"
//   }
// }

// if(can.height=="300px"){
//   water.style.background="White"
// }

// }

// setTimeout(() => {
//   water.style.background="White"
// }, 5000);
}

