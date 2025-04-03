let brush_color = null; 
let brush_thickness = 2; 
let select_color = false;
let funcNotes = false;   // flag to check whether to make the text appear
let lines = [];         // to store the sentences
let x = 0;
let food1 = true;
let food2 = true;
let food3 = true;
let circleFlag = true;
let color1 = "#c6cccc";





function setup() {
  // create the canvas (1280px wide, 800px high)
  createCanvas(1280, 800);
 // pixelDensity(1);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  //strokeWeight(5);
  
 

 // notes(); 
 
  fill(color1);
  rect(0, 0, width, height);

  
  fill(255);
  quad(790, 50, 1110, 20, 1140, 365, 820, 400);
  // stand

  fill(138, 81, 23);
  // top
  quad(820, 13, 850, 9, 855, 43, 825, 46);
  quad(1030, 3, 1060, 2, 1065, 25, 1035, 27);
  // below
  quad(850, 397, 880, 394, 920, 680, 890, 685);
  quad(1080, 372, 1110, 368, 1150, 670, 1120, 675);
  quad(905, 590, 1105, 575, 1110, 600, 910, 615);
  // side
  quad(853, 420, 865, 450, 850, 590, 840, 600);
  quad(1083, 407, 1096, 436, 1080, 560, 1070, 570);
  quad(854, 550, 870, 545, 873, 563, 853, 567);
  quad(899, 542, 1075, 515, 1074, 532, 902, 558);

  // table
  quad(0, 360, 650, 360, 600, 650, 0, 650);
  quad(580, 650, 600, 650, 600, 700, 580, 710);
  quad(640, 420, 650, 360, 650, 440, 640, 450);

  // paintings on wall
  fill(random(255), random(255), random(255));
  rect(50, 30, 260, 170);

  fill(random(255), random(255), random(255));
  rect(100, 130, 10, 70);
  fill(random(255), random(255), random(255));
  triangle(102, 40, 130, 160, 80, 160);

  fill(random(255), random(255), random(255));
  rect(170, 130, 10, 70);
  fill(random(255), random(255), random(255));
  triangle(172, 70, 200, 160, 150, 160);

  fill(random(255), random(255), random(255));
  rect(230, 130, 10, 70);
  fill(random(255), random(255), random(255));
  triangle(232, 85, 260, 160, 210, 160);

  fill(random(255), random(255), random(255));
  circle(270, 60, 30, 30);

  fill(random(255), random(255), random(255));
  rect(430, 30, 260, 170);
  
  fill(random(255), random(255), random(255));
  triangle(480, 90, 450, 120, 510, 120);
  fill(random(255), random(255), random(255));
  quad(480, 90, 510, 120, 600, 120, 570, 90);
  fill(random(255), random(255), random(255));
  quad(450, 120, 600, 120, 600, 200, 450, 200);
  line(510, 120, 510, 200);
  fill(random(255), random(255), random(255));
  quad(540, 150, 575, 150, 575, 200, 540, 200);
  fill(random(255), random(255), random(255));
  
  circle(650, 60, 30, 30);
  fill(random(255), random(255), random(255));
  rect(640, 160, 10, 40);
  fill(random(255), random(255), random(255));
  triangle(645, 100, 620, 180, 670, 180);
  

  



// color palette 
  // fill(255);
  // ellipse(550, 430, 120, 100);
  // ellipse(513, 427, 33, 30);
  // ellipse(533, 458, 30, 27);
  // ellipse(570, 460, 27, 24);
  // ellipse(590, 435, 24, 21);
  // ellipse(581, 411, 20, 16);
  // ellipse(563, 400, 15, 11);

// color box

fill(255);
quad(150, 500, 250, 400, 430, 430, 350, 550);
fill(143, 145, 112);
quad(150, 500, 160, 515, 351, 565,350, 550);
quad(430, 430, 427, 445, 351, 565, 350, 550);
quad(250, 400, 270, 285, 450, 310, 430,430);

// brush
fill(150, 150, 20);
quad(496, 530, 505, 534, 484, 628, 480, 625);
fill(0);
quad(494, 516, 514, 520, 505, 534, 496, 530);

fill(150, 150, 20);
quad(526, 530, 532, 534, 511, 628, 507, 625);
fill(0);
quad(526, 518, 537, 521, 532, 534, 525, 530);

fill(150, 150, 20);
quad(552, 530, 557, 532, 534, 628, 530, 625);
fill(0);
quad(553, 519, 562, 522, 558, 532, 552, 530);

fill(150, 150, 20);
quad(572, 530, 576, 532, 553, 629, 550, 627);
fill(0);
quad(573, 520, 580, 523, 576, 532, 572, 530);

fill(150, 150, 20);
quad(592, 530, 595, 532, 570, 629, 568, 627);
fill(0);
quad(593, 521, 597, 523, 596, 532, 592, 530);

// color box 

fill(255);
// first row
fill(242, 50, 12);
circle(256, 420, 30, 30);
fill(245, 158, 7);
circle(290, 426, 30, 30);
fill(245, 233, 17);
circle(324, 432, 30, 30);
fill(189, 250, 5);
circle(358, 438, 30, 30);
fill(104, 227, 131);
circle(392, 444, 30, 30);
// second row
fill(7, 245, 221);
circle(233, 446, 30, 30);
fill(49, 134, 153);
circle(267, 452, 30, 30);
fill(12, 76, 237);
circle(301, 458, 30, 30);
fill(173, 12, 232);
circle(335, 464, 30, 30);
fill(242, 15, 235);
circle(367, 470, 30, 30);
// third row
fill(237, 7, 107);
circle(210, 472, 30, 30);
fill(173, 165, 165);
circle(244, 478, 30, 30);
fill(150, 95, 6);
circle(278, 484, 30, 30);
fill(222, 222, 217);
circle(312, 490, 30, 30);
fill(99, 25, 78);
circle(346, 496, 30, 30);
// fourth row
fill(43, 41, 43);
ellipse(189, 495, 30, 25);
fill(199, 119, 99);
ellipse(222, 503, 30, 28);
fill(237, 28, 195);
ellipse(259, 510, 30, 30);
fill(171, 31, 19);
circle(295, 518, 30, 30);
fill(20, 99, 19);
circle(330, 525, 30, 30);


// color tubes box
fill(255);
quad(80, 370, 225, 400, 140, 490, 10, 450);
fill(143, 145, 112);
quad(10, 450, 140, 490, 138, 494, 12, 455);
quad(225, 400, 225, 405, 140, 495, 138, 494);

// color tubes
// 1
fill(255,50 ,100);
quad(80, 375, 105, 381, 65, 435, 50, 432);
arc(60, 430, 20, 20, 0, PI);
fill(174, 191, 174);
quad(52, 435, 63, 438, 60, 445, 51, 443);
circle(75, 405, 13, 13);
// 2
fill(22, 196, 22);
quad(110, 383, 135, 389, 97, 446, 84, 443);
arc(94, 438, 20, 20, 0, PI);
fill(174, 191, 174);
quad(86, 444, 95, 447, 90, 455, 83, 453);
circle(109, 410, 13, 13);

// 3
fill(113, 43, 217);
quad(145, 391, 175, 398, 142, 447, 125, 445);
arc(134, 445, 20, 20, 0, PI);
fill(174, 191, 174);
quad(127, 453, 137, 455, 133, 465, 125, 463);
circle(145, 420, 13, 13);

// mug
fill(174, 191, 174, 200);
quad(393, 552, 447, 552, 443, 610, 395, 610);
fill(0);
ellipse(420, 550, 52, 12);
fill(255, 255, 255, 200);
ellipse(420, 550, 50, 10);
fill(174, 191, 174);
ellipse(419, 610, 47, 10);

// pencil and pens
quad(446, 520, 450, 522, 438, 610, 435, 610);
fill(255);
triangle(446, 520, 450, 522, 448, 510);
fill(174, 191, 174, 200);
quad(440, 520, 444, 522, 432, 610, 429, 610);
quad(434, 520, 438, 522, 426, 610, 423, 610);
quad(428, 520, 432, 522, 420, 610, 417, 610);
quad(424, 520, 426, 522, 414, 610, 411, 610);
quad(417, 520, 420, 522, 410, 610, 405, 610);
quad(411, 520, 414, 522, 406, 610, 401, 610);
quad(404, 520, 408, 522, 402, 610, 397, 610);

fill(0);
triangle(440, 520, 444, 522, 442, 510);
fill(227, 80, 27);
triangle(434, 520, 438, 522, 436, 510);
fill(158, 230, 168);
triangle(428, 520, 432, 522, 430, 510);
fill(11, 58, 214);
triangle(424, 520, 426, 522, 426, 510);
fill(110, 76, 59);
triangle(417, 520, 420, 522, 419, 510);
fill(15, 245, 214);
triangle(411, 520, 414, 522, 413, 510);
fill(245, 218, 15);
triangle(404, 520, 408, 522, 406, 510);

// Crayons
fill(143, 145, 112);
quad(40, 550, 130, 570, 105, 620, 20, 600);
quad(20, 600, 105, 620, 106, 624, 22, 605);
quad(130, 570, 132, 574, 106, 624, 105, 620);

fill(242, 50, 12);
quad(50, 530, 56, 532, 48, 552, 42, 550);
triangle(50, 530, 56, 532, 56, 525);
fill(174, 191, 174);
circle(49, 540, 5, 5);

fill(245, 158, 7);
quad(58, 532, 64, 534, 56, 554, 50, 552);
triangle(58, 532, 64, 534, 65, 526);
fill(174, 191, 174);
circle(58, 542, 5, 5);

fill(7, 245, 221);
quad(66, 534, 72, 536, 64, 556, 58, 554);
triangle(66, 534, 72, 536, 73, 527);
fill(174, 191, 174);
circle(66, 544, 5, 5);

fill(173, 165, 165);
quad(74, 536, 80, 538, 72, 558, 66, 556);
triangle(74, 536, 80, 538, 82, 529);
fill(174, 191, 174);
circle(74, 546, 5, 5);

fill(222, 222, 217);
quad(82, 538, 88, 540, 80, 560, 74, 558);
triangle(82, 538, 88, 540, 88, 532);
fill(174, 191, 174);
circle(82, 548, 5, 5);

fill(43, 41, 43);
quad(90, 540, 96, 542, 88, 562, 82, 560);
triangle(90, 540, 96, 542, 96, 534);
fill(174, 191, 174);
circle(89, 550, 5, 5);

fill(150, 95, 6);
quad(98, 542, 104, 544, 96, 564, 90, 562);
triangle(98, 542, 104, 544, 104, 537);
fill(174, 191, 174);
circle(98, 552, 5, 5);

fill(99, 25, 78);
quad(106, 544, 112, 546, 104, 566, 98, 564);
triangle(106, 544, 112, 546, 112, 539);
fill(174, 191, 174);
circle(105, 554, 5, 5);

fill(242, 15, 235);
quad(114, 546, 120, 548, 112, 568, 106, 566);
triangle(114, 546, 120, 548, 120, 540);
fill(174, 191, 174);
circle(113, 556, 5, 5);

fill(171, 31, 19);
quad(122, 548, 128, 550, 120, 570, 114, 568);
triangle(122, 548, 128, 550, 128, 544);
fill(174, 191, 174);
circle(121, 558, 5, 5);

fill(20, 99, 19);
quad(130, 550, 136, 552, 128, 572, 122, 570);
triangle(130, 550, 136, 552, 136, 545);
fill(174, 191, 174);
circle(130, 560, 5, 5);

// eraser
fill(255);
quad(180, 550, 201, 550,  201, 600, 180, 600);
fill(250, 231, 20);
quad(180, 565, 201, 565, 201, 600, 180, 600);
fill(0);
textSize(15);
text("E", 186, 585);

// changing the canvas;
fill(255);
quad(218, 600, 365, 600, 365, 630, 218, 630);
quad(218, 600, 365, 600, 370, 590, 223, 590);
quad(365, 600, 370, 590, 370, 620, 365, 630);
fill(0);
textSize(12);
text('Change canvas', 250, 620);


let textButton = createButton('TEXT');
textButton.position(465, 400);
textButton.mousePressed(notes_disappear);

  food();

fill(0);
rect(1180, 50, 40, 20);
fill(0);
text('Selected color', 1163, 40);
}





