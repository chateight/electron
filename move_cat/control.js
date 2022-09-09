// constnt & variables
let xmin = 0;       // set moving area
let ymin = 0;        
let xmax = 800;        
let ymax = 350;        
let x = 1;          // position integer
let y = 1;
let x_px = "";      // position string "px"
let y_px = "";
let dir_x = 1;      // moving direction(1 or -1)
let dir_y = 1;
let int_id;         // setInterval ID
const step = 5;
let scale_str;
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
    x_px = x.toString() + "px";                   
    pos.style.left = x_px;
    y_px = y.toString() + "px";
    pos.style.top = y_px;
    //         
    (dir_x === 1) ? x += step: x -= step;
        if(x >= xmax) {
            dir_x = -1;
        }else if(x <= xmin) {
            dir_x = 1;
        }
    //
    (dir_y === -1) ? y += step: y -= step;
        if(y >= ymax) {
            dir_y = 1;
        }else if(y <= ymin) {
            dir_y = -1;
        }
    scale_str = "scale(" + dir_x + "," + dir_y + ")";
    pos.style.transform = scale_str;
}
//
// start from here
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
start.addEventListener("click", tmr);
stop.addEventListener("click", () => clearInterval(int_id));