'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // shadow;
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = -150; // px;
  var step = histogramHeight / max; // px;


  var barWidth = 40; // px;
  var indentSignature = 20; // px;
  var indent = 90; // px;
  var initialX = 140; // px;
  var initialY = 240; // px;

  ctx.textBaseline = 'bottom'; // положение надписи от левого нижнего угла
  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba' + '(' + '0, 0, 255, ' + Math.random() + ')'; // opacity of blue color generated randomly
    }

    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
    ctx.fillStyle = '#000'; // black;
    ctx.fillText(names[i], initialX + indent * i, initialY + indentSignature);
    ctx.fillText(times[i].toFixed(0), initialX + indent * i, initialY + times[i] * step);
  }
};

