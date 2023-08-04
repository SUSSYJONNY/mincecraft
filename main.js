var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x

        });
        canvas.add(player_object);
    })
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top: player_y, left: player_x

        });
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown", my_keyown);

function my_keyown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '67') {
        console.log("c e shift pressionadas ao mesmo tempo");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("currentWidth").innerHTML = block_image_width
        document.getElementById("currentHeight").innerHTML = block_image_height
    }
    if (e.shiftKey == true && keyPressed == '68') {
        if (block_image_height && block_image_width > 10) {
            console.log("d e shift pressionadas ao mesmo tempo");
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10;
            document.getElementById("currentWidth").innerHTML = block_image_width
            document.getElementById("currentHeight").innerHTML = block_image_height

        } else {
            console.log("tamanho minimo alcançado")

        }
    }
    if (keyPressed == '38') {
        up();
        console.log("cima")
    }
    if (keyPressed == '40') {
        down();
        console.log("baixo")
    }
    if (keyPressed == '37') {
        left();
        console.log("esquerda")
    }
    if (keyPressed == '39') {
        right();
        console.log("direita")
    }
    if (keyPressed == '80') {
        new_image('wall.png');
        console.log("p");
    }

    if (keyPressed == '80') {
        new_image('wall.png');
        console.log("p");
    }

    if (keyPressed == '71') {
        new_image('ground.png');
        console.log("g");
    }

    if (keyPressed == '86') {
        new_image('light_green.png');
        console.log("v");
    }

    if (keyPressed == '77') {
        new_image('trunk.jpg');
        console.log("m");
    }

    if (keyPressed == '84') {
        new_image('roof.jpg');
        console.log("t");
    }

    if (keyPressed == '65') {
        new_image('yellow_wall.png');
        console.log("a");
    }

    if (keyPressed == '69') {
        new_image('dark_green.png');
        console.log("e");
    }

    if (keyPressed == '85') {
        new_image('unique.png');
        console.log("u");
    }

    if (keyPressed == '78') {
        new_image('cloud.jpg');
        console.log("n");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("altura da imagem do bloco = " +block_image_height);
        console.log("quando seta para cima e pressionada = x= " +player_x+ " , y= " +player_y);
        canvas.remove(player_object);
        player_update();
    }
} 
function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("altura da imagem do bloco = " +block_image_height);
        console.log("quando seta para baixo e pressionada = x= " +player_x+ " , y= " +player_y);
        canvas.remove(player_object);
        player_update();
    }
} 
function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("largura da imagem do bloco = " +block_image_width);
        console.log("quando seta para esquerda e pressionada = x= " +player_x+ " , y= " +player_y);
        canvas.remove(player_object);
        player_update();
    }
} 
function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("largura da imagem do bloco = " +block_image_width);
        console.log("quando seta para cima e pressionada = x= " +player_x+ " , y= " +player_y);
        canvas.remove(player_object);
        player_update();
    }
}