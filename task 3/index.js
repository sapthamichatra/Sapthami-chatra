// script.js
document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const statusMessage = document.getElementById("status-message");
    const resetButton = document.getElementById("reset-button");

    const PLAYER_X = 'X';
    const PLAYER_O = 'O';
    let currentPlayer = PLAYER_X;
    let gameActive = true;
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    // Initialize the game board
    function initializeBoard() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = PLAYER_X;
        gameActive = true;
        statusMessage.textContent = `Player ${currentPlayer}'s turn`;
        renderBoard();
    }

    // Render the game board UI
    function renderBoard() {
        board.innerHTML = '';
        gameBoard.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell;
            cellElement.addEventListener('click', () => cellClick(index));
            board.appendChild(cellElement);

            // Add class to mark X or O with appropriate color
            if (cell === PLAYER_X) {
                cellElement.classList.add('x-mark');
            } else if (cell === PLAYER_O) {
                cellElement.classList.add('o-mark');
            }
        });
    }

    // Handle cell click event
    function cellClick(index) {
        if (!gameActive || gameBoard[index] !== '') return;
        
        gameBoard[index] = currentPlayer;
        renderBoard();
        
        if (checkWin(currentPlayer)) {
            statusMessage.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            statusMessage.textContent = `It's a draw!`;
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
            statusMessage.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    // Check if the current player has won
    function checkWin(player) {
        return winningConditions.some(condition => 
            condition.every(index => gameBoard[index] === player)
        );
    }

    // Check if it's a draw
    function checkDraw() {
        return gameBoard.every(cell => cell !== '');
    }

    // Reset the game
    resetButton.addEventListener('click', initializeBoard);

    // Initialize the game
    initializeBoard();
});
