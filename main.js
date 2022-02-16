
function clickME() {
    let click_circle_text = document.getElementById("circle1-text").textContent; //getElementById() not getElementByID() Which you corrected in edit
    let click_num = Number(click_circle_text) + 1; 
    document.getElementById("circle1-text").textContent = String(click_num);
 }

 const circle1 = document.getElementById("circle1");
 circle1.addEventListener("click", clickME);

 function disappear() {
    let circle3 = document.getElementById("circle3");
    if (circle3.style.getPropertyValue("opacity") == 1) {
        circle3.style.setProperty("opacity", 0);
    } else {
        circle3.style.setProperty("opacity", 1);
    }
 }

 const circle3 = document.getElementById("circle3");
 circle3.addEventListener("click", disappear);