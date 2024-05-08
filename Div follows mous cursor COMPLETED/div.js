let myDiv = document.getElementById("my-div");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const message = document.getElementById("message");

//Detech touch device
function isTouchDevice() {
    try{
        //We try to create TouchEvent. It would fail for desktops and throw error 
        document.createEvent("TouchEvent");
        return true;
    } catch(e) {
        return false;
    }
}

const move = (e) => {
    //Try, catch to avoid any errors for touch screens(Error thrown when user doesn't move his fingers)
    try{
        //PageX and pageY retrun the position of client's cursor from top left of screen 
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } 
    catch(e) {}
    //set left and top of div based on mouse position
    myDiv.style.left = x - 20 + "px";
    myDiv.style.top = y - 20 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
    move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
    move(e);
});
// function for backend program for the age submission

btn.addEventListener('click', function() {
    const age = parseInt(input.value);
    if (age >= 18) {
        message.textContent = "Congratulations you have successfully submitted your age";
    } else {
        message.textContent = "Sorry, you are under 18. You must be 18 or older.";
    }
});