"use strict";
/*
作者：杨金坤
邮箱：527423296@163.com
*/

var ctx = "canvas";
var linew= 0.5;
var op = 20.5;
window.onload = function () {
/*	页面加载完成后，生成图表*/
	ctx = document.getElementById("canvas").getContext("2d");
	var strokecolor = document.getElementById("strokecolor");
	draw();
	strokecolor.onchange = function () {
		draw();
	};
	
};
window.onresize=function(){
/*	窗口大小调整，重新生成图表*/
	draw();
};
function draw() {
/*	调用图表各模块，生成图表*/
	cnvclear();
//	ctx.rotate(45*Math.PI/180);
	drawAxis(ctx, strokecolor.value);
	drawTick(ctx, strokecolor.value);
//	drawGrid(ctx, strokecolor.value, 30, 10);
};
function cnvclear() {
/*	画布擦除*/
    ctx.canvas.width = window.innerWidth*7/10;
    ctx.canvas.height = window.innerHeight*3/10;
};
function drawGrid(ctx, col, stpx, stpy) {
/*	图表网格*/
	ctx.strokeStyle = col;
	ctx.lineWidth = linew;
	for (var i = op + stpx; i < ctx.canvas.width; i += stpx) {
		ctx.beginPath();
		ctx.moveTo(i, ctx.canvas.height - op);
		ctx.lineTo(i, 0);
		ctx.stroke();
	};
	for (var i = ctx.canvas.height - op - stpy; i > 0; i -= stpy) {
		ctx.beginPath();
		ctx.moveTo(op, i);
		ctx.lineTo(ctx.canvas.width, i);
		ctx.stroke();
	};
};
function drawTick(ctx, col) {
/*	坐标轴刻度*/
	var stpx = 30;
	var stpy = 10;
	var Axisl = 2;
	var tickx = 5;
	var ticky = 2;
	var stplx = stpx/tickx;
	var stply = stpy/ticky;
	ctx.strokeStyle = col;
	ctx.lineWidth = linew;
	ctx.beginPath();
	for (var i = op + stplx; i < ctx.canvas.width - 2*stplx; i += stplx) {
		ctx.moveTo(i, ctx.canvas.height - op);
		ctx.lineTo(i, ctx.canvas.height - op - Axisl);
		ctx.stroke();
	};
	for (var i = ctx.canvas.height - op; i > 2*stply; i -= stply) {
		ctx.moveTo(op, i);
		ctx.lineTo(op + Axisl, i);
		ctx.stroke();
	};
	for (var i = op + stpx; i < ctx.canvas.width - 2*stplx; i += stpx) {
		ctx.moveTo(i, ctx.canvas.height - op);
		ctx.lineTo(i, ctx.canvas.height - op - Axisl*1.5 - tickx*0.5);
		ctx.stroke();
	};
	for (var i = ctx.canvas.height - op; i > 2*stply; i -= stpy) {
		ctx.moveTo(op, i);
		ctx.lineTo(op + Axisl*1.5 + ticky*0.5, i);
		ctx.stroke();
	};
};
function drawAxis(ctx, col) {
/*	坐标轴*/
	ctx.strokeStyle = col;
	ctx.lineWidth = linew;
	ctx.beginPath();
	ctx.moveTo(op - 3, 0.5 + 5);
	ctx.lineTo(op, 0.5);
	ctx.lineTo(op + 3, 0.5 + 5);
	ctx.lineTo(op, 0.5);
	ctx.lineTo(op, ctx.canvas.height - op);
	ctx.lineTo(ctx.canvas.width, ctx.canvas.height - op);
	ctx.lineTo(ctx.canvas.width - 5, ctx.canvas.height - op - 3);
	ctx.lineTo(ctx.canvas.width, ctx.canvas.height - op);
	ctx.lineTo(ctx.canvas.width - 5, ctx.canvas.height - op + 3);
	ctx.stroke();
};