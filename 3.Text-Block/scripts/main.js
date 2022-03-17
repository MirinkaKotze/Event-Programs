// LESSON 31 - EVENTS 
// 3.Create an html-page with a text block in a frame.
//  Execute the possibility to change the size of the block when 
//  holding the mouse cursor in the bottom right corner and pull it further.

// POINTERS
const dragger = document.getElementById('dragger');
const frame = document.getElementById('frame');
 // getting frame widths from CSS
let frameWidth = frame.clientWidth;
let frameHeight = frame.clientHeight;

// GLOBAL VARAIBLES --> setting the starting position of mouse anywhere, until mousedown
let startX = 0;
let startY = 0;

function startResize(event) {
    // setting coordinates to mouse position, on mousedown
    startX = event.screenX;
    startY = event.screenY;
}

//RESIZE FUNCTION WORKS LIKE A "INIFINITY LOOP" AS LONG AS MOUSE IS PRESSED IN.
function resize(event) {      
    // calculate size from the current mouse position to the start position
    const sizeX = event.screenX - startX;
    const sizeY = event.screenY - startY;
    // updating start as mouse is moving   
    startX = event.screenX;
    startY = event.screenY;
    // change current frame size to new size
    frameWidth += sizeX;
    frameHeight += sizeY;
    // replacing new frame size to the previous frame size [return of function]
    frame.style.width = frameWidth + 'px';
    frame.style.height = frameHeight + 'px';
}

function stopResize() {
    document.body.removeEventListener('mousemove', resize);
}

// CALLING FUNCTIONS ON MOUSE EVENTS
dragger.addEventListener('mousedown', function(event) { //--> musedown starts events by calling a function: includes, startResize and eventListeners for mousemove and mouseup.
    startResize(event);
    document.body.addEventListener('mousemove', resize); //--> function keeps running until mouse-up is called
    document.body.addEventListener('mouseup', stopResize);
});

//--CLASS CODE:--
// const corner = document.getElementById("dragger")
// const container = document.getElementById("frame")

// corner.addEventListener("mousedown", cornerFunct)
// document.addEventListener("mouseup", stopResize)

// function cornerFunct(event){
//    document.addEventListener("mousemove", resize)
// }

// function resize(event){
//    const sizeX = event.clientX 
//    const sizeY = event.clientY 
//    container.style.width = sizeX - container.offsetLeft + "px"
//    container.style.height = sizeY - container.offsetTop +  "px"
// }

// function stopResize(){
//    document.removeEventListener("mousemove", resize)
// }
