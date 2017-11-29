// import pixi from "pixi.js";
import * as phina from "phina.js";

phina.globalize();

phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    var label = Label('Hello, phina.js!').addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center());
  }
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main'
  });
  app.run();
});