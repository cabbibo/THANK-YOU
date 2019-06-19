

function InitName( title , position){

  var name = new THREE.Object3D();



  name.snowflake = AddSnowflake( position )


        var vs = shaders.vertexShaders.text;
        var fs = shaders.fragmentShaders.text;



  name.particles = new TextParticles( title , font , vs , fs , {
         letterWidth: .1,
         lineLength: 50,
         uniforms:{
          time: time,
          golden: G.uniforms.golden,
         }  
        });

  //name.position = position;
 // name.particles.position = position;

/* name.particles.position.y += position.y - 1;
 name.particles.position.x += - 1;
  scene.add( name.particles );


       G.story.AddSmoothedEvent( position.y , position.y-( 1 + Math.random()), function(val , pos , delta){
          name.particles.position.y = pos;
          name.particles.rotation.y -= Math.abs(  val  )  * delta * 4;
        });*/



  console.log( "WIDHS:" + name.particles.totalWidth );
  name.particles.position.x -= 2*name.particles.totalWidth * ( .5/(name.particles.totalWidth *.005));
  name.particles.position.y += 2*name.particles.totalHeight * ( .75/(name.particles.totalWidth *.005));
  name.particles.position.z += .1/.005;
  

  name.particles.scale.multiplyScalar( 2/(name.particles.totalWidth *.005));


  name.snowflake.add( name.particles );


  return name;

  
}