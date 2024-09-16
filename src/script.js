'use strict';

// Ігрове поле
const board = [
    ['♠', '♠', '♣', '♦', '♣', '♠'],
    ['♠', '♠', '♣', '♦', '♦', '♣'],
    ['♠', '♣', '♣', '♠', '♠', '♣'],
    ['♥', '♥', '♣', '♣', '♣', '♣'],
    ['♥', '♥', '♠', '♠', '♠', '♠'],
    ['♥', '♥', '♠', '♠', '♠', '♠']
];

function renderBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (board[row][col] === null) {
                cell.classList.add('empty');
            } else {
                cell.textContent = board[row][col];
            }
            cell.addEventListener('click', () => handleClick(row, col));
            gameBoard.appendChild(cell);
        }
    }
}

// Пошук та видалення елементів
function handleClick(row, col) {
    const symbol = board[row][col];
    if (!symbol) return;

    checkAndClear(row, col, symbol);

    renderBoard();
}

// Функція видаляє елементи, якщо вони з'єднані
function checkAndClear(row, col, symbol) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== symbol) {
        return;
    }

    board[row][col] = null;
    checkAndClear(row - 1, col, symbol);
    checkAndClear(row + 1, col, symbol);
    checkAndClear(row, col - 1, symbol);
    checkAndClear(row, col + 1, symbol);
}

renderBoard();