function mousePressed() {
  // thickness of first brush

if(mouseX > 494 && mouseX < 514 && mouseY > 516 && mouseY < 534) {
    brush_thickness = 12;
}

if(mouseX > 526 && mouseX < 537 && mouseY > 518 && mouseY < 534) {
  brush_thickness = 8;
}

if(mouseX > 553 && mouseX < 562 && mouseY > 519 && mouseY < 532) {
  brush_thickness = 5;
}

if(mouseX > 573 && mouseX < 580 && mouseY > 520 && mouseY < 532) {
  brush_thickness = 3;
}

if(mouseX > 593 && mouseX < 597 && mouseY > 521 && mouseY < 532) {
  brush_thickness = 1;
}

// changing the canvas
if(mouseX > 218 && mouseX < 365 && mouseY > 600 && mouseY < 630) {
    fill(255);
    quad(790, 50, 1110, 20, 1140, 365, 820, 400);
  }


// food 

//oranges
if(dist(mouseX,mouseY,600, 430)<20 && mouseIsPressed){
  food1 = false;
}
if(dist(mouseX,mouseY,560, 430)<20 && mouseIsPressed){
  food2 = false;
}
if(dist(mouseX,mouseY,580,395)<20 && mouseIsPressed){
  food3 = false;
}


// picking the color

// Colors in the box - Row 1
if (dist(mouseX, mouseY, 256, 420) < 15) {
    // fill(242, 50, 12, 200);
    // circle(256, 420, 32, 32);
    brush_color = [242, 50, 12];
    fill(brush_color);
    rect(1180, 50, 40, 20);
    select_color = true;
}

if (dist(mouseX, mouseY, 290, 426) < 15) {
  // fill(245, 158, 7, 200);
  // circle(290, 426, 32, 32);
  brush_color = [245, 158, 7];
  fill(brush_color);
  rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 324, 432) < 15) {
  // fill(245, 233, 17, 200);
  // circle(324, 432, 32, 32);
  brush_color = [245, 233, 17];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 358, 438) < 15) {
  // fill(189, 250, 5, 200);
  // circle(358, 438, 32, 32);
  brush_color = [189, 250, 5];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 392, 444) < 15) {
  // fill(104, 227, 131, 200);
  // circle(392, 444, 32, 32);
  brush_color = [104, 227, 131];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

// Row 2

if (dist(mouseX, mouseY, 233, 446) < 15) {
  // fill(7, 245, 221, 200);
  // circle(233, 446, 32, 32);
  fill(brush_color);
    rect(1180, 50, 40, 20);
  brush_color = [7, 245, 221];
  select_color = true;
}

if (dist(mouseX, mouseY, 267, 452) < 15) {
  // fill(49, 134, 153, 200);
  // circle(267, 452, 32, 32);
  brush_color = [49, 134, 153];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 301, 458) < 15) {
  // fill(12, 76, 237, 200);
  // circle(301, 458, 32, 32);

  brush_color = [12, 76, 237];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 335, 464) < 15) {
  // fill(173, 12, 232, 200);
  // circle(335, 464, 32, 32);
  brush_color = [173, 12, 232];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 367, 470) < 15) {
  // fill(242, 15, 235, 200);
  // circle(367, 470, 32, 32);
  brush_color = [242, 15, 235];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

// Row 3
if (dist(mouseX, mouseY, 210, 472) < 15) {
  // fill(237, 7, 107, 200);
  // circle(210, 472, 32, 32);
  brush_color = [237, 7, 107];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 244, 478) < 15) {
  // fill(173, 165, 165, 200);
  // circle(244, 478, 32, 32);
  brush_color = [173, 165, 165];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 278, 484) < 15) {
  // fill(150, 95, 6, 200);
  // circle(278, 484, 32, 32);
  brush_color = [150, 95, 6];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 312, 490) < 15) {
  // fill(222, 222, 217, 200);
  // circle(312, 490, 32, 32);
  brush_color = [222, 222, 217];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 346, 496) < 15) {
  // fill(99, 25, 78, 200);
  // circle(346, 496, 32, 32);
  brush_color = [99, 25, 78];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

// Row 4

if (dist(mouseX, mouseY, 189, 495) < 15) {
  // fill(43, 41, 43, 200);
  // ellipse(189, 495, 31, 26);
  brush_color = [43, 41, 43];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 222, 503) < 15) {
  // fill(199, 119, 99, 200);
  // ellipse(222, 503, 31, 29);
  brush_color = [199, 119, 99];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 259, 510) < 15) {
  // fill(237, 28, 195, 200);
  // ellipse(259, 510, 32, 32);
  brush_color = [237, 28, 195];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 295, 518) < 15) {
  // fill(171, 31, 19, 200);
  // ellipse(295, 518, 31, 31);
  brush_color = [171, 31, 19];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 330, 525) < 15) {
  // fill(20, 99, 19, 200);
  // ellipse(330, 525, 31, 31);
  brush_color = [20, 99, 19];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

// Color tubes

if (dist(mouseX, mouseY, 75, 405) < 7) {
  // fill(174, 191, 174, 200);
  // circle(75, 405, 15, 15);
  brush_color = [255,50 ,100];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  brush_thickness = 11;
  select_color = true;
}

if (dist(mouseX, mouseY, 109, 410) < 7) {
  // fill(174,191,174, 200);
  // circle(109, 410, 15, 15);
  brush_color = [22, 196, 22];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  brush_thickness = 11;
  select_color = true;
}

if (dist(mouseX, mouseY, 145, 420) < 7) {
  // fill(174,191,174, 200);
  // circle(145, 420, 15, 15);
  brush_color = [113, 43, 217];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  brush_thickness = 11;
  select_color = true;
}

// Crayons
if (dist(mouseX, mouseY, 49, 540) < 3) {
  // fill(174,191,174, 200);
  // circle(49, 450, 7, 7);
  brush_color = [242, 50, 12];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 58, 542) < 3) {
  // fill(174,191,174, 200);
  // circle(58, 542, 7, 7);
  brush_color = [245, 158, 7];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 66, 544) < 3) {
  // fill(174,191,174, 200);
  // circle(66, 544, 7, 7);
  brush_color = [7, 245, 221];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 74, 546) < 3) {
  // fill(174,191,174, 200);
  // circle(74, 546, 7, 7);
  brush_color = [173, 165, 165];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 82, 548) < 3) {
  // fill(174,191,174, 200);
  // circle(82, 548, 7, 7);
  brush_color = [222, 222, 217];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 89, 550) < 3) {
  // fill(174,191,174, 200);
  // circle(89, 550, 7, 7);
  brush_color = [43, 41, 43];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 98, 552) < 3) {
  // fill(174,191,174, 200);
  // circle(98, 552, 7, 7);
  brush_color = [150, 95, 6];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 105, 554) < 3) {
  // fill(174,191,174, 200);
  // circle(105, 554, 7, 7);
  brush_color = [99, 25, 78];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 113, 556) < 3) {
  // fill(174,191,174, 200);
  // circle(113, 556, 7, 7);
  brush_color = [242, 15, 235];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 121, 558) < 3) {
  // fill(174,191,174, 200);
  // circle(121, 558, 7, 7);
  brush_color = [171, 31, 19];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

if (dist(mouseX, mouseY, 130, 560) < 3) {
  // fill(174,191,174, 200);
  // circle(130, 560, 7, 7);
  brush_color = [20, 99, 19];
  fill(brush_color);
    rect(1180, 50, 40, 20);
  select_color = true;
}

// eraser
  if (mouseX > 180 && mouseX < 201 && mouseY > 550 && mouseY < 600) {
    brush_color = [255, 255, 255];
    updateColors();
  }

// pencils

if(mouseX >= 446 && mouseX <= 448 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [255, 255, 255];
  brush_thickness = 1;
}

if(mouseX >= 440 && mouseX <= 444 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [0, 0, 0];
  brush_thickness = 1;
}

if(mouseX >= 434 && mouseX <= 438 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [227, 80, 27];
  brush_thickness = 1;
}

if(mouseX >= 428 && mouseX <= 432 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [158, 230, 168];
  brush_thickness = 1;
}

if(mouseX >= 424 && mouseX <= 426 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [11, 58, 214];
  brush_thickness = 1;
}

if(mouseX >= 417 && mouseX <= 420 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [110, 76, 59];
  brush_thickness = 1;
}

if(mouseX >= 411 && mouseX <= 414 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [15, 245, 214];
  brush_thickness = 1;
}

if(mouseX >= 404 && mouseX <= 408 && mouseY >= 510 && mouseY <= 522) {
  brush_color = [245, 218, 15];
  brush_thickness = 1;
}



  
}




