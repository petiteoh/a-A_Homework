document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    ctx.fillStyle = "red";
    ctx.fillRect(20,10,200,100);

    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
});
