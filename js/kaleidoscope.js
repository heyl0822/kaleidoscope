var Kaleidoscope = function( angle ) {
  this.angle = angle;
  
  
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  this.cube = new THREE.Mesh( geometry, material );
  
}

Kaleidoscope.prototype.show = function() {
  
}

Kaleidoscope.prototype.generateGeometry = function( type ) {
  
}