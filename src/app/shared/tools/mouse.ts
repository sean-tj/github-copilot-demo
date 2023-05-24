//Get the current position of the mouse
export function getMousePosition(event: { clientX: any; clientY: any; }) {
    //create a variable to store the current x position of the mouse
    let x = event.clientX;
    //create a variable to store the current y position of the mouse
    let y = event.clientY;
    //return the current position of the mouse
    return { x, y };
}