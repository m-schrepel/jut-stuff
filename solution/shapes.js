

var svg = document.getElementById('container');

function Line(){
  return this;
}
Line.prototype.x1 = function(x1){
  this.x1 = x1;
  return this;
}
Line.prototype.x2 = function(x2){
  this.x2 = x2;
  return this;
}
Line.prototype.y1 = function(y1){
  this.y1 = y1;
  return this;
}
Line.prototype.y2 = function(y2){
  this.y2 = y2;
  return this;
}
Line.prototype.stroke = function(stroke){
  this.stroke = stroke;
  return this;
}
Line.prototype.strokeWidth = function(strokeWidth){
  this.strokeWidth = strokeWidth;
  return this;
}
Line.prototype.draw = function(svg){
  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  line.setAttribute('x1', this.x1);
  line.setAttribute('y1', this.y1);
  line.setAttribute('x2', this.x2);
  line.setAttribute('y2', this.y2);
  line.setAttribute('stroke', this.stroke);
  line.setAttribute('stroke-width', this.strokeWidth);
  svg.appendChild(line);
  return this;
}
function Square(){
  return this;
}
Square.prototype.width = function(width){
  this.width = width;
  this.height = width;
  return this;
}
Square.prototype.center = function(x, y){
  this.x = x;
  this.y = y;
  return this;
}
Square.prototype.stroke = function(stroke){
  this.stroke = stroke;
  return this;
}
Square.prototype.strokeWidth = function(strokeWidth){
  this.strokeWidth = strokeWidth;
  return this;
}
Square.prototype.fill = function(fill){
  this.fill = fill;
  return this;
}
Square.prototype.rx = function(rx){
  this.rx = rx;
  return this;    
}
Square.prototype.ry = function(ry){
  this.ry = ry;
  return this;
}
Square.prototype.draw = function(svg){
  var square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  square.setAttribute('x', (this.x - this.width/2));
  square.setAttribute('rx', this.rx);
  square.setAttribute('y', (this.y - this.width/2));
  square.setAttribute('ry', this.ry);
  square.setAttribute('width', this.width);
  square.setAttribute('height', this.height);
  square.setAttribute('fill', this.fill);
  svg.appendChild(square);
  return this;
}
function Circle(){
  return this;
}   
Circle.prototype.center = function(cx, cy){
  this.cx = cx;
  this.cy = cy;
  return this;
} 
Circle.prototype.stroke = function(stroke){
  this.stroke = stroke;
  return this;
}
Circle.prototype.strokeWidth = function(strokeWidth){
  this.strokeWidth = strokeWidth;
  return this;
} 
Circle.prototype.width = function(width){
  this.r = (width/2);
  return this;
}
Circle.prototype.fill = function(fill){
  this.fill = fill;
  return this;
}
Circle.prototype.draw = function(svg){
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', this.cx);
  circle.setAttribute('cy', this.cy);
  circle.setAttribute('r', this.r);
  circle.setAttribute('fill', this.fill);
  svg.appendChild(circle);
  return this;
}
function Rectangle(){
  return this;
}
Rectangle.prototype.center = function(x, y){
  this.x = x;
  this.y = y;
  return this;
}
Rectangle.prototype.stroke = function(stroke){
  this.stroke = stroke;
  return this;
}
Rectangle.prototype.strokeWidth = function(strokeWidth){
  this.strokeWidth = strokeWidth;
  return this;
}
Rectangle.prototype.width = function(width){
  this.width = width;
  return this;
}
Rectangle.prototype.height = function(height){
  this.height = height;
  return this;
}
Rectangle.prototype.fill = function(fill){
  this.fill = fill;
  return this;
}
Rectangle.prototype.rx = function(rx){
  this.rx = rx;
  return this;  
}
Rectangle.prototype.ry = function(ry){
  this.ry = ry;
  return this;
}
Rectangle.prototype.draw = function(svg){
  var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', this.x);
  rect.setAttribute('ry', this.ry);
  rect.setAttribute('y', this.y);
  rect.setAttribute('rx', this.rx);
  rect.setAttribute('width', this.width);
  rect.setAttribute('height', this.height);
  rect.setAttribute('fill', this.fill);
  rect.setAttribute('stroke', this.stroke);
  rect.setAttribute('stroke-width', this.strokeWidth);

  svg.appendChild(rect);
  return this;
}
function Text(){
  return this;
}
Text.prototype.x = function(x){
  this.x = x;
  return this;
}
Text.prototype.y = function(y){
  this.y = y;
  return this;
}
Text.prototype.text = function(text){
  this.text = text;
  return this;
}
Text.prototype.fontSize = function(fontSize){
  this.fontSize = fontSize;
  return this;
}
Text.prototype.fill = function(fill){
  this.fill = fill;
  return this;
}
Text.prototype.draw = function(svg){
  var textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textEl.setAttribute('x', this.x);
  textEl.setAttribute('y', this.y);
  textEl.setAttribute('fill', this.fill);
  textEl.setAttribute('font-size', this.fontSize)
  var text = document.createTextNode(this.text);
  svg.appendChild(textEl);
  textEl.appendChild(text);
  return this;
}
var l = new Line()
  .x1(200).y1(50).x2(300).y2(100)
  .stroke('purple').strokeWidth(10)
  .draw(svg);

