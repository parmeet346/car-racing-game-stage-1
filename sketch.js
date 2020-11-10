var ball,database;
var position;
function setup(){

    database = firebase.database()
    console.log(database)

    createCanvas(500,500);
    ball = createSprite(200,200,50,50)
    ball.shapeColor = "lightgreen";

    var hball = database.ref("ball/position")
hball.on("value",readPosition,showError)
    
}

function draw(){
    background("white");
    if (keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
writePosition(0,1)
    }
else if(keyDown(LEFT_ARROW)){
    writePosition(-1,0)
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0)
}

    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:position.x + x,
        y:position.y + y
    })
}




//function changePosition(x,y){
 //   ball.x = ball.x + x ;
  //  ball.y = ball.y + y ;
//}

function readPosition(data){    
    position = data.val() 
    ball.x = position.x
    ball.y = position.y 
} 

function showError(){
    console.log("error in writting to data base")
}