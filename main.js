canvas = new fabric.Canvas('myCanvas');
playerX = 10;
playerY = 10;

block_Image_height = 30;
block_Image_width = 30;
player_object = "";
block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){ 
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: playerY,
            left: playerX
        });
        canvas.add(player_object);

     } );
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){ 
        block_image_object = Img;
        block_image_object.scaleToWidth(block_Image_width);
        block_image_object.scaleToHeight(block_Image_height);
        block_image_object.set({
            top: playerY,
            left: playerX
        });
        canvas.add(block_image_object);
        
     } );
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80'){
        console.log("shift and p pressed together");
        block_Image_width = block_Image_width + 10;
        block_Image_height = block_Image_height + 10;
        document.getElementById("current_width").innerHTML = block_Image_width;
        document.getElementById("current_height").innerHTML = block_Image_height;
    }

    if(e.shiftKey == true && keypressed == '77'){
        console.log("shift and m pressed together");
        block_Image_width = block_Image_width - 10;
        block_Image_height = block_Image_height - 10;
        document.getElementById("current_width").innerHTML = block_Image_width;
        document.getElementById("current_height").innerHTML = block_Image_height;
    }

    if(keypressed == '38'){
        console.log("Up arrow is pressed");
        up();
    }

    if(keypressed == '39'){
        console.log("Right arrow is pressed");
        right();
    }

    if(keypressed == '40'){
        console.log("Down arrow is pressed");
        down();
    }

    if(keypressed == '37'){
        console.log("Left arrow is pressed");
        left();
    }

    if(keypressed == '87'){
        console.log("w is pressed");
        new_image('wall.jpg');
    }

    if(keypressed == '71'){
        console.log("g is pressed");
        new_image('ground.png');
    }

    if(keypressed == '76'){
        console.log("l is pressed");
        new_image('light_green.png');
    }

    if(keypressed == '84'){
        console.log("t is pressed");
        new_image('trunk.jpg');
    }

    if(keypressed == '82'){
        console.log("r is pressed");
        new_image('roof.jpg');
    }

    if(keypressed == '89'){
        console.log("y is pressed");
        new_image('yellow_wall.png');
    }

    if(keypressed == '68'){
        console.log("d is pressed");
        new_image('dark_green.png');
    }

    if(keypressed == '85'){
        console.log("u is pressed");
        new_image('unique.png');
    }

    if(keypressed == '67'){
        console.log("c is pressed");
        new_image('cloud.jpg');
    }
}

function up(){
    if(playerY >=0){
        playerY = playerY - block_Image_height;
        console.log("Block image height" + block_Image_height);
        console.log("when up arrow is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(playerY <=500){
        playerY = playerY + block_Image_height;
        console.log("Block image height" + block_Image_height);
        console.log("when down arrow is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(playerX >=0){
        playerX = playerX - block_Image_width;
        console.log("Block image width" + block_Image_width);
        console.log("when left arrow is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(playerX <=850){
        playerX = playerX + block_Image_width;
        console.log("Block image width" + block_Image_width);
        console.log("when right arrow is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        player_update();
    }
}


