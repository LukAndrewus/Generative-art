let imeg;
let cnv;
let Res = 2;
let wordCount = 0

word = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
// word = ' Rigger';

function preload() {
  // imeg = loadImage('Photos/PHX hood classic.JPG')
  // imeg = loadImage('Photos/CyberFunk.png')
  imeg = loadImage('Photos/bbbb.jpg')

}

function setup() {
  angleMode(DEGREES)
  cnv = createCanvas(imeg.width, imeg.height);
  // print(imeg.width, imeg.height);
  let newCanvasX = (windowWidth - imeg.width) / 2;
  let newCanvasY = (windowHeight - imeg.height) / 2;
  cnv.position(newCanvasX, newCanvasY);

  for (let col = 0; col < imeg.height; col += Res) {
    for (let row = 0; row < imeg.width; row += Res) {
      let xPos = row;
      let yPos = col;
      let c = imeg.get(row, col);

      if (wordCount >= word.length){
        wordCount = 0;
      }

      // wordDisplayed = int(wordCount);
      wordDisplayed = int(random(word.length))

      fill(color(c));
      textStyle(BOLD);
      stroke(color(c));
      strokeWeight(3)
      textSize(Res);
      text(word[wordDisplayed], row, col);

      wordCount++;

    }
  }
}
