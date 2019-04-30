.tank {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
}

.water {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00d2ff;
  background: -webkit-linear-gradient(to bottom, #00d2ff, #3a7bd5);
  background: linear-gradient(to bottom, #00d2ff, #3a7bd5);
  z-index: 2;
}

.sand {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #ede8af;
  z-index: 3;
}

.sand > .curve {
  position: absolute;
  bottom: 50%;
  background-color: #ede8af;
  border-radius: 50%;
}

.sand > .curve:nth-child(1) {
  height: 40px;
  width: 10%;
  left: -5%;
}

.sand > .curve:nth-child(2) {
  height: 80px;
  width: 15%;
  left: 2%;
  bottom: 0;
}

.sand > .curve:nth-child(3) {
  height: 70px;
  width: 15%;
  left: 10%;
  bottom: 0;
}

.sand > .curve:nth-child(4) {
  height: 80px;
  width: 25%;
  left: 20%;
  bottom: 0;
}

.sand > .curve:nth-child(5) {
  height: 80px;
  width: 10%;
  left: 40%;
  bottom: 0;
}

.sand > .curve:nth-child(6) {
  height: 80px;
  width: 10%;
  left: 45%;
  bottom: 0;
}

.sand > .curve:nth-child(7) {
  height: 60px;
  width: 17%;
  left: 50%;
  bottom: 10px;
}

.sand > .curve:nth-child(8) {
  height: 70px;
  width: 17%;
  left: 60%;
  bottom: 5px;
}

.sand > .curve:nth-child(9) {
  height: 100px;
  width: 12%;
  left: 70%;
  bottom: 0;
}

.sand > .curve:nth-child(10) {
  height: 80px;
  width: 20%;
  left: 75%;
  bottom: 0;
}

.sand > .curve:nth-child(11) {
  height: 80px;
  width: 10%;
  left: 90%;
  bottom: 0;
}

.sand > .curve:nth-child(12) {
  height: 100px;
  width: 5%;
  left: 98%;
  bottom: 0;
}

.treasure-chest {
  position: absolute;
  bottom: 50px;
  left: 70%;
  z-index: 5;
}

.treasure-chest > .lock {
  display: block;
  position: absolute;
  bottom: 164px;
  left: 165px;
  width: 36px;
  height: 18px;
  background-color: #838391;
  transform-style: preserve-3d;
  transform: rotateX(10deg) rotateY(45deg) skewX(-10deg);
}

.treasure-chest > .lock:before {
  display: block;
  position: absolute;
  top: 0;
  left: -4px;
  width: 36px;
  height: 18px;
  background-color: #e3ded8;
  content: "";
  transform: skewX(-10deg);
}

.treasure-chest > .lid-side {
  position: relative;
  display: block;
  width: 60px;
  height: 55px;
  border-radius: 50%;
  border: solid 10px #d99b60;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  transform-style: preserve-3d;
  transform: rotateX(10deg) rotateY(45deg) translateX(274px) translateY(148px) skewX(-10deg);
}

.treasure-chest > .lid-side > .plank {
  display: block;
  margin-right: -2px;
  width: 12px;
  height: 100%;
  float: right;
}

.treasure-chest > .lid-side > .plank:nth-child(1) {
  background-color: #ca8a5d;
}

.treasure-chest > .lid-side > .plank:nth-child(2) {
  background-color: #ae6a3d;
}

.treasure-chest > .lid-side > .plank:nth-child(3) {
  background-color: #783c18;
}

.treasure-chest > .lid {
  position: relative;
  display: block;
  background-color: #ae6a3d;
  width: 165px;
  height: 60px;
  overflow: hidden;
  border: solid 10px;
  border-color: #d99b60 #ae6a3d #ae6a3d;
  transform-style: preserve-3d;
  transform: rotateX(10deg) rotateY(45deg) translateX(108px) translateY(80px) skewX(-10deg);
}

.treasure-chest > .lid:before {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 5px;
  background-color: #75391d;
  content: "";
}

.treasure-chest > .lid:after {
  position: absolute;
  top: -7px;
  left: -45px;
  display: block;
  width: 80px;
  height: 75px;
  border-radius: 50%;
  background-color: #622c14;
  content: "";
}

.treasure-chest > .lid > .plank {
  display: block;
  width: 100%;
  height: 12px;
}

.treasure-chest > .lid > .plank:nth-child(1) {
  background-color: #ae6a3d;
}

.treasure-chest > .lid > .plank:nth-child(2) {
  background-color: #ca9263;
}

.treasure-chest > .lid > .plank:nth-child(3) {
  background-color: #b16d3c;
}

.treasure-chest > .lid > .plank:nth-child(4) {
  background-color: #c99162;
}

.treasure-chest > .lid > .plank:nth-child(5) {
  background-color: #d9a075;
}

.treasure-chest > .lid > .plank:nth-child(6) {
  background-color: #c17c52;
}

.treasure-chest > .top {
  position: relative;
  display: block;
  background-color: #834723;
  width: 160px;
  height: 60px;
  overflow: hidden;
  border: solid 20px;
  border-color: #612b13 #a17149 #aa7b5f #ad693c;
  transform: rotateX(10deg) rotateY(45deg) skew(-76deg, 0) scaleY(0.25) translateX(205px) translateY(156px);
}

.treasure-chest > .top:after {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 80px 0 0 80px;
  border-color: transparent transparent transparent #6f3b16;
  content: "";
}

.treasure-chest > .front {
  position: relative;
  display: block;
  background-color: rgba(255, 255, 255, 0.5);
  width: 200px;
  height: 80px;
  overflow: hidden;
  float: left;
  transform-style: preserve-3d;
  transform: rotateX(10deg) rotateY(45deg);
  -webkit-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
}

.treasure-chest > .front > .plank {
  display: block;
  width: 100%;
  height: 12px;
}

.treasure-chest > .front > .plank:nth-child(1) {
  background-color: #ca9263;
}

.treasure-chest > .front > .plank:nth-child(2) {
  background-color: #ca9263;
}

.treasure-chest > .front > .plank:nth-child(3) {
  background-color: #b16d3c;
}

.treasure-chest > .front > .plank:nth-child(4) {
  background-color: #c99162;
}

.treasure-chest > .front > .plank:nth-child(5) {
  background-color: #d9a075;
}

.treasure-chest > .front > .plank:nth-child(6) {
  background-color: #c17c52;
}

.treasure-chest > .front > .frame {
  position: absolute;
  background-color: #d99b60;
}

.treasure-chest > .front > .frame.top {
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
}

.treasure-chest > .front > .frame.right {
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
}

.treasure-chest > .front > .frame.bottom {
  right: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
}

.treasure-chest > .front > .frame.left {
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  border-right: solid 5px #7f451f;
}

.treasure-chest > .front > .corner {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #e3ded8;
  border-radius: 50%;
}

.treasure-chest > .front > .corner.top {
  top: -10px;
  left: -10px;
}

.treasure-chest > .front > .corner.right {
  top: -10px;
  right: -10px;
}

.treasure-chest > .front > .corner.bottom {
  right: -10px;
  bottom: -10px;
}

.treasure-chest > .front > .corner.left {
  bottom: -10px;
  left: -10px;
}

.treasure-chest > .front > .key-hole {
  display: block;
  margin-left: -9px;
  position: absolute;
  left: 50%;
  top: 10px;
  width: 4px;
  height: 15px;
  background-color: #4e4f54;
  border: solid 7px #82878b;
}

.treasure-chest > .left-side {
  position: relative;
  display: block;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100px;
  height: 80px;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: rotateX(-10deg) rotateY(45deg) translateX(-63px) translateY(-2px);
  float: left;
  -webkit-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
}

.treasure-chest > .left-side > .plank {
  display: block;
  width: 100%;
  height: 12px;
}

.treasure-chest > .left-side > .plank:nth-child(1) {
  background-color: #ae6a3d;
}

.treasure-chest > .left-side > .plank:nth-child(2) {
  background-color: #ae6a3d;
}

.treasure-chest > .left-side > .plank:nth-child(3) {
  background-color: #c4855c;
}

.treasure-chest > .left-side > .plank:nth-child(4) {
  background-color: #c99162;
}

.treasure-chest > .left-side > .plank:nth-child(5) {
  background-color: #cf9768;
}

.treasure-chest > .left-side > .plank:nth-child(6) {
  background-color: #ae6a3d;
}

.treasure-chest > .left-side > .frame {
  position: absolute;
  background-color: #c68950;
}

.treasure-chest > .left-side > .frame.top {
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
}

.treasure-chest > .left-side > .frame.right {
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  border-left: solid 4px #7f451f;
}

.treasure-chest > .left-side > .frame.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
}

.treasure-chest > .left-side > .frame.left {
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
}

.treasure-chest > .left-side > .corner {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #82878b;
  border-radius: 50%;
}

.treasure-chest > .left-side > .corner.top {
  top: -10px;
  left: -10px;
}

.treasure-chest > .left-side > .corner.right {
  top: -10px;
  right: -10px;
}

.treasure-chest > .left-side > .corner.bottom {
  bottom: -10px;
  right: -10px;
}

.treasure-chest > .left-side > .corner.left {
  bottom: -10px;
  left: -10px;
}

.fish {
  position: absolute;
  opacity: 0;
  transition: transform 10s;
  animation: spawn 0.5s forwards;
  z-index: 4;
}

@keyframes spawn {
  100% {
    opacity: 1;
  }
}
.swim-direction {
  position: relative;
  transition: transform 0.5s;
}

.swim-height {
  position: relative;
  margin-top: -20px;
  animation: swim-height 6s infinite;
}

@keyframes swim-height {
  50% {
    transform: translateY(40px);
  }
}
.fish-body {
  position: relative;
  margin-left: 10px;
  width: 50px;
  height: 30px;
  border-radius: 50%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  transition: transform 2s ease-out;
}

.fish-body::before {
  content: "";
  display: block;
  position: absolute;
  left: -10px;
  width: 0;
  height: 0;
  border-left: solid 25px transparent;
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
}

.fish-body::after {
  content: "";
  display: block;
  position: absolute;
  top: 8px;
  left: 34px;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
}

.green .fish-body {
  background-color: #74a135;
}

.green .fish-body::before {
  border-left-color: #74a135;
}

.purple .fish-body {
  background-color: #806fad;
}

.purple .fish-body::before {
  border-left-color: #806fad;
}

.orange .fish-body {
  background-color: #d49919;
}

.orange .fish-body::before {
  border-left-color: #d49919;
}

.pink .fish-body {
  background-color: #d97eb6;
}

.pink .fish-body::before {
  border-left-color: #d97eb6;
}

.fish-flip .swim-direction {
  transform: scaleX(-1);
}

.fish-spin .fish-body {
  transform: rotate(720deg);
}

.fish-depth {
  display: block;
  position: relative;
  transition: transform 2s ease-out;
}

.back {
  z-index: 4;
}

.back .fish-depth {
  transform: scale(0.9);
}

.middle {
  z-index: 6;
}

.front {
  z-index: 8;
}

.front .fish-depth {
  transform: scale(1.1);
}

.bubble {
  position: absolute;
  width: 6px;
  height: 6px;
  border: solid 1px #fff;
  border-radius: 50%;
  margin: -15px 0 0 20px;
  transform-origin: center top;
  animation: bubble 4s linear forwards;
  z-index: 6;
}

.bubble.small {
  width: 4px;
  height: 4px;
  z-index: 4;
}

.bubble.big {
  width: 9px;
  height: 9px;
  z-index: 8;
}

@keyframes bubble {
  100% {
    transform: translateY(-200px) rotate(-1080deg);
    opacity: 0;
  }
}
.bubble-flip {
  margin-left: -28px;
  animation-name: bubble-flip;
}

@keyframes bubble-flip {
  100% {
    transform: translateY(-200px) rotate(1080deg);
    opacity: 0;
  }
}
@media (max-width: 767px) {
  .treasure-chest {
    left: 50%;
  }
}
