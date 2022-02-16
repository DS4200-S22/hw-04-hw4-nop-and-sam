
function clickME() {
    let click_circle_text = document.getElementById("circle1-text").textContent; //getElementById() not getElementByID() Which you corrected in edit
    let click_num = Number(click_circle_text) + 1; 
    document.getElementById("circle1-text") = String(click_num);
 }

 const circle1 = document.getElementById("circle1");

 circle1.addEventListener("click", clickME, true);