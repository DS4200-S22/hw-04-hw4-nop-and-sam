
function clickME() {
    let click = document.getElementById("circle1-text").textContent; //getElementById() not getElementByID() Which you corrected in edit
    let click_num = Number(click) + 1; 
    document.getElementById("circle1-text") = String(click_num);
 }

 const Circle1 = document.getElementById("circle1");

 Circle1.addEventListener("click", clickME);