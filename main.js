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
        block_image_object.scaleToHeight(140);
        block_image_object.scaleToWidth(150);
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
}
