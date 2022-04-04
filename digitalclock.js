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

function timeselection(){

    var p = document.getElementById('morning').value;
    var q = document.getElementById("lunch").value;
    var r = document.getElementById("nap").value;
    var s = document.getElementById("night").value;

    var stund = new Date().getHours();

    if(p==stund){

        document.getElementById("component_image").style.backgroundImage="url(component.jpg)";
        document.getElementById("texta_text").innerHTML="Good morning!! Wake up!";
        document.getElementById("textb_text").innerHTML="Grab some healthy breakfast";
    }

    if(q==stund){
        document.getElementById("component_image").style.backgroundImage="url(lunch_image.png)";
        document.getElementById("texta_text").innerHTML="Good afternoon !! Take some sleep";
        document.getElementById("textb_text").innerHTML="Let's have some lunch !!";
    }

    if(r==stund){
        document.getElementById("component_image").style.backgroundImage="url(evening_image.jpg)";
        document.getElementById("texta_text").innerHTML="Good evening"
        document.getElementById("textb_text").innerHTML="Stop Yawning,get some tea.. it's just evening";
    }

    if(s==stund){
        document.getElementById("component_image").style.backgroundImage="url(night_image.jpg)";
        document.getElementById("texta_text").innerHTML="Good night"
        document.getElementById("texta_text").innerHTML="Close your eyes and go to sleep"
    } 
    getOption()
}

    function getOption() {


        var e = document.getElementById("morning");
        var text1 = e.options[e.selectedIndex].text;
        
        var f = document.getElementById("lunch");
        var text2 = f.options[f.selectedIndex].text;
        
        var g = document.getElementById("nap");
        var text3 = g.options[g.selectedIndex].text;

        var h = document.getElementById("night");
        var text4 = h.options[h.selectedIndex].text;
        
        
             var idExist = document.getElementById("timings");
            if(idExist){
                idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3} <br> Sleep Time : ${text4}`;
            }
         
        }
        

// function updatediv() {
//   var invalue = document.getElementById("morning");
//   var value = invalue.options[invalue.selectedIndex].text;
//   document.getElementById("timing1").innerHTML = value;

//   var invalue = document.getElementById("lunch");
//   var value = invalue.options[invalue.selectedIndex].text;
//   document.getElementById("timing2").innerHTML = value;

//   var invalue = document.getElementById("nap");
//   var value = invalue.options[invalue.selectedIndex].text;
//   document.getElementById("timing3").innerHTML = value;

//   var invalue = document.getElementById("night");
//   var value = invalue.options[invalue.selectedIndex].text;
//   document.getElementById("timing4").innerHTML = value;
// }
//     function timeselection() {
//         var a = document.getElementById("morning").value;
//         var b = document.getElementById("lunch").value;
//         var c = document.getElementById("nap").value;
//         var d = document.getElementById("night").value;
//         var hourr = new Date().getHours();
//         if (a==hourr){
//             document.getElementById("component_image").style.backgroundImage="url(component.jpg)";
//             document.getElementById("texta_text").innerHTML="Good morning!! Wake up!";
//             document.getElementById("textb_text").innerHTML="Grab some healthy breakfast";
//         }
//         if (b==hourr){
//             document.getElementById("component_image").style.backgroundImage="url(lunch_image.png)";
//             document.getElementById("texta_text").innerHTML="Good afternoon !! Take some sleep";
//             document.getElementById("textb_text").innerHTML="Let's have some lunch !!";
//         }
//         if (c==hourr){
//             document.getElementById("component_image").style.backgroundImage="url(evening_image.jpg)";
//             document.getElementById("texta_text").innerHTML="Good evening"
//             document.getElementById("textb_text").innerHTML="Stop Yawning,get some tea.. it's just evening";
//         }
//         if (d==hourr) {
//             document.getElementById("component_image").style.backgroundImage="url(night_image.jpg)";
//             document.getElementById("texta_text").innerHTML="Good night"
//             document.getElementById("texta_text").innerHTML="Close your eyes and go to sleep"
//         }
//         settime();
//     }