function keyPressed() {
  // use Up arrow key to increase the thickness of the brush
  if (keyCode === UP_ARROW) {
    brush_thickness += 2;
  }
  // Use down arrow key to increase the thickness of the brush
  if (keyCode === DOWN_ARROW && brush_thickness > 2) {
    brush_thickness -= 2;
  }
}

function draw() {
  // your cool workstation code goes in this draw function
if (mouseIsPressed && mouseX > 820 && mouseY > 50 && mouseY < 365 && mouseX < 1110) {
    stroke(brush_color);
    strokeWeight(brush_thickness);
    line(mouseX, mouseY, pmouseX, pmouseY);   // using the inbuilt functions like mouseX and pmouseX.
  }


 // food();
  strength();

  

}


// function that toggles the text area
  function notes_disappear() {
    if (funcNotes) {
      
      for (let line of lines) {
        line.remove();
      }
      lines = []; 
    } else {
      
      if (brush_color === null) {
        alert("Please select a color and then press TEXT button to write something. Do same with the brush.");
        return; 
      } else {
        notes(); // Create notes if a color is selected
      }
    }
    funcNotes = !funcNotes; 
  }


  // Function that creates notes
  function notes(){
    push();
    let line1 = createInput('');
    line1.position(850, 100);
    line1.size(200,20);
    line1.style('color', `rgb(${brush_color[0]}, ${brush_color[1]}, ${brush_color[2]})`);
    lines.push(line1);

    let line2 = createInput('');
    line2.position(850, 150);
    line2.size(200,20);
    line2.style('color', `rgb(${brush_color[0]}, ${brush_color[1]}, ${brush_color[2]})`);
    lines.push(line2);

    let line3 = createInput('');
    line3.position(850, 200);
    line3.size(200,20);
    line3.style('color', `rgb(${brush_color[0]}, ${brush_color[1]}, ${brush_color[2]})`);
    lines.push(line3)

    let line4 = createInput('');
    line4.position(850, 250);
    line4.size(200,20);
    line4.style('color', `rgb(${brush_color[0]}, ${brush_color[1]}, ${brush_color[2]})`);
    lines.push(line4);

    pop();
  }


  function updateColors() {
    
    for (let line of lines) {
      line.style('color', `rgb(${brush_color[0]}, ${brush_color[1]}, ${brush_color[2]})`);
    }
  }


  function food(){
    push();
    fill(252,168,23);
    if(food1) circle(600,430,40);
    if(food2) circle(560,430,40);
    if(food3) circle(580,395,40);
    pop();
    }


    function strength(){
      push();
      noStroke();
      let energy = 0;
      let str = 60;
      if(!food1) energy++;
      if(!food2) energy++;
      if(!food3) energy++;
      rect(520, 285, 180, 20);
      fill(80,250,24);
      rect(520,285,str*energy,20);
      fill(179, 109, 25);
      if(energy!=3) {
        textSize(14);
        text("EAT SOME FRUITS AND GAIN ENERGY",480,270);
       
        }

      if(energy == 3) {
        fill(179, 109, 25);
        textSize(14);
        text("NOW, START WORKING.", 530, 330);
        
      }
      
      pop();
    }
    
    
// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}
