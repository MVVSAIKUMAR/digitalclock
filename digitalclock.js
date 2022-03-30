function clock(){

    var hours = document.getElementById("hours");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("apm");

    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";

    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);

 function timeselection() 
    {
    var invalue = document.getElementById("morning");
    var invalue = document.getElementById("lunch");
    var invalue = document.getElementById("nap");
    var invalue = document.getAnimations("night");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("things").innerText="value"
}
    function settime() {
        var a = document.getElementById("morning").value;
        var b = document.getElementById("lunch").value;
        var c = document.getElementById("nap").value;
        var d = document.getElementById("night").value;
        var hourr = new Date().getHours();
        case "a==hourr";{
            document.getElementById("component_image").style.backgroundImage="url(component.jpg)";
            document.getElementById("texta_text").innerHTML="Good morning!! Wake up!";
            document.getElementById("textb_text").innerHTML="Grab some healthy breakfast";
            div_var1 = 1;
        }
        case "b==hourr";{
            document.getElementById("component_image").style.backgroundImage="url(lunch_image.png)";
            document.getElementById("texta_text").innerHTML="Good afternoon !! Take some sleep";
            document.getElementById("textb_text").innerHTML="Let's have some lunch !!";
            div_var2 = 1;
        }
        case "c==hourr";{
            document.getElementById("component_image").style.backgroundImage="url(evening_image.jpg)";
            document.getElementById("texta_text").innerhtml="Good evening"
            document.getElementById("textb_text").innerHTML="Stop Yawning,get some tea.. it's just evening";
            div_var3 = 1;
        }
        case "d==hourr";{
            document.getElementById("component_image").style.backgroundImage="url(night_image.jpg)";
            document.getElementById("texta_text").innerhtml="Good night"
            document.getElementById("texta_text").innerhtml="Close your eyes and go to sleep"
            div_var4 = 1; 
        }
        timeselection();
    }