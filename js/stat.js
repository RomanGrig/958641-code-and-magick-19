'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 90;
var GAP = 10;
var FONT_GAP = 16;
var LITLE_GAP = 5;
var BAR_HEIGHT = (GAP + FONT_GAP) * 4 + LITLE_GAP * 2 - CLOUD_HEIGHT;
var BAR_WIDTH = 40;
var BAR_SPACE = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + CLOUD_X - GAP, y - CLOUD_Y + GAP);
  ctx.lineTo(x + CLOUD_X * 3 + GAP, y - CLOUD_Y + GAP);
  ctx.lineTo(x + CLOUD_X * 4 + GAP, y);
  ctx.lineTo(x + CLOUD_X * 4 + GAP, y + CLOUD_Y * 2 + GAP);
  ctx.lineTo(x, y + CLOUD_Y * 2 + GAP);
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 220, 36);
  ctx.fillText('Список результатов:', 210, 57);

  var maxTime = Math.round(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    times[i] = Math.round(times[i]);

    var barX = CLOUD_X + BAR_WIDTH + (BAR_SPACE + BAR_WIDTH) * i;


    if (times[i] === maxTime) {
      ctx.fillStyle = 'hsl(240, ' + 100 * times[i] / maxTime + '%, 50%)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + 100 * times[i] / maxTime + '%, 50%)';
    }
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(barX, (GAP + FONT_GAP) * 3 + LITLE_GAP + GAP - BAR_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(times[i], barX, CLOUD_HEIGHT + BAR_HEIGHT * times[i] / maxTime - GAP * 3);
    ctx.fillText(names[i], barX, (GAP + FONT_GAP) * 4 + LITLE_GAP * 2 - BAR_HEIGHT);
  }
};
