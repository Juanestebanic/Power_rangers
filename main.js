

// Crea la variable del canvas
var lienzo=new fabric.Canvas("lienzo")

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   // para subir las imágenes
   fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:block_y,
        left:block_x
    });
    lienzo.add(block_image_object);
   });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') // añade los códigos de las teclas
   {
        block_x = 25;    
       // sube al ranger rojo
       new_image("rr1.png")
       console.log("r")
   }
   if(keyPressed == '71')
   {
       block_x = 220;
       // sube al ranger verde
       new_image("gr.png")
       console.log("v")
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       // sube al ranger amarillo
       new_image("yr.png")
       console.log("a")
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       // sube al ranger rosa
       new_image("pr.png")
       console.log("p")
   }
   if(keyPressed == '66')
   {
       block_x = 610;
   // sube al ranger azul
   new_image("br.png")
   console.log("b")
   }
   
}