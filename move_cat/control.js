// constnt & variables
let xmin = 0;       // set moving area
let ymin = 0;        
let xmax = 800;        
let ymax = 350;        
let x = 1;          // position integer
let y = 1;
let x_px = "";      // position string "px"
let y_px = "";
let dir_x = 1;      // moving direction
let dir_y = 1;
let int_id;         // setInterval ID
//
// interval timer start function
const tmr = () => {
    int_id = setInterval(move,20);                  // "int_id" for clear "clearInterval"
    start.removeEventListener("click", tmr);        // stop the listener
}
//
// move function
function move(){
    const pos = document.querySelector(".img1");         
    if(dir_x === 1) {
        x_px = x.toString() + "px";                   
        pos.style.left = x_px;
        x += 5;
        if(x >= xmax) {
            dir_x = 0;
            pos.style.transform = "scale(-1, 1)";       // reverse the sprite
        }
    }
    if(dir_x === 0) {                   
        x_px = x.toString() + "px"; 
        pos.style.left = x_px;
        x -= 5;
        if(x <= xmin) {
            dir_x = 1;
            pos.style.transform = "scale(1, 1)";
        }
    }
    if(dir_y == 1) {            
        y_px = y.toString() + "px";
        pos.style.top = y_px;    
        y += 5;
        if(y >= ymax) {
            dir_y = 0;
        }
    }
    if(dir_y == 0) {     
        y_px = y.toString() + "px";
        pos.style.top = y_px;            
        y -= 5;
        if(y <= ymin) {
            dir_y = 1;
        }
    }
}
//
// start from here
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
start.addEventListener("click", tmr);
stop.addEventListener("click", () => clearInterval(int_id));