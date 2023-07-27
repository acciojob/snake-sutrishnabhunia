//your code here
document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('gameContainer');
  const scoreDisplay = document.getElementById('score');
  const gridWidth = 40;
  const gridHeight = 40;
  let score = 0;

  // Create the grid with pixels
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = 'pixel' + (i + 1);
    gameContainer.appendChild(pixel);
  }

  // Snake initial position
  let snakePosition = [{ row: 20, col: 1 }];

  // Render the snake on the grid
  function renderSnake() {
    snakePosition.forEach((pos, index) => {
      const pixel = document.getElementById(`pixel${pos.row * gridWidth + pos.col}`);
      pixel.classList.add('snakeBodyPixel');
    });
  }

  // Move the snake
  function moveSnake() {
    const head = { ...snakePosition[0] };
    head.col++;
    snakePosition.unshift(head);

    const tail = snakePosition.pop();
    const tailPixel = document.getElementById(`pixel${tail.row * gridWidth + tail.col}`);
    tailPixel.classList.remove('snakeBodyPixel');
  }

  // Game loop to update the snake position every 100ms
  function gameLoop() {
    moveSnake();
    renderSnake();
    setTimeout(gameLoop, 100);
  }

  // Start the game loop
  gameLoop();
});
