/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");
var controlArray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];//20*30 array to control the game
var x = canvas.width / 2;
var y = 0;
var gridSize = 20;
var dy = 20;
var dx = 20;
var highestSpot = 600;
var canPlay = true;
var needNewPiece = true;
var FPS = 1.5;
var currentPiece, nextPiece;
var gridA=new Array();  //array to store AY and AX
var gridB=new Array();
var gridC=new Array();
var gridD=new Array();
var gridAX=new Array(); //array to store the four possible locations of AX
var gridAY=new Array();
var gridBX=new Array();
var gridBY=new Array();
var gridCX=new Array();
var gridCY=new Array();
var gridDX=new Array();
var gridDY=new Array();

var dt=0;
var numberOfRotation=0;
var menuImage=new Image();
menuImage.src="menu.png";
var gameoverImage=new Image();
gameoverImage.src="gameover.png";
var gameStarted=false;
var gamePaused=false;
var mouseX, mouseY;
var linesOccupied=new Array();
var uniqueLinesOccupied=new Array();

var buttonPlay=new Button(118,268,492,563);
var buttonReplay=new Button(89,333,426,527);

var totalScore=0;
var totalLinesRemoved=0;
var level=1;
var tempTimeout;

//menuImage.addEventListener('load',drawMenu,false);



