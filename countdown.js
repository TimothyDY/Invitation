var countDownDate = new Date("Jul 19,2025 12:30:00");
var x = setInterval(function(){
    var now = new Date().getTime();
    var cd = countDownDate - now;
    
    var days = Math.floor(cd / (1000 * 60 * 60 * 24));
    var hours = Math.floor((cd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((cd % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((cd % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(cd < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);