var UI = Class({
  initialize: function( scene ) {
    this.scene = scene;
    this.buttons = [];
  },

  initializeButton: function() {
//    var ButtonNameList = ['clear', 'circle', 'triangle', 'square', 'diamond', 'star', 'rotate', 'heart', 'pentagon', 'hexagon', 'oval', 'cross'];
//    var alpha = 2*Math.PI/ButtonNameList.length;
//    var radius = window.innerWidth/100;
//    
//    for (var i=0; i<ButtonNameList.length; i++) {
//      var shapeButton = new ShapeButton(ButtonNameList[i], 1);
//      shapeButton.button.translateX(radius*Math.sin(alpha*i));
//      shapeButton.button.translateY(radius*Math.cos(alpha*i));
//      this.buttons.push( shapeButton.button );
//      this.scene.add( shapeButton.button );
//    }
    
    var shapeButton = new ShapeButton('heart', 1);
      this.buttons.push( shapeButton.button );
      this.scene.add( shapeButton.button );
  },
  
  createShapeButton: function( shape, size ) {
    var size = typeof size !== 'undefined' ?  size : 1;
  
    var shapeButton = new ShapeButton();
    
    if (shape == 'circle') {
      shapeButton = this.createCircleShapeButton( size );
    }
    
    this.buttons.push( shapeButton );
    this.scene.add( shapeButton );
  },
  

  
  

});


