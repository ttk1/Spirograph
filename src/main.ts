const POINT_SIZE = 1;
const R = 300; // 外側の円の半径
const r = 0.3; // 外側の円に対する、内側の円の半径の比
const s = 0.8; // 内側の円の鉛筆を刺す位置（0が中心で、1が一番外側）

window.onload = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 2 * R;
  canvas.height = 2 * R;
  document.body.appendChild(canvas);
  const context = canvas.getContext('2d');

  refresh();
  let t = 0;
  setInterval(() => {
    drawPoint(t);
    t += 0.01;
  }, 5);

  function drawPoint(theta: number) {
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(
      R + R * (1 - r) * Math.cos(theta) + R * r * s * Math.cos(theta / r),
      R + R * (1 - r) * Math.sin(theta) + R * r * s * Math.sin(theta / r),
      POINT_SIZE / 2, 0, 2 * Math.PI, true
    );
    context.fill();
  }

  function refresh() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, 2 * R, 2 * R);
  }
};
