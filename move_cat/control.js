// constnt & variables
const xmin = 0, ymin = 0;       // set moving area     
const xmax = 800, ymax = 350;                
let x = 1, y = 1;               // current position(integer) of the sprite
let dir_x = 1, dir_y = 1;       // moving direction(1 or -1)
let int_id;         // setInterval ID
const step = 5;
const pos = document.querySelector(".img1");    // "image" selector
const start = document.querySelector(".start"); // "start button" selector
const stop = document.querySelector(".stop");   // "stop button" selector
//
// interval timer start function
const tmr = () => {
    int_id = setInterval(move,20);                  // "int_id" for clear the listner
    start.removeEventListener("click", tmr);        // stop the listener
}
//
// move function to control the cat position
function move(){                      
    pos.style.left = x + "px";
    pos.style.top = y + "px";
    //
    (dir_x === 1) ? x += step: x -= step;
    (x >= xmax) ? dir_x = -1: (x <= xmin) ? dir_x = 1:{};          
    //
    (dir_y === -1) ? y += step: y -= step;
    (y >= ymax) ? dir_y = 1: (y <= ymin) ? dir_y = -1:{};        
    pos.style.transform = "scale(" + dir_x + "," + dir_y + ")";
}
//
// start from here
start.addEventListener("click", tmr);
stop.addEventListener("click", () => clearInterval(int_id));
