canvas = document.getElementById("my_canvas");

ctx = canvas.getContext("2d");


canvas.addEventListener("mousedown", mousedown);

function mousedown(e){

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + ", Y = " + mouse_y);
    circle(mouse_x, mouse_y);

}

function circle(mouse_x, mouse_y) {

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.rect(200, 143, 400, 220);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(300, 230, 40, 0, 2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(350, 270, 40, 0, 2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(400, 230, 40, 0, 2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(450, 270, 40, 0, 2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(500, 230, 40, 0, 2* Math.PI);
    ctx.stroke();

}


