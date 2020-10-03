var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["27d1dfca-b6de-4a16-97a2-05732bba0589","f39dc0f0-de73-4b3d-a7f5-8534a89462b7"],"propsByKey":{"27d1dfca-b6de-4a16-97a2-05732bba0589":{"name":"medalGold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/i95o1kssxllo7fkUi5jdBsm.b0wAQIVU/category_gameplay/medalGold.png","frameSize":{"x":114,"y":119},"frameCount":1,"looping":true,"frameDelay":15,"version":"i95o1kssxllo7fkUi5jdBsm.b0wAQIVU","loadedFromSource":true,"saved":true,"sourceSize":{"x":114,"y":119},"rootRelativePath":"assets/api/v1/animation-library/gamelab/i95o1kssxllo7fkUi5jdBsm.b0wAQIVU/category_gameplay/medalGold.png"},"f39dc0f0-de73-4b3d-a7f5-8534a89462b7":{"name":"gold-cup-icon-vector-21409779.jpg_1","sourceUrl":null,"frameSize":{"x":1000,"y":1080},"frameCount":1,"looping":true,"frameDelay":12,"version":"M9d0nRZYahU1rivQFcC.c3BGZAn.OK29","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1080},"rootRelativePath":"assets/f39dc0f0-de73-4b3d-a7f5-8534a89462b7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sophia=createSprite(0,0,20,20);
var goldenCup=createSprite(400,400,30,30);
var wall1=createSprite(50,50,10,105);
var wall2=createSprite(0,144,108,10);
var wall3=createSprite(105,115,10,370);
var wall4=createSprite(75,200,55,10);
var wall5=createSprite(25,250,0,10);
var wall6=createSprite(50,350,10,100);
var wall7=createSprite(150,350,200,10);
var wall8=createSprite(150,300,100,10);
var wall9=createSprite(200,50,10,300);
var wall10=createSprite(200,280,10,50);
var wall11=createSprite(250,200,10,300);
var wall12=createSprite(380,100,160,10);
var wall13=createSprite(300,200,100,10);
var wall14=createSprite(350,300,100,10);
var wall15=createSprite(300,375,10,50);
var wall16=createSprite(348,70,10,50);
var wall17=createSprite(273,50,55,10);
var wall18=createSprite(350,177,10,53);
var wall19=createSprite(275,250,50,10);
var wall20=createSprite(350,275,10,50);


function draw() {
background("#00f1ff");
createEdgeSprites();  
sophia.bounceOff(edges);   
 
 sophia.shapeColor="#e619c0";
 goldenCup.shapeColor="gold";
 

if(keyDown(UP_ARROW)) {
  sophia.velocityX= 0; 
  sophia.velocityY=-2; 
}

if(keyDown(DOWN_ARROW)) {
  sophia.velocityX= 0; 
  sophia.velocityY= 2; 
  
}
if(keyDown(RIGHT_ARROW)) {
  sophia.velocityX= 2; 
  sophia.velocityY= 0; 

}
if(keyDown(LEFT_ARROW)) {
  sophia.velocityX= -2; 
  sophia.velocityY= 0; 

}
{
sophia.bounceOff(wall1);
sophia.bounceOff(wall2);
sophia.bounceOff(wall3);
sophia.bounceOff(wall4);
sophia.bounceOff(wall5);
sophia.bounceOff(wall6);
sophia.bounceOff(wall7);
sophia.bounceOff(wall8);
sophia.bounceOff(wall9);
sophia.bounceOff(wall10);
sophia.bounceOff(wall11);
sophia.bounceOff(wall12);
sophia.bounceOff(wall13);
sophia.bounceOff(wall14);
sophia.bounceOff(wall15);
sophia.bounceOff(wall16);
sophia.bounceOff(wall17);
sophia.bounceOff(wall18);
sophia.bounceOff(wall19);
sophia.bounceOff(wall20);

}
{
if (sophia.collide(goldenCup)) {
textSize(68);
text("YOUR ARE A WINNER",+textSize(),200,300);
}


}
drawSprites(); 
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
