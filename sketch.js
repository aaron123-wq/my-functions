var car, wall
 function setup()
 { wall=createSprite(200,200, 50, 30);
   //25+15=40 
   car=createSprite(100, 100, 30, 50); 
  } function draw()
  { background("white");
   car.x=World.mouseX
    car.y=World.mouseY
     car.debug=true;
      wall.debug=true;
     car.velocityX=1
     wall.velocityX=-1
      //console.log(fix.x-moving.x)
 if(isTouching(wall,car)){
  text("objects are touching",300,200)
 bounceOff(wall,car)
  }
  else{
    text("objects are not touching",300,200)
  }

drawSprites()
  }
 