var s = new Square()
  .center(100, 100).width(100)
  .fill('yellow').rx(0).ry(0)
  .draw(svg);

var c = new Circle()
  .center(100, 100).width(100)
  .fill('red')
  .draw(svg);

var r = new Rectangle()
  .center(200, 200).width(20).height(50)
  .fill('blue').rx(0).ry(0)
  .draw(svg);

new Text()
  .x(400).y(50)
  .text("Line " + l.x1 + "," + l.y1 + " > " + l.x2 + "," + l.y2 + " " + l.stroke)
  .draw(svg);

new Text()
  .x(400).y(70)
  .text("Square " + s.x + "," + s.y + " width " + s.width + " " + s.fill)
  .draw(svg);

var nesOuter = new Rectangle()
  .center(20,280).width(700).height(300).rx(0).ry(0).strokeWidth(20).fill('black').stroke('#e6e7e2').draw(svg);
var stickV = new Rectangle()
  .center(120, 370).width(80).height(170).rx(0).ry(0).strokeWidth(5).fill('black').stroke('#e6e7e2').draw(svg);
var stickH = new Rectangle()
  .center(75,415).width(170).height(80).rx(0).ry(0).strokeWidth(5).fill('black').stroke('#e6e7e2').draw(svg);
var start = new Rectangle()
  .center(280,480).width(150).height(60).fill('#e6e7e2').rx(5).ry(5).draw(svg);
var gray1 = new Rectangle()
  .center(280,290).width(150).height(50).rx(10).ry(10).fill('#767576').draw(svg);
var gray2 = new Rectangle()
  .center(280,350).width(150).height(50).rx(10).ry(10).fill('#767576').draw(svg);
var gray3 = new Rectangle()
  .center(280,410).width(150).height(50).rx(10).ry(10).fill('#767576').draw(svg);
var leftButtonHolder = new Square()
  .center(495, 507).width(75).rx(5).ry(5).fill('#e6e7e2').draw(svg);
var rightButtonHolder = new Square()
  .center(595,507).width(75).rx(5).ry(0).fill('#e6e7e2').draw(svg);
var leftButtonPad = new Circle()
  .center(495,507).width(60).fill('red').draw(svg);
var rightButtonPad = new Circle()
  .center(595,507).width(60).fill('red').draw(svg);
var selectButton = new Rectangle()
  .center(290,500).width(60).rx(12).ry(12).height(25).fill('black').draw(svg);
var startButton = new Rectangle()
  .center(360,500).width(60).rx(12).ry(12).height(25).fill('black').draw(svg);
var selectText = new Text()
  .x(290).y(440).text('SELECT').fill('red').draw(svg);
var startText = new Text()
  .x(365).y(440).text('START').fill('red').draw(svg);
var nintendo = new Text()
  .x(490).y(360).text('Nintendo').fill('red').fontSize('28').draw(svg);
var a = new Text()
  .x(620).y(565).text('A').fill('red').fontSize('24').draw(svg);
var b = new Text()
  .x(520).y(565).text('B').fill('red').fontSize('24').draw(svg);
 
