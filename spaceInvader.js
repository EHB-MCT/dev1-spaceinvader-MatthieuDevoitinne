"use strict";

drawLine();

function drawLine() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d")

    context.fillStyle = "black";
    context.beginPath();
    context.rect(100 , 100, 300, 300);
    context.stroke(); 
    context.fill();

    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(150, 175, 50, 50);
    context.stroke();
    context.fill(); 

    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(150, 225, 50, 50);
    context.stroke();
    context.fill(); 

    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(150, 250, 50, 50);
    context.stroke();
    context.fill();

    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(175, 250, 50, 50);
    context.stroke();
    context.fill();

    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(175, 300, 50, 50);
    context.stroke();
    context.fill();

    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(200, 275, 50, 50);
    context.stroke();
    context.fill();

    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(300, 175, 50, 50);
    context.stroke();
    context.fill();
    
    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(300, 225, 50, 50);
    context.stroke();
    context.fill();

    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(300, 250, 50, 50);
    context.stroke();
    context.fill();

    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(275, 250, 50, 50);
    context.stroke();
    context.fill();

    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(275, 300, 50, 50);
    context.stroke();
    context.fill();

    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(250, 275, 50, 50);
    context.stroke();
    context.fill();

    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(200, 125, 50, 50);
    context.stroke();
    context.fill();
    
    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(250, 125, 50, 50);
    context.stroke();
    context.fill();

    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(275, 225, 50, 50);
    context.stroke();
    context.fill();

    context.fillStyle = "#90EE90";
    context.beginPath();
    context.rect(175, 225, 50, 50);
    context.stroke();
    context.fill();

    
    
    



}
alert("Draw your space invader here");