const convertToHDPICanvas = (can, x, y, width, height) => {
    const dpi = window.devicePixelRatio;
    can.width = width * dpi;
    can.height = height * dpi;
    can.style.left = x + "px";
    can.style.top = y + "px";
    can.style.width = width + "px";
    can.style.height = height + "px";

    return can;
}

const boards = document.querySelectorAll(".board-js") || [];
boards.forEach((board) => {
    // console.log(board);
    const arrowsToDraw = board.querySelectorAll("[data-arrowTo]") || [];
    // console.log(arrowsToDraw);

    const boardId = board.id.split('-');
    const boardNumber = boardId[boardId.length - 1];
    var canvas = document.getElementById(`arrows-${boardNumber}`);

    var {
        width: boardWidth,
        height: boardHeight,
        x: boardX,
        y: boardY,
    } = board.getBoundingClientRect();

    canvas = convertToHDPICanvas(canvas, boardX, boardY, boardWidth, boardHeight);

    arrowsToDraw.forEach(
        (source) => {
            const [posX, posY] = source.dataset.arrowto.split(',').map(value => Number(value));
            // console.log(posX, posY);
            const target = board.children[posX].children[posY].getElementsByClassName('value')[0];
            drawArrow(canvas, source, target, { boardX, boardY });
        }
    );
});