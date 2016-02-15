var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

var ui = new UI(scene);
var kaleidoscope = new Kaleidoscope();
 

var start = function() {
  
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  camera.position.z = 25;
  
      var PI2 = Math.PI * 2;
    var material = new THREE.SpriteMaterial( {

					color: 0xffffff,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();

					}

				} );

    var mesh = new Object;
    
				for ( var i = 0; i < 10; i ++ ) {

          for ( var x = -1.5; x < 1.5; x += 0.1) {
            for (var y = -1.5; y < 1.5; y+= 0.1) {
              for (var z = -1; z < 1.5; z += 0.1) {
                a = 2*x*x + 2*y*y + z*z - 1;
                b = a*a*a - x*x*z*z*z/10-y*y*z*z*z;
                if (b<0) {
                  particle = new THREE.Sprite( material );
                  particle.position.x = x;
					         particle.position.y = y;
                particle.position.z = z;
                  
					scene.add( particle );
                }
              }
            }
          }
//               particle = new THREE.Sprite( material );
//					particle.position.x = x;
//					particle.position.y = y;
//              c = (2*x*x+2*y*y-1)/Math.cbrt(x*x/10+y*y);
//              if(c>0) {
//                particle.position.z = (1+2*Math.sqrt(c))/2;
//              } else {
//                
//                particle.position.z = (1-2*Math.sqrt(-c))/2;
//              }
//              
////					particle.position.x = Math.random() * 2 - 1;
////					particle.position.y = Math.random() * 2 - 1;
////					particle.position.z = Math.random() * 2 - 1;
////					particle.position.normalize();
////					particle.position.multiplyScalar( Math.random() * 10 + 450 );
//					particle.scale.multiplyScalar( 2 );
//					scene.add( particle );
//            }
//          }
          
					
				}
  
//  ui.initializeButton();
  
//  scene.add( kaleidoscope.cube );
  
  render();
}

			var render = function () {
				requestAnimationFrame( render );

//				kaleidoscope.cube.rotation.x += 0.1;
//				kaleidoscope.cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();

