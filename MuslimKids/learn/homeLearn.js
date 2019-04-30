var How_many_fish_do_you_want = 10;
var maxFishy = 1000;
var maxWaitForFishy = 10000;
var tank, tankWidth, tankHeight;

tank = $(".tank");

determineTankSize();
spawnStartingFish();

function determineTankSize() {
  tankWidth = tank.width() - 40;
  tankHeight = tank.height() - 65;
}

function spawnStartingFish() {
  for (var i = 0; i < How_many_fish_do_you_want; i++) {
    spawnFish(getRandom(tankWidth), getRandom(tankHeight));
  }
}

function spawnFish(x, y) {
  // Fish structure
  var fish = $(
    '<div class="fish"><div class="fish-depth"><div class="swim-height"><div class="swim-direction"><div class="fish-body"></div></div></div></div></div>'
  );

  // Get random color for fish
  var colors = [
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "purple",
    "purple",
    "purple",
    "purple",
    "orange",
    "orange",
    "orange",
    "pink",
    "pink"
  ];
  fish.addClass(colors[Math.floor(getRandom(17))]);

  // Get random depth for fish
  var depths = ["back", "middle", "middle", "middle", "front"];
  fish.addClass(depths[Math.floor(getRandom(6))]);

  // Set start direction of fish
  if (getRandom(2) < 1) {
    fish.addClass("fish-flip");
  }

  // Random swim-height delay
  fish.find(".swim-height").css("animation-delay", "-" + getRandom(7) + "s");

  // Bind click
  fish.find(".fish-body").on("click", pokeFish.bind(this, fish));
  positionFish(fish, x, y);

  // Fill the tank
  tank.append(fish);
  setTimeout(actLikeAFish.bind(this, fish), getRandom(10000));
}
// Position for the fish
function positionFish(fish, x, y) {
  fish
    .css("transform", "translate(" + x + "px, " + y + "px)")
    .data("x", x)
    .data("y", y);
}

// BUBBLES!!!
function blowBubble(fish) {
  var bubble = $('<div class="bubble">');
  if (fish.hasClass("fish-flip")) {
    bubble.addClass("bubble-flip");
  }

  // Set size on buble
  var bubbleSizes = [
    "small",
    "small",
    "normal",
    "normal",
    "normal",
    "normal",
    "normal",
    "big"
  ];
  bubble.addClass(bubbleSizes[Math.floor(getRandom(8))]);

  var x = fish.data("x");
  var y = fish.data("y");
  bubble.css({ top: y + "px", left: x + "px" });

  tank.prepend(bubble);
  setTimeout(popBubble.bind(this, bubble), 4000);
}

function popBubble(bubble) {
  bubble.remove();
}

function moveFish(fish) {
  var x = getRandom(tankWidth);
  var y = getRandom(tankHeight);

  if (x < fish.data("x")) {
    fish.addClass("fish-flip");
  } else {
    fish.removeClass("fish-flip");
  }

  var depths = ["back", "middle", "middle", "middle", "front"];
  fish
    .removeClass("back middle front")
    .addClass(depths[Math.floor(getRandom(6))]);

  positionFish(fish, x, y);
}

// Spin the fish on click
function pokeFish(fish) {
  fish.toggleClass("fish-spin");
  return false;
}

function actLikeAFish(fish) {
  blowBubble(fish);
  moveFish(fish);

  var timeout = fish.data("timeout");
  clearTimeout(timeout);
  timeout = setTimeout(actLikeAFish.bind(this, fish), 10000 + getRandom(6000));
  fish.data("timeout", timeout);
}

// random function
function getRandom(upper) {
  return Math.random() * upper;
}

var newFish = setInterval(function() {
  spawnFish(getRandom(tankWidth), getRandom(tankHeight));
  if ($(".fish").length >= maxFishy) {
    clearTimeout(newFish);
  }
}, maxWaitForFishy);

$(window).resize(function() {
  determineTankSize();
});
