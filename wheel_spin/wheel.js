function wheelSpin(){

    var x = 1024; //min
    var y = 9999; //max

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";



}