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
  for (let theta = 0; theta < 20 * Math.PI; theta += 0.001) {
    drawPoint((1 + Math.sin(theta * 1.7)) / 2, theta);
  }

  function drawPoint(r: number, theta: number) {
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(
      WIDTH * (1 + r * Math.cos(theta)) / 2,
      HEIGHT * (1 + r * Math.sin(theta)) / 2,
      POINT_SIZE / 2, 0, 2 * Math.PI, true
    );
    context.fill();
  }

  function refresh() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, WIDTH, HEIGHT);
  }
};
