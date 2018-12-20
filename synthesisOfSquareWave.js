function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,0,10)
  translate(width/2,height/2);
  //noLoop();
  line(-300,0,300,0);
  line(0,-300,0,300);
  //ellipse(0,0,100);
  for( a=-360;a<361;a++)
  {
     y1=100*sin(a);
     y3=100/3*sin(3*a);
     y5=100/5*sin(5*a);
     y7=100/7*sin(7*a);
    ellipse(a,y1,1);
    ellipse(a,y3,1);
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
