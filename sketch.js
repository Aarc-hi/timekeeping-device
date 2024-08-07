function setup() {
  createCanvas(400, 200);
  textSize(48);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  let h = nf(hour(), 2);
  let m = nf(minute(), 2);
  let s = nf(second(), 2);
  text(`${h}:${m}:${s}`, width / 2, height / 2);
}
