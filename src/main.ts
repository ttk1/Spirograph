const WIDTH = 500;
const HEIGHT = 500;
const POINT_SIZE = 5;

window.onload = () => {
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  document.body.appendChild(canvas);
  const context = canvas.getContext('2d');

  refresh();
  for (let i = 0; i < 100; i++) {
    drawPoint(
      Math.random() - 0.5,
      Math.random() - 0.5
    );
  }

  function drawPoint(x: number, y: number) {
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(
      WIDTH * (x + 0.5),
      HEIGHT * (y + 0.5),
      POINT_SIZE, 0, 2 * Math.PI, true
    );
    context.fill();
  }

  function refresh() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, WIDTH, HEIGHT);
  }
};
