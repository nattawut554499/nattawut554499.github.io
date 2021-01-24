// Some part of code from (Cr.)
// https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mousemove

var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = screen.width;
canvas.height = 50;

var ctx = canvas.getContext("2d");

// create nav linear Cavas
var grd = ctx.createLinearGradient(0, 0, $(window).width(), 0);
grd.addColorStop(0, "#00ffaa");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvas.width, canvas.height);


$("#nav-canvas").mousemove(function (e) {
  var pos = findPos(this);
  var x = e.pageX - pos.x;
  var y = e.pageY - pos.y;
  // var coord = "x=" + x + ", y=" + y;
  var c = this.getContext("2d");
  var p = c.getImageData(x, y, 1, 1).data;
  var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
  
  // $("#status").html(coord + "<br>" + hex);

  // change svg is color
  // $('path').attr('stroke',hex);
  // $('path').attr('fill',hex);

  //change domain color
    $('.domain').css('color',hex);

});

function findPos(obj) {
  var curleft = 0,
    curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return { x: curleft, y: curtop };
  }
  return undefined;
}

function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}




