var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


createHiDPICanvas = function (x,y,w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.left = x+"px";
    can.style.top = y+"px";
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

//Create canvas with the device resolution.
var myCanvas = createHiDPICanvas(500, 250);

const drawArrow = (source, target, board) => {
    var body = document.querySelector("body");
    var {
        width: boardWidth,
        height: boardHeight,
        x: boardX,
        y: boardY,
    } = board.getBoundingClientRect();

    var canvas = createHiDPICanvas(boardX,boardY,boardWidth, boardHeight);
    const ctx = canvas.getContext('2d');
    
    canvas.classList.add('arrow')
    body.appendChild(canvas);


    // console.log(source.getBoundingClientRect(), target.getBoundingClientRect());
    const {
        x: sourceX,
        y: sourceY,
        width: sourceWidth,
        height: sourceHeight } = source.getBoundingClientRect();
    const {
        x: targetX,
        y: targetY,
        width: targetWidth,
        height: targetHeight } = target.getBoundingClientRect();
    // console.log(
    //     sourceX + sourceWidth / 2,
    //     sourceY + sourceHeight / 2,
    //     targetX + targetWidth / 2,
    //     targetY + targetHeight / 2,
    // );

    const startA = {
        x: sourceX - boardX + sourceWidth / 2,
        y: sourceY - boardY + sourceHeight / 2,
    }
    const endA = {
        x: targetX - boardX + targetWidth / 2,
        y: targetY - boardY + targetHeight / 2,
    }
    const r = 10;
    const startOp = Math.cos(Math.atan((startA.y - endA.y) / (startA.x - endA.x)));
    const endOp = Math.sin(Math.atan((startA.y - endA.y) / (startA.x - endA.x)));
    // console.log(startOp, endOp);
    const start = {
        x: startA.x + (startA.x > endA.x ? -1 : 1) * r * startOp,
        y: startA.y - (startA.y > endA.y ? -1 : 1)*r * endOp,
    }
    const end = {
        x: endA.x - (startA.x > endA.x ? -1 : 1) * r * startOp,
        y: endA.y + (startA.y > endA.y ? -1 : 1) * r * endOp,
    }

    ctx.fillStyle = 'steelblue';
    ctx.strokeStyle = 'steelblue';

    // draw line from start to end
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // draw circle at beginning of line
    ctx.beginPath();
    ctx.arc(start.x, start.y, 1, 0, Math.PI * 2, true);
    ctx.fill();

    // draw pointer at end of line (needs rotation)
    ctx.beginPath();
    var angle = Math.atan2(end.y - start.y, end.x - start.x);
    ctx.translate(end.x, end.y);
    ctx.rotate(angle);
    ctx.moveTo(0, 0);
    ctx.lineTo(-5, -4);
    ctx.lineTo(-5, 4);
    ctx.lineTo(0, 0);
    ctx.fill();

    // reset canvas context
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    return canvas;
}
