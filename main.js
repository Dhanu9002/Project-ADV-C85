canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width=100;
car_height=90;

car_x=10;
car_y=10;

car_img="gcar.jpg";
background_img="bgsuper.jpg";

function add(){

    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car_imgTag=new Image();
    car_imgTag.onload=uploadCar;
    car_imgTag.src=car_img;


}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37'){
        left();
        console.log("The left arrow key is pressed.");
    }
    else if(keyPressed == '38'){
        up();
        console.log("The up arrow key is pressed.");
    }
    else if(keyPressed == '39'){
        right();
        console.log("The right arrow key is pressed.");
    }
    else if(keyPressed == '40'){
        down();
        console.log("The down arrow key is pressed.");
    }
}




function up(){

    if(car_y>=0){
        car_y=car_y-10;
        console.log("When up key pressed, x = "+car_x+" and y = "+car_y);
        uploadBackground();
        uploadCar();
    }
}

function down(){
     
    if(car_y<=500){
        car_y=car_y+10;
        console.log("When down key pressed, x = "+car_x+" and y = "+car_y);
        uploadBackground();
        uploadCar();
    }
}

function right(){

    if(car_x<=700){
        car_x=car_x+10;
        console.log("When right key pressed, x = "+car_x+" and y = "+car_y);
        uploadBackground();
        uploadCar();
    }
}

function left(){

    if(car_x>=0){
        car_x=car_x-10;
        console.log("When up key pressed, x = "+car_x+" and y = "+car_y);
        uploadBackground();
        uploadCar();
    }
}