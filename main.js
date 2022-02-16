function button1Clicked() {
    let countClicks = 0;
    function upCount() { 

        if(document.getElementById('circle1')) {
            countClicks++;
            alert(countClicks);
            return true;
        } else {
            return false;
        }

    };
}