function drawShape(shapeNumber) {
    
    
    switch(shapeNumber)
    {
        case 1://t shape
            gridAX=[x,x,x,x];
            gridAY=[y,y,y,y];
            gridBX=[x-gridSize,x-gridSize,x+gridSize,x+gridSize];
            gridBY=[y+gridSize,y-gridSize,y-gridSize,y+gridSize];
            gridCX=[x,x-gridSize,x,x+gridSize];
            gridCY=[y+gridSize,y,y-gridSize,y];
            gridDX=[x+gridSize,x-gridSize,x-gridSize,x+gridSize];
            gridDY=[y+gridSize,y+gridSize,y-gridSize,y-gridSize];
            //mostLeftGridY=[y+gridSize,y+gridSize,y-gridSize,y];
            //mostLeftGridX=[x-gridSize,x-gridSize,x-gridSize,x];
            //mostRightGridY=[];
            
            break;
        case 2://l shape
            gridAX=[x,x,x,x];
            gridAY=[y,y,y,y];
            gridBX=[x,x-gridSize,x,x+gridSize];
            gridBY=[y+gridSize,y,y-gridSize,y];
            gridCX=[x,x-(2*gridSize),x,x+(2*gridSize)];
            gridCY=[y+(2*gridSize),y,y-(2*gridSize),y];
            gridDX=[x+gridSize,x-(2*gridSize),x-gridSize,x+(2*gridSize)];
            gridDY=[y+(2*gridSize),y+gridSize,y-(2*gridSize),y-gridSize];
            break;
        case 3://
            gridAX=[x,x,x,x];
            gridAY=[y,y,y,y];
            gridBX=[x+gridSize,x+gridSize,x+gridSize,x+gridSize];
            gridBY=[y,y,y,y];
            gridCX=[x,x,x,x];
            gridCY=[y+gridSize,y+gridSize,y+gridSize,y+gridSize];
            gridDX=[x+gridSize,x+gridSize,x+gridSize,x+gridSize];
            gridDY=[y+gridSize,y+gridSize,y+gridSize,y+gridSize];
            break;
        case 4: //s shape
            gridAX=[x,x,x,x];
            gridAY=[y,y,y,y];
            gridBX=[x+gridSize,x,x+gridSize,x];
            gridBY=[y,y+gridSize,y,y+gridSize];
            gridCX=[x-gridSize,x-gridSize,x-gridSize,x-gridSize];
            gridCY=[y+gridSize,y-gridSize,y+gridSize,y-gridSize];
            gridDX=[x,x-gridSize,x,x-gridSize];
            gridDY=[y+gridSize,y,y+gridSize,y];
            break;
        case 5: //z shape
            gridAX=[x,x,x,x];
            gridAY=[y,y,y,y];
            gridBX=[x-gridSize,x,x-gridSize,x];
            gridBY=[y,y-gridSize,y,y-gridSize];
            gridCX=[x,x-gridSize,x,x-gridSize];
            gridCY=[y+gridSize,y,y+gridSize,y];
            gridDX=[x+gridSize,x-gridSize,x+gridSize,x-gridSize];
            gridDY=[y+gridSize,y+gridSize,y+gridSize,y+gridSize];
            
            break;
        case 6://i shape
            gridAX=[x,x+gridSize,x,x+gridSize];
            gridAY=[y,y+gridSize,y,y+gridSize];
            gridBX=[x,x,x,x];
            gridBY=[y+gridSize,y+gridSize,y+gridSize,y+gridSize];
            gridCX=[x,x-gridSize,x,x-gridSize];
            gridCY=[y+(2*gridSize),y+gridSize,y+(2*gridSize),y+gridSize];
            gridDX=[x,x-(2*gridSize),x,x-(2*gridSize)];
            gridDY=[y+(3*gridSize),y+gridSize,y+(3*gridSize),y+gridSize];
            break;
        case 7: //j shape
            gridAX=[x,x,x,x];
            gridAY=[y,y,y,y];
            gridBX=[x,x-gridSize,x,x+gridSize];
            gridBY=[y+gridSize,y,y-gridSize,y];
            gridCX=[x,x-(2*gridSize),x,x+(2*gridSize)];
            gridCY=[y+(2*gridSize),y,y-(2*gridSize),y];
            gridDX=[x-gridSize,x-(2*gridSize),x+gridSize,x+(2*gridSize)];
            gridDY=[y+(2*gridSize),y-gridSize,y-(2*gridSize),y+gridSize];
            break;
            
    }
    
    gridA=[gridAY[numberOfRotation%4],gridAX[numberOfRotation%4]];
    gridB=[gridBY[numberOfRotation%4],gridBX[numberOfRotation%4]];
    gridC=[gridCY[numberOfRotation%4],gridCX[numberOfRotation%4]];
    gridD=[gridDY[numberOfRotation%4],gridDX[numberOfRotation%4]];
    
  switch(shapeNumber)
  {
      case 1:
        ctx.beginPath();
        ctx.rect(gridA[1],gridA[0], gridSize, gridSize);
        ctx.fillStyle = "#DE4747";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridB[1], gridB[0], gridSize, gridSize);
        ctx.fillStyle = "#DE4747";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridC[1], gridC[0], gridSize, gridSize);
        ctx.fillStyle = "#DE4747";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridD[1], gridD[0], gridSize, gridSize);
        ctx.fillStyle = "#DE4747";
        ctx.fill();
        ctx.closePath();
        break;
    case 2:
        ctx.beginPath();
        ctx.rect(gridA[1],gridA[0], gridSize, gridSize);
        ctx.fillStyle = "#93DE47";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridB[1], gridB[0], gridSize, gridSize);
        ctx.fillStyle = "#93DE47";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridC[1], gridC[0], gridSize, gridSize);
        ctx.fillStyle = "#93DE47";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridD[1], gridD[0], gridSize, gridSize);
        ctx.fillStyle = "#93DE47";
        ctx.fill();
        ctx.closePath();
        break;
    case 3:
        ctx.beginPath();
        ctx.rect(gridA[1],gridA[0], gridSize, gridSize);
        ctx.fillStyle = "#FF9933";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridB[1], gridB[0], gridSize, gridSize);
        ctx.fillStyle = "#FF9933";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridC[1], gridC[0], gridSize, gridSize);
        ctx.fillStyle = "#FF9933";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridD[1], gridD[0], gridSize, gridSize);
        ctx.fillStyle = "#FF9933";
        ctx.fill();
        ctx.closePath();
        break;
    case 4:
        ctx.beginPath();
        ctx.rect(gridA[1],gridA[0], gridSize, gridSize);
        ctx.fillStyle = "#9347DE";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridB[1], gridB[0], gridSize, gridSize);
        ctx.fillStyle = "#9347DE";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridC[1], gridC[0], gridSize, gridSize);
        ctx.fillStyle = "#9347DE";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridD[1], gridD[0], gridSize, gridSize);
        ctx.fillStyle = "#9347DE";
        ctx.fill();
        ctx.closePath();
        break;
    case 5:
        ctx.beginPath();
        ctx.rect(gridA[1],gridA[0], gridSize, gridSize);
        ctx.fillStyle = "#1E42E3";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridB[1], gridB[0], gridSize, gridSize);
        ctx.fillStyle = "#1E42E3";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridC[1], gridC[0], gridSize, gridSize);
        ctx.fillStyle = "#1E42E3";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridD[1], gridD[0], gridSize, gridSize);
        ctx.fillStyle = "#1E42E3";
        ctx.fill();
        ctx.closePath();
        break;
        
    case 6:
        ctx.beginPath();
        ctx.rect(gridA[1],gridA[0], gridSize, gridSize);
        ctx.fillStyle = "#FFFF4D";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridB[1], gridB[0], gridSize, gridSize);
        ctx.fillStyle = "#FFFF4D";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridC[1], gridC[0], gridSize, gridSize);
        ctx.fillStyle = "#FFFF4D";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridD[1], gridD[0], gridSize, gridSize);
        ctx.fillStyle = "#FFFF4D";
        ctx.fill();
        ctx.closePath();
        break;
    case 7:
        ctx.beginPath();
        ctx.rect(gridA[1],gridA[0], gridSize, gridSize);
        ctx.fillStyle = "#DA1EE3";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridB[1], gridB[0], gridSize, gridSize);
        ctx.fillStyle = "#DA1EE3";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridC[1], gridC[0], gridSize, gridSize);
        ctx.fillStyle = "#DA1EE3";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(gridD[1], gridD[0], gridSize, gridSize);
        ctx.fillStyle = "#DA1EE3";
        ctx.fill();
        ctx.closePath();
        break;
            
  }
    
    var i, j;
    for (i = 0; i < 30; i++)
    {
        for (j = 0; j < 20; j++)
        {
            if (controlArray[i][j] === 1)
            {
                ctx.beginPath();
                ctx.rect(j * gridSize, i * gridSize, gridSize, gridSize);
                ctx.fillStyle = "#DE4747";
                ctx.fill();
                ctx.closePath();
            }
            else if (controlArray[i][j] === 2)
            {
                ctx.beginPath();
                ctx.rect(j * gridSize, i * gridSize, gridSize, gridSize);
                ctx.fillStyle = "#93DE47";
                ctx.fill();
                ctx.closePath();
            }
            else if (controlArray[i][j] === 3)
            {
                ctx.beginPath();
                ctx.rect(j * gridSize, i * gridSize, gridSize, gridSize);
                ctx.fillStyle = "#FF9933";
                ctx.fill();
                ctx.closePath();
            }
            else if (controlArray[i][j] === 4)
            {
                ctx.beginPath();
                ctx.rect(j * gridSize, i * gridSize, gridSize, gridSize);
                ctx.fillStyle = "#9347DE";
                ctx.fill();
                ctx.closePath();
            }
            else if (controlArray[i][j] === 5)
            {
                ctx.beginPath();
                ctx.rect(j * gridSize, i * gridSize, gridSize, gridSize);
                ctx.fillStyle = "#1E42E3";
                ctx.fill();
                ctx.closePath();
            }
            else if (controlArray[i][j] === 6)
            {
                ctx.beginPath();
                ctx.rect(j * gridSize, i * gridSize, gridSize, gridSize);
                ctx.fillStyle = "#FFFF4D";
                ctx.fill();
                ctx.closePath();
            }
            else if (controlArray[i][j] === 7)
            {
                ctx.beginPath();
                ctx.rect(j * gridSize, i * gridSize, gridSize, gridSize);
                ctx.fillStyle = "#DA1EE3";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    
    for(i=0;i<30;i++)
    {
        ctx.beginPath();
        ctx.moveTo(0,i*gridSize);
        ctx.lineTo(canvas.height,i*gridSize);
        ctx.stroke();
    }
    for(j=0;j<20;j++)
    {
        ctx.beginPath();
        ctx.moveTo(j*gridSize,0);
        ctx.lineTo(j*gridSize,canvas.height);
        ctx.stroke();
    }

}
function pausecomp(millis) 
{
var date = new Date();
var curDate = null;

do { curDate = new Date(); } 
while(curDate-date < millis);
} 

function dropNewShape(shapeNumber)
{   numberOfRotation=0;
    totalScore+=1;
    document.getElementById('score').innerHTML = "Score: " + totalScore;
    currentPiece=shapeNumber;
    nextPiece=Math.floor((Math.random()*100)%7+1);
    
    x = canvas.width / 2;
    y = 0;
    needNewPiece = false;
    switch(shapeNumber)
    {
        case 1:            
            break;
            
    }
    
    drawShape(currentPiece);
   
}
function freeze(x, y, shapeNumber)
{   console.log("***********************************")
    console.log("gridA is "+gridA);
    console.log("gridB is "+gridB);
    console.log("gridC is "+gridC);
    console.log("gridD is "+gridD);
    switch (shapeNumber)
    {
        case 1:
            controlArray[gridA[0]/gridSize][gridA[1]/gridSize] = 1;
            controlArray[gridB[0]/gridSize][gridB[1]/gridSize] = 1;
            controlArray[gridC[0]/gridSize][gridC[1]/gridSize] = 1;
            controlArray[gridD[0]/gridSize][gridD[1]/gridSize] = 1;
            ctx.save();
            
            break;
        case 2:
            controlArray[gridA[0]/gridSize][gridA[1]/gridSize] = 2;
            controlArray[gridB[0]/gridSize][gridB[1]/gridSize] = 2;
            controlArray[gridC[0]/gridSize][gridC[1]/gridSize] = 2;
            controlArray[gridD[0]/gridSize][gridD[1]/gridSize] = 2;
            ctx.save();
           
            break;
        case 3:
            controlArray[gridA[0]/gridSize][gridA[1]/gridSize] = 3;
            controlArray[gridB[0]/gridSize][gridB[1]/gridSize] = 3;
            controlArray[gridC[0]/gridSize][gridC[1]/gridSize] = 3;
            controlArray[gridD[0]/gridSize][gridD[1]/gridSize] = 3;
            ctx.save();
           
            break;
        case 4:
            controlArray[gridA[0]/gridSize][gridA[1]/gridSize] = 4;
            controlArray[gridB[0]/gridSize][gridB[1]/gridSize] = 4;
            controlArray[gridC[0]/gridSize][gridC[1]/gridSize] = 4;
            controlArray[gridD[0]/gridSize][gridD[1]/gridSize] = 4;
            ctx.save();
       
            break;
        case 5:
            controlArray[gridA[0]/gridSize][gridA[1]/gridSize] = 5;
            controlArray[gridB[0]/gridSize][gridB[1]/gridSize] = 5;
            controlArray[gridC[0]/gridSize][gridC[1]/gridSize] = 5;
            controlArray[gridD[0]/gridSize][gridD[1]/gridSize] = 5;
            ctx.save();
           
            break;
        case 6:
            controlArray[gridA[0]/gridSize][gridA[1]/gridSize] = 6;
            controlArray[gridB[0]/gridSize][gridB[1]/gridSize] = 6;
            controlArray[gridC[0]/gridSize][gridC[1]/gridSize] = 6;
            controlArray[gridD[0]/gridSize][gridD[1]/gridSize] = 6;
            ctx.save();
            
            break;
        case 7:
            controlArray[gridA[0]/gridSize][gridA[1]/gridSize] = 7;
            controlArray[gridB[0]/gridSize][gridB[1]/gridSize] = 7;
            controlArray[gridC[0]/gridSize][gridC[1]/gridSize] = 7;
            controlArray[gridD[0]/gridSize][gridD[1]/gridSize] = 7;
            ctx.save();
            
            break;
    }
    pausecomp(100);
    
    var lowestH=gridA[0]/gridSize,highestH=gridA[0]/gridSize;
    if(gridB[0]/gridSize<highestH)
    {
        highestH=gridB[0]/gridSize;
    }
    if(gridC[0]/gridSize<highestH)
    {
        highestH=gridC[0]/gridSize;
    }
    if(gridD[0]/gridSize<highestH)
    {
        highestH=gridD[0]/gridSize;
    }
    
    if(gridB[0]/gridSize>lowestH)
    {
        lowestH=gridB[0]/gridSize;
    }
    if(gridC[0]/gridSize>lowestH)
    {
        lowestH=gridC[0]/gridSize;
    }
    if(gridD[0]/gridSize>lowestH)
    {
        lowestH=gridD[0]/gridSize;
    }
    
    var numberOfLinesToCheck=lowestH-highestH+1;
    var removable=new Array(numberOfLinesToCheck);
    var numberOfNonZero=new Array(numberOfLinesToCheck);
    
    for (var i=0;i<numberOfLinesToCheck;i++)
    {
        removable[i]=false;
        numberOfNonZero[i]=0;
        
    }
    
    for(var i=0;i<numberOfLinesToCheck;i++ )
    {   for(var j=0;j<20;j++)
        
        {   var temp=highestH+i;
            
            
            if(controlArray[temp][j]>0)
            {
                numberOfNonZero[i]++;
              
            }
        }
        
    }
    
    for(var i=0;i<numberOfLinesToCheck;i++)
    {
        if(numberOfNonZero[i]===20)
        {
            removable[i]=true;
            
        }
    }
    
    var counter=0;
    for(var i=0;i<numberOfLinesToCheck;i++)
    {
        if(removable[i])
        {   counter++;
            
            for(j=0;j<20;j++)
                               {
                                   for(var m=highestH+i;m>0;m--)
                                   {
                                       var newValue=controlArray[m-1][j];
                                       controlArray[m][j]=newValue;
                                      
                                    }
                               }
                           
           
        }
    }
    switch(counter)
    {
        case 1:
            totalScore+=10;
            totalLinesRemoved+=1;
            break;
        case 2:
            totalScore+=30;
            totalLinesRemoved+=2;
            break;
        case 3:
            totalScore+=60;
            totalLinesRemoved+=3;
            break;
        case 4:
            totalScore+=100;
            totalLinesRemoved+=4;
            break;
    }
    level=Math.floor(totalLinesRemoved/20)+1;
    FPS=1.5+(level-1)*0.1;
    document.getElementById('score').innerHTML = "Score: " + totalScore;
    document.getElementById('totalLines').innerHTML="Number of Lines Removed: "+totalLinesRemoved; 
    document.getElementById('level').innerHTML="Level "+level;
    
}


function drawMenu()
{
    ctx.drawImage(menuImage,0,0);
   
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(gridA[0]<580&&gridB[0]<580&&gridC[0]<580&&gridD[0]<580)
    drawShape(currentPiece);
    
    
    //check if it hits the bottom
    if(gridA[0]===580||gridB[0]===580||gridC[0]===580||gridD[0]===580||
            controlArray[(gridA[0]/gridSize)+1][(gridA[1]/gridSize)]!==0||
            controlArray[(gridB[0]/gridSize)+1][(gridB[1]/gridSize)]!==0
            ||
       controlArray[(gridC[0]/gridSize)+1][(gridC[1]/gridSize)]!==0||
       controlArray[(gridD[0]/gridSize)+1][(gridD[1]/gridSize)]!==0)
    {   
        freeze(x, y, currentPiece);
        
        needNewPiece = true;
        if (y < highestSpot)
        {
            highestSpot = y;
            
            
        }
    }
    else
    {
        y=y+20;
    }
    



}

function update(tick) {
    if (canPlay)
    {
        dt += tick;
        if (dt > 1000)
        {
            dt -= 1000;
            draw();
        }
        if (needNewPiece)
        {   
            dropNewShape(nextPiece);
        }

    }

}


function min(a,b,c,d)
{ var min=a;
    if(min>b)
    {
      min=b;  
    }
    if(min>c)
    {
        min=c;
    }
    if(min>d)
    {
        min=d;
    }
    return min;
}


function max(a,b,c,d)
{
    var max=a;
    if(max<b)
    {
        max=b;
    }
    if(max<c)
    {
        max=c;
    }
    if(max<d)
    {
        max=d;
    }
    return max;
}
function keyDownHandler(event)
{  
    if(event.keyCode===39)
    {   var grid=max(gridA[1],gridB[1],gridC[1],gridD[1]);
        if((grid+gridSize)<=(canvas.width-gridSize)&&canMoveRight)
        {x+=gridSize;}
        
    }
    else if (event.keyCode===37)
    {  var grid=min(gridA[1],gridB[1],gridC[1],gridD[1]);
        
        if((grid-gridSize)>=0&&canMoveLeft)
        {x-=gridSize;}
       
    }
    else if(event.keyCode===38)
    {   var canRotate=false;
        
        var nextPositionNumber=(numberOfRotation+1)%4;
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("Y is "+y);
        console.log("next position number is "+nextPositionNumber);
        console.log("gridAY next position number is "+gridAY[nextPositionNumber]);
        console.log("gridBY next position number is "+gridBY[nextPositionNumber]);
        console.log("gridCY next position number is "+gridCY[nextPositionNumber]);
        console.log("gridDY next position number is "+gridDY[nextPositionNumber]);
        //check whether the next position is available
    if(y>20&&gridAX[nextPositionNumber]>=0&&gridAX[nextPositionNumber]<=(canvas.width)
            &&controlArray[gridAY[nextPositionNumber]/gridSize][gridAX[nextPositionNumber]/gridSize]===0&&
       gridBX[nextPositionNumber]>=0&&gridBX[nextPositionNumber]<=(canvas.width)
            &&controlArray[gridBY[nextPositionNumber]/gridSize][gridBX[nextPositionNumber]/gridSize]===0&&
       gridCX[nextPositionNumber]>=0&&gridCX[nextPositionNumber]<=(canvas.width)
            &&controlArray[gridCY[nextPositionNumber]/gridSize][gridCX[nextPositionNumber]/gridSize]===0&&
       gridDX[nextPositionNumber]>=0&&gridDX[nextPositionNumber]<=(canvas.width)
            &&controlArray[gridDY[nextPositionNumber]/gridSize][gridDX[nextPositionNumber]/gridSize]===0)
    {
        canRotate=true;
    }
        if(canRotate)
        {   
            numberOfRotation++;
         
    }
}
else if(event.keyCode===40)
{var grid=max(gridA[0],gridB[0],gridC[0],gridD[0]);
    
    if((grid+gridSize)<=580&&
            (controlArray[(gridA[0]/gridSize)+1][gridA[1]/gridSize]===0)&&
            (controlArray[(gridB[0]/gridSize)+1][gridB[1]/gridSize]===0)&&
            (controlArray[(gridC[0]/gridSize)+1][gridC[1]/gridSize]===0)&&
            (controlArray[(gridD[0]/gridSize)+1][gridD[1]/gridSize]===0))
    {y+=gridSize;
}
}
else if(event.keyCode===80)
{
    if(gamePaused)
    {
        tempTimeout=setTimeout(mainLoop,1000/FPS);
        gamePaused=false;
    }
    else if(!gamePaused)
    {   gamePaused=true;
        clearTimeout(tempTimeout);
        ctx.font="42px Comic Sans MS";
        ctx.fillStyle="yellow";
        ctx.textAligh="center";
        ctx.fillText("Paused!",100, 50);
        ctx.fillText("Press 'P' to resume!",10,150) ;
    }
}
}


function canMoveLeft()
{ var canMoveLeft=false;
    if(controlArray[gridA[0]/gridSize-1][gridA[1]/gridSize]===0&&
       controlArray[gridB[0]/gridSize-1][gridB[1]/gridSize]===0&&
       controlArray[gridC[0]/gridSize-1][gridC[1]/gridSize]===0&&
        controlArray[gridD[0]/gridSize-1][gridD[1]/gridSize]===0)
   {
       canMoveLeft=true;
   }
   
   return canMoveLeft;
    
    
    
}

function canMoveRight()
{
    var canMoveRight=false;
    if(controlArray[gridA[0]/gridSize+1][gridA[1]/gridSize]===0&&
       controlArray[gridB[0]/gridSize+1][gridB[1]/gridSize]===0&&
       controlArray[gridC[0]/gridSize+1][gridC[1]/gridSize]===0&&
       controlArray[gridD[0]/gridSize+1][gridD[1]/gridSize]===0)
   {
       canMoveRight=true;
   }
  
   return canMoveRight;
    
}
function init()
{   drawMenu();
    document.addEventListener('click',mouseClicked,false);
}

function mouseClicked(e)
{
    mouseX =e.pageX-canvas.offsetLeft;
    mouseY =e.pageY-canvas.offsetTop;
    if(buttonPlay.checkClicked())
    {
        playGame();
    }
    else if(buttonReplay.checkClicked()){
        playGame();
       
        
        resetAttributes()
    }
    
   
}


function resetAttributes()
{
    controlArray = 
   [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];//20*30 array to control the game
x = canvas.width / 2;
y = 0;
gridSize = 20;
dy = 20;
dx = 20;
highestSpot = 600;
canPlay = true;
needNewPiece = true;
FPS = 1.5;
var currentPiece, nextPiece;
gridA=new Array();
gridB=new Array();
gridC=new Array();
gridD=new Array();
gridAX=new Array();
gridAY=new Array();
gridBX=new Array();
gridBY=new Array();
gridCX=new Array();
gridCY=new Array();
gridDX=new Array();
gridDY=new Array();
numberOfRotation=0;
dt=0;
totalScore=0;
totalLinesRemoved=0;
level=1;
}

//button object

function Button(xl,xr,yt,yb)
{
    this.xLeft=xl;
    this.xRight=xr;
    this.yTop=yt;
    this.yButtom=yb;  
}

Button.prototype.checkClicked=function(){
    if(this.xLeft<=mouseX&&this.xRight>=mouseX&&
       this.yTop<=mouseY&&this.yButtom>=mouseY) return true;
}
//end of button object
function playGame()

{   
    if(!gameStarted)
    {gameStarted=true;}
    if(currentPiece===undefined)
    {currentPiece=Math.floor((Math.random()*100)%7+1);
    dropNewShape(currentPiece);
     
}
}
var last = now = timestamp();

//game loop
function mainLoop()
{   
        tempTimeout=setTimeout(function () {
        
        if(!gameStarted){
        init();
        
    }
    else if(gameStarted&&highestSpot>0){
        now = timestamp();
        update((now - last) / 1);
        last = now;
        draw();
        
    }
    if(highestSpot===0)
    {   
        ctx.drawImage(gameoverImage,0,0);
        canPlay=false;
       
        document.addEventListener('click',mouseClicked,false);
        
    }
        
        
        requestAnimationFrame(mainLoop);
    }, 1000 / FPS);
      document.addEventListener("keydown",keyDownHandler,false);  
    }
    
    
function timestamp()
{
    return new Date().getTime();
}

requestAnimationFrame(mainLoop);

