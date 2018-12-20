function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);

}

function draw() {
  //background(255,255,0,5)
  //rotate(frameCount);
  translate(width/2,height/2);
  rotate(pow(2,100*noise(frameCount)));
  scale(pow(1.0005,frameCount));
  
  //noLoop();
  line(-300,0,300,0);
  line(0,-300,0,300);
  //ellipse(0,0,100);
  for( a=-360;a<361;a++)
  {
   //rotate(a);
    y1=100*sin(a);
     y3=100/3*sin(3*a);
     y5=100/5*sin(5*a);
     y7=100/7*sin(7*a);
     push();
     stroke(0,255,0);
    ellipse(a,y1,1);
    pop(0,0);
    push();
    stroke(0,0,255);
    ellipse(a,y3,1);
    pop();
    ellipse(a,y5,1);
    ellipse(a,y7,1);
    ellipse(a,y1+y3,1);
    ellipse(a,y1+y3+y5,1);
    push();
    stroke(255,0,0)
    ellipse(a,y1+y3+y5+y7,3);
    pop();
    }
  
}
