function preload() {
}
function setup() {
    canvas=createCanvas(450, 450);
    canvas.position(500,200)
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video, 35, 35, 350, 350);
fill("pink")
stroke("red")
    rect(20, 10, 35, 35);
    ellipse(375, 100, 85, 55);
    rect(375, 300, 35, 35);
    ellipse(20, 235, 85, 55);
}
function take_snapshot() {
    save('shruti.png');

}
