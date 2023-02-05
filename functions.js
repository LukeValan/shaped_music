function geometricBG() {
  
  for (let i = 0; i<200; i++){
    let x =(random(shape_possibilities))
    //let x ="rectangle"
    let thisShape;
    if (x == "circle"){
       
      thisShape = new Circle(ceil(random(-1,30)),ceil(random(-1,800)),ceil(random(-1,800)),ceil(random(-1,9)),new Colour(ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255))), new Colour(ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255))))
      
    }else if (x == "triangle"){
      let bx = ceil(random(0,800)) 
      let by = ceil(random(0,800)) 
      thisShape = new Triangle(bx,bx+ceil(random(-40,40)),bx+ceil(random(-35,35)),by,by+ceil(random(-40,40)),by+ceil(random(-35,35)),ceil(random(0,7)),new Colour(ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255))), new Colour(ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255))))
    }else{
       thisShape = new Rectangle(ceil(random(-25,775)),ceil(random(-25,775)),ceil(random(-10,50)), ceil(random(-5,30)),ceil(random(-9,10)), new Colour(ceil(random(-1,255)),ceil(random(-1,255)), ceil(random(-1,255)),ceil(random(-1,255))), new Colour(ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255))) )
    }
       generated_shapes.push(thisShape)
  }
  
    rgda = [ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255)),ceil(random(-1,255))]
  
}

function dynaBG () {
  background(rgda[0]+random(-10,10),rgda[1]+random(-10,10),rgda[2]+random(-10,10),rgda[3]+random(-10,10));
  for (let i = 0; i<generated_shapes.length; i++){
    generated_shapes[i].move("NA",ceil(random(-4,3)),ceil(random(-4,3)))
    generated_shapes[i].show()
  }
}


