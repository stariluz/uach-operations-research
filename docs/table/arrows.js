
const drawArrow = (
    canvas, source, target,
    {
        boardX, boardY
    }
) => {
    const ctx = canvas.getContext('2d');

    // console.log(source.getBoundingClientRect(), target.getBoundingClientRect());
    var {
        x: sourceX,
        y: sourceY,
        width: sourceWidth,
        height: sourceHeight } = source.getBoundingClientRect();
    var {
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

    // We need to adjust everything to the dpi because the canvas is adjusted to this dpi.
    const dpi = window.devicePixelRatio;
    boardX *= dpi;
    boardY *= dpi;
    sourceX *= dpi;
    sourceY *= dpi;
    sourceWidth *= dpi;
    sourceHeight *= dpi;
    targetX *= dpi;
    targetY *= dpi;
    targetWidth *= dpi;
    targetHeight *= dpi;

    const r = 12*dpi;

    const startA = {
        x: sourceX - boardX + sourceWidth / 2,
        y: sourceY - boardY + sourceHeight / 2,
    }
    const endA = {
        x: targetX - boardX + targetWidth / 2,
        y: targetY - boardY + targetHeight / 2,
    }
    const startOp = Math.cos(Math.atan(Math.abs((startA.y - endA.y) / (startA.x - endA.x))));
    const endOp = Math.sin(Math.atan(Math.abs((startA.y - endA.y) / (startA.x - endA.x))));
    // console.log(startOp, endOp);
    // console.log(source,(startA.y > endA.y ? 1 : -1), r * endOp);
    const start = {
        x: startA.x + (startA.x > endA.x ? -1 : 1) * r * startOp,
        y: startA.y - (startA.y > endA.y ? 1 : -1) * r * endOp,
    }
    const end = {
        x: endA.x - (startA.x > endA.x ? -1 : 1) * r * startOp,
        y: endA.y + (startA.y > endA.y ? 1 : -1) * r * endOp,
    }

    ctx.fillStyle = '#2f8473';
    ctx.strokeStyle = '#2f8473';

    const lineWidth = 1 * dpi;
    // draw line from start to end
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    const circleRadius = 1 * dpi;
    // draw circle at beginning of line
    ctx.beginPath();
    ctx.arc(start.x, start.y, circleRadius, 0, Math.PI * 2, true);
    ctx.fill();

    const arrowLength = 4 * dpi;
    const arrowWidth = 3 * dpi;
    // draw pointer at end of line (needs rotation)
    ctx.beginPath();
    var angle = Math.atan2(end.y - start.y, end.x - start.x);
    ctx.translate(end.x, end.y);
    ctx.rotate(angle);
    ctx.moveTo(arrowLength, 0);
    ctx.lineTo(-arrowLength, -arrowWidth);
    ctx.lineTo(-arrowLength, arrowWidth);
    ctx.lineTo(arrowLength, 0);
    ctx.fill();

    // reset canvas context
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    return canvas;
}
