var ShapeButton = Class({
  initialize: function( shape, size ) {
    this.shape = typeof shape !== 'undefined' ?  shape : 'circle';
    this.size = typeof size !== 'undefined' ?  size : 1;
    this.button = this.createShapeButton();
  },
  
  createShapeButton: function() {
    switch (this.shape) {
      case 'circle':
        return this.createCircleButton( this.size );
        break;
      case 'triangle':
        return this.createTriangleButton( this.size );
        break;
      case 'square':
        return this.createSquareButton( this.size );
        break;
      case 'diamond':
        return this.createDiamondButton( this.size );
        break;
      case 'star':
        return this.createStarButton( this.size );
        break;
      case 'heart':
        return this.createHeartButton( this.size );
        break;
      case 'pentagon':
        return this.createPentagonButton( this.size );
        break;
      case 'hexagon':
        return this.createHexagonButton( this.size );
        break;
      case 'oval':
        return this.createOvalButton( this.size );
        break;
      case 'cross':
        return this.createCrossButton( this.size );
        break;
      case 'clear':
        return this.createClearButton( this.size );
        break;
      case 'rotate':
        return this.createRotateButton( this.size );
        break;
    }
  },
  
  createCircleButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var radius = size;
    var segments = 32;

    var geometry = new THREE.CircleGeometry( radius, segments );
    geometry.vertices.shift();
    return new THREE.Line( geometry, material );
  },
  
  createTriangleButton: function( size ) { 
    var material = new THREE.MeshBasicMaterial({
      color: 0x0000ff
    });

    var geometry = new THREE.Geometry();

    geometry.vertices.push(
	   new THREE.Vector3(  0, 0.9, 0 ),
	   new THREE.Vector3( -1.1, -0.4, 0 ),
	   new THREE.Vector3(  1.1, -0.4, 0 ),
	   new THREE.Vector3(  0, 0.9, 0 )
    );
    
    return new THREE.Line( geometry, material );
  },
  
  createSquareButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
	    new THREE.Vector3(size/1.5, size/1.5, 0),
      new THREE.Vector3(size/1.5, -size/1.5, 0),
      new THREE.Vector3(-size/1.5, -size/1.5, 0),
      new THREE.Vector3(-size/1.5, size/1.5, 0),
      new THREE.Vector3(size/1.5, size/1.5, 0)
    );

    
    return new THREE.Line( geometry, material );
  },
  
  createDiamondButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });
    
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3(-size/1.5, 0, 0),
      new THREE.Vector3(0, 3*size/3, 0),
      new THREE.Vector3(size/1.5, 0, 0),
      new THREE.Vector3(0, -3*size/3, 0),
      new THREE.Vector3(-size/1.5, 0, 0)
    );

    return new THREE.Line( geometry, material );
  },
  
  createStarButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var alpha = (2 * Math.PI) / 10; 
    var radius = 1;
    var geometry = new THREE.Geometry();

    for(var i = 11; i != 0; i--) {
      var r = radius*(i % 2 + 1)/2;
      var omega = alpha * i;
      geometry.vertices.push(new THREE.Vector3(r * Math.sin(omega), r * Math.cos(omega),0));
    }
  
    return new THREE.Line( geometry, material );
  },
  
  createHeartButton: function( size, scene ) { 
//    var material = new THREE.LineBasicMaterial({
//      color: 0x0000ff
//    });

//mesh.add(particle);

//    var x = 0, y = 0;
//
//		var heartShape = new THREE.Shape(); // From http://blog.burlock.org/html5/130-paths
//
//		heartShape.moveTo( x + 25, y + 25 );
//		heartShape.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y );
//		heartShape.bezierCurveTo( x - 30, y, x - 30, y + 35,x - 30,y + 35 );
//		heartShape.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 );
//		heartShape.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 );
//		heartShape.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y );
//		heartShape.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );
//
//    var geometry = new THREE.ShapeGeometry( heartShape );
//    var mesh = new THREE.Line( geometry, material );
////    mesh.scale.set(0.015,0.15,0.015);
//    mesh.scale.set(0.15,0.15,0.15);
//    mesh.rotateZ(Math.PI);
//    mesh.translateX(-4);
//    mesh.translateY(-6);
    return mesh;
  },
  
  createPentagonButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var radius = size;
    var segments = 5;

    var geometry = new THREE.CircleGeometry( radius, segments );
    geometry.vertices.shift();
    return new THREE.Line( geometry, material );
  },
  
  createHexagonButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var radius = size;
    var segments = 6;

    var geometry = new THREE.CircleGeometry( radius, segments );
    geometry.vertices.shift();
    return new THREE.Line( geometry, material );
  },

  createOvalButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var curve = new THREE.EllipseCurve(
	   0,  0,            // ax, aY
	   1, 0.6,           // xRadius, yRadius
	   0,  2 * Math.PI,  // aStartAngle, aEndAngle
	   false,            // aClockwise
	   0                 // aRotation 
    );

    var path = new THREE.Path( curve.getPoints( 32 ) );
    var geometry = path.createPointsGeometry( 32 );
    return new THREE.Line( geometry, material );
  },
  
  createCrossButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var alpha = (2 * Math.PI) / 8; 
    var radius = 1;
    var geometry = new THREE.Geometry();

    for(var i = 9; i != 0; i--) {
      var r = radius*(i % 2 + 1)/2;
      var omega = alpha * i;
      geometry.vertices.push(
        new THREE.Vector3(r * Math.sin(omega), r * Math.cos(omega),0)
      );
    }
    geometry.rotateZ(Math.PI/4);
    return new THREE.Line( geometry, material );
  },
  
  createClearButton: function( size ) { 
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3(.6, .9, 0),
      new THREE.Vector3(.9, .6, 0),
      new THREE.Vector3(.3, 0, 0),
      new THREE.Vector3(.9, -.6, 0),
      new THREE.Vector3(.6, -.9, 0),
      new THREE.Vector3(0, -.3, 0),
      new THREE.Vector3(-.6, -.9, 0),
      new THREE.Vector3(-.9, -.6, 0),
      new THREE.Vector3(-.3, 0, 0),
      new THREE.Vector3(-.9, .6, 0),
      new THREE.Vector3(-.6, .9, 0),
      new THREE.Vector3(0, .3, 0),
      new THREE.Vector3(.6, .9, 0)
    );

    return new THREE.Line( geometry, material );
  },
  
  createRotateButton: function( size ) {
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var radius = size;
    var segments = 32;

    var geometry = new THREE.CircleGeometry( radius, segments, 0, 4.71 );
    geometry.vertices.shift();
     geometry.vertices.push(
      new THREE.Vector3(-0.4, -0.5, 0),
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(-.5, -1.3, 0)
    )
    return new THREE.Line( geometry, material );
  },
});



