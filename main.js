//Variables

var box1 = document.getElementById('first');
var box2 = document.getElementById('second');
var box3 = document.getElementById('third');




//box1 Hover
//Note: Our teacher last semester told us to always add false at the end of the event listener just in case, but she said it wasn't needed
box1.addEventListener('mouseenter',
 function(){
   box1.style.backgroundColor = "#ff00fb";
}, false
);

box1.addEventListener('mouseleave',
 function(){
   box1.style.backgroundColor = "#FCFF00";
}, false
);

//box2 Hover
box2.addEventListener('mouseenter',
 function(){
   box2.style.backgroundColor = "#ff7357";
}, false
);

box2.addEventListener('mouseleave',
 function(){
   box2.style.backgroundColor = "#57FFC9";
}, false
);


//box3 Hover
box3.addEventListener('mouseenter',
 function(){
   box3.style.backgroundColor = "#ff01a6";
}, false
);

box3.addEventListener('mouseleave',
 function(){
   box3.style.backgroundColor = "#A5FF01";
}, false
);
