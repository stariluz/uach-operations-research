const boards = document.querySelectorAll(".board-js")||[];
boards.forEach((board) => {
    // console.log(board);
    const arrowsToDraw = board.querySelectorAll("[data-arrowTo]") || [];
    // console.log(arrowsToDraw);
    arrowsToDraw.forEach(
        (source) => {
            const [posX, posY] = source.dataset.arrowto.split(',').map(value => Number(value));
            // console.log(posX, posY);
            const target = board.children[posX].children[posY].getElementsByClassName('value')[0];
    
            drawArrow(source, target, board);
        }
    );
});