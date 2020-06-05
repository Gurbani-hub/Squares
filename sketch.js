var a
var b

function setup() {
  createCanvas(900,700);
 a= createSprite(400, 200, 50, 50);
b=createSprite(400,400,50,50)
}

function isTouching(a1,a2) {

  if(a1.x-a2.x<a1.width/2+a2.width/2 &&
    a2.x-a1.x<a1.width/2+a2.width/2  &&
    a1.y-a2.y<a1.height/2+a2.height/2 &&
    a2.y-a1.y<a1.height/2+a2.height/2
  ) {

    return true }

    else{

      return false
}
}

function draw() {
  background("cyan")
  text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY)

  a.x=mouseX
  a.y=mouseY

  if(isTouching(a,b)) {

    a.shapeColor="pink"
    a.height=50
    a.width=50
    b.shapeColor="yellow"
    b.height=50
    b.width=50
  }
    
  else{

    a.shapeColor="white"
    a.height=30
    a.width=30
    b.shapeColor="white"
    b.height=30
    b.width=30
  }
  

   

  drawSprites();
}