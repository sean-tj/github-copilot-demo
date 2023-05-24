//Create a function of get time 
export function getTime() {
    //create a variable to store the current date
    const date = new Date();
    //create a variable to store the current hour
    const hour = date.getHours();
    //create a variable to store the current minute
    const minute = date.getMinutes();
    //create a variable to store the current second
    const second = date.getSeconds();
    //return the current time
    return `${hour}:${minute}:${second}`;
}