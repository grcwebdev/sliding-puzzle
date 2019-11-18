import './scss/style.scss';
  
window.addEventListener('load', function() {
    // Default Blank Space and board array
    let blankX = 3;
    let blankY = 3;
    let board = [];
    // All li number elements
    let numbers = document.getElementsByTagName('li');
    // Targets clicked li element
    let pieceClicked = (e) => {
        // Checks board array to see x and y coordinates
        board.forEach(function(item) {
            if(e.target.className == item.tile) {
                console.log(`Current x: ${item.x}`);
                console.log(`Current y: ${item.y}`);
                // Check if up is available
                if((item.y-1 == blankY) && (item.x == blankX)) {
                    console.log("UP");
                    let newY = blankY;
                    blankY = item.y;
                    item.y = newY;
                    e.target.style.gridRowStart = newY;
                    e.target.style.gridRowEnd = newY+1;
                } 
                // Check if down is available
                else if((item.y+1 == blankY) && (item.x == blankX)) {
                    console.log("DOWN");
                    let newY = blankY;
                    blankY = item.y;
                    item.y = newY;
                    e.target.style.gridRowStart = newY;
                    e.target.style.gridRowEnd = newY+1;
                }
                // Check if left is available
                else if((item.y == blankY) && (item.x-1 == blankX)) {
                    console.log("LEFT");
                    let newX = blankX;
                    blankX = item.x;
                    item.x = newX;
                    e.target.style.gridColumnStart = newX;
                    e.target.style.gridColumnEnd = newX+1;
                }
                // Check if right is available
                else if ((parseInt(item.y) == blankY) && (item.x+1 == blankX)) {
                    console.log("RIGHT");
                    let newX = blankX;
                    blankX = item.x;
                    item.x = newX;
                    e.target.style.gridColumnStart = newX;
                    e.target.style.gridColumnEnd = newX+1;
                };
            };
        });
    }
    // Adds event listener to all li and styles inline
    for(let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let styles = window.getComputedStyle(number);
        let x = parseInt(styles.gridColumnStart);
        let y = parseInt(styles.gridRowStart);
        number.style.gridColumnStart = x;
        number.style.gridColumnEnd = x+1;
        number.style.gridRowStart = y;
        number.style.gridRowEnd = y+1;
        let tile = number.className;
        let tileInfo = {
            x,y,tile
        }
        board.push(tileInfo);
        number.addEventListener("click", pieceClicked);
    }
});