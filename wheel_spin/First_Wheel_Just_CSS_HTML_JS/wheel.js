function wheelSpin(){

    var x = 1024; //min
    var y = 9999; //max

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

    var element = document.getElementById('mainbox')
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000);
}

// Create new wheel object specifying the parameters at creation time.
let theWheel = new Winwheel({
    'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
    'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
    'textFontSize'    : 24,         // Set default font size for the segments.
    'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
    'textAlignment'   : 'outer',    // Align text to outside of wheel.
    'numSegments'     : 10,         // Specify number of segments.
    'segments'        :             // Define segments including colour and text.
    [                               // font size and test colour overridden on backrupt segments.
       {'fillStyle' : '#ee1c24', 'text' : '300'},
       {'fillStyle' : '#3cb878', 'text' : '450'},
       {'fillStyle' : '#f6989d', 'text' : '600'},
       {'fillStyle' : '#00aef0', 'text' : '750'},
       {'fillStyle' : '#f26522', 'text' : '500'},
       {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
       {'fillStyle' : '#e70697', 'text' : '3000'},
       {'fillStyle' : '#fff200', 'text' : '600'},
       {'fillStyle' : '#f6989d', 'text' : '700'},
       {'fillStyle' : '#ee1c24', 'text' : '350'},
       {'fillStyle' : '#3cb878', 'text' : '500'},
       {'fillStyle' : '#f26522', 'text' : '800'},
       {'fillStyle' : '#a186be', 'text' : '300'},
       {'fillStyle' : '#fff200', 'text' : '400'},
       {'fillStyle' : '#00aef0', 'text' : '650'},
       {'fillStyle' : '#ee1c24', 'text' : '1000'},
       {'fillStyle' : '#f6989d', 'text' : '500'},
       {'fillStyle' : '#f26522', 'text' : '400'},
       {'fillStyle' : '#3cb878', 'text' : '900'},
       {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
       {'fillStyle' : '#a186be', 'text' : '600'},
       {'fillStyle' : '#fff200', 'text' : '700'},
       {'fillStyle' : '#00aef0', 'text' : '800'},
       {'fillStyle' : '#ffffff', 'text' : 'LOOSE TURN', 'textFontSize' : 12}
    ],
    'animation' :           // Specify the animation to use.
    {
        'type'     : 'spinToStop',
        'duration' : 5,    // Duration in seconds.
        'spins'    : 3,     // Default number of complete spins.
    },
    'pins' :				// Turn pins on.
    {
        'number'     : 24,
        'fillStyle'  : 'silver',
        'outerRadius': 4,
    }
});



// Vars used by the code in this page to do power controls.
let wheelPower    = 1;
let wheelSpinning = false;

