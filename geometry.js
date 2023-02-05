class Circle {
  constructor(r, x, y, sw, bgColor, strokeColor) {
    this.x = x + 0;
    this.y = y;

    this.bgColor = bgColor;

    this.sw = sw;
    this.strokeColor = strokeColor;

    this.r = r;
    this.d = 2 * this.r;
    this.p = 2 * Math.PI * r;
    this.a = Math.PI * Math.pow(r, 2);
  }

  show() {
    strokeWeight(this.sw);
    stroke(this.strokeColor.color());
    fill(this.bgColor.color());
    if(isNaN(this.r)) this.r = ceil(this.r);
    // console.log(typeof(this.r));
    circle(this.x, this.y, this.r);
  }

  move(t, x, y) {
    if (t == "abs") {
      this.x = x;
      this.y = y;
    } else {
      this.x = this.x + x;
      this.y = this.y + y;
    }
  }
}

class Triangle {
  constructor(a1x, a2x, a3x, a1y, a2y, a3y, sw, fill, stroke) {
    this.a1x = a1x;
    this.a2x = a2x;
    this.a3x = a3x;

    this.x = a1x;
    this.y = a1y;

    this.a1y = a1y;
    this.a2y = a2y;
    this.a3y = a3y;

    this.sw = sw;
    this.fill = fill;
    this.stroke = stroke;

    this.A = dist(this.a1x, this.a1y, this.a2x, this.a2y);
    this.B = dist(this.a3x, this.a3y, this.a2x, this.a2y);
    this.C = dist(this.a1x, this.a1y, this.a3x, this.a3y);

    this.frameX = [a2x - a1x, a3y - a2y, a3x - a1x];
    this.frameY = [a2y - a1y, a3y - a2y, a3y - a1y];

    this.p = this.A + this.B + this.C;

    this.a = areaOfTriangle(this.A, this.B, this.C);
  }
  
  show() {
    fill(this.fill.color());
    strokeWeight(this.sw);
    stroke(this.stroke.color());

    beginShape(TRIANGLES);
    vertex(this.a1x, this.a1y);
    vertex(this.a2x, this.a2y);
    vertex(this.a3x, this.a3y);
    endShape(CLOSE);
  }

  move(t, x, y) {
    if (t == "abs") {
      this.a1x = x;
      this.a1y = y;

      this.a2x = x + this.frameX[0];
      this.a2y = y + this.frameY[0];

      this.a3x = x + this.frameX[2];
      this.a3y = y + this.frameY[2];

      this.x = this.a1x;
      this.y = this.a1y;
    } else {
      this.a1x += x;
      this.a1y += y;
      this.a2x += x;
      this.a2y += y;
      this.a3x += x;
      this.a3y += y;

      this.x = this.a1x;
      this.y = this.a1y;
    }
  }
}

class Rectangle {
  constructor(x, y, l, w, sw, fills, strokes) {
    this.x = x;
    this.y = y;

    this.l = l;
    this.w = w;

    this.fill = fills;
    this.stroke = strokes;
    this.sw = sw;

    this.a = l * w;
    this.p = l * 2 + w * 2;
    this.d = sqrt(this.w * this.w + this.l * this.l);
  }
  
  show() {
    fill(this.fill.color());
    strokeWeight(this.sw);
    stroke(this.stroke.color());
    rect(this.x, this.y, this.l, this.w);
  }
  
  move(t, x, y) {
    if (t == "abs") {
      this.x = x;
      this.y = y;
    } else {
      this.x = this.x + x;
      this.y = this.y + y;
    }
  }
}

// others
function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  return sqrt(s * (s - a) * (s - b) * (s - c));
}

class Colour {
  constructor(r = 255, g = 255, b = 255, a = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  invert() {
    this.r = 255 - this.r;
    this.g = 255 - this.g;
    this.b = 255 - this.b;
    this.a = 255 - this.a;
    return this;
  }

  color() {
    return color(this.r, this.g, this.b, this.a);
  }
}
