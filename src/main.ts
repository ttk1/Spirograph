import TP from 'tweakpane';

const POINT_SIZE = 1;
const CANVAS_SIZE = 500;

const PARAMS = {
  R: 250, // 外側の円の半径
  r: 0.3, // 外側の円に対する、内側の円の半径の比
  s: 0.8  // 鉛筆を刺す位置（0が中心で、1が一番外側）
};

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;
  const context = canvas.getContext('2d');

  const paneContainer = document.getElementById('pane');
  paneContainer.style.width = '500px';
  const Tweakpane = require('tweakpane');
  const pane = new Tweakpane({
    container: paneContainer,
  }) as TP;

  refresh();
  let t = 0;
  setInterval(() => {
    drawPoint(t);
    t += 0.01;
  }, 5);

  pane.addInput(PARAMS, 'R', {
    label: '外側の円の半径',
    min: 1,
    max: 250,
    step: 1
  }).on('change', () => {
    t = 0;
    refresh();
  });

  pane.addInput(PARAMS, 'r', {
    label: '外側の円に対する、内側の円の半径の比',
    min: 0,
    max: 1,
    step: 0.01
  }).on('change', () => {
    t = 0;
    refresh();
  });

  pane.addInput(PARAMS, 's', {
    label: '鉛筆を刺す位置（0が中心で、1が一番外側）',
    min: 0,
    max: 1,
    step: 0.01
  }).on('change', () => {
    t = 0;
    refresh();
  });

  function drawPoint(theta: number) {
    const R = PARAMS.R;
    const r = PARAMS.r;
    const s = PARAMS.s;
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
    context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
};
