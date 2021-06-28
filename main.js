canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
rover_X=10;
rover_Y=10;
background_image="download(1).jpg";
rover_image="download.jpg";
function add(){
    background_tag=new Image();
    background_tag.onload=uploadbackground;
    background_tag.src=background_image;

     rover_tag=new Image();
    rover_tag.onload=uploadrover;
    rover_tag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_tag,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("up");
    }

    if(keypressed=="40"){
        down();
        console.log("down");
    }

    if(keypressed=="37"){
        left();
        console.log("left");
    }

    if(keypressed=="39"){
        right();
        console.log("right");
    }
}