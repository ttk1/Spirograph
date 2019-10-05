const WIDTH = 500;
const HEIGHT = 500;
const POINT_SIZE = 1;

window.onload = () => {
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  document.body.appendChild(canvas);
  const context = canvas.getContext('2d');

  refresh();
  for (let step = 0; step < 50000; step++) {
    drawPoint(
      Math.cos(2 * Math.PI * (step / 100)) / (2.1 + step / 100),
      Math.sin(2 * Math.PI * (step / 100)) / (2.1 + step / 100)
    );
  }

  function drawPoint(x: number, y: number) {
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(
      WIDTH * (x + 0.5),
      HEIGHT * (y + 0.5),
      POINT_SIZE / 2, 0, 2 * Math.PI, true
    );
    context.fill();
  }

  function refresh() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, WIDTH, HEIGHT);
  }
};
