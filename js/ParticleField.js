function ParticleField( number , start , end , fade , fadeNum){
  

  var mat = new THREE.ShaderMaterial({
      
     // attributes:         attr,

    uniforms: G.uniforms,
    
    side: THREE.DoubleSide,
    vertexShader:       shaders.vs.title,
    fragmentShader:     shaders.fs.title,

    blending:THREE.AdditiveBlending

  });

  
  var g = new THREE.BufferGeometry();


  var tv = number + fadeNum * 2;

  var aPos  = new THREE.BufferAttribute(new Float32Array( tv * 4 * 3 ), 3 );
  var aUV   = new THREE.BufferAttribute(new Float32Array( tv * 4 * 2 ), 2 );
  var aID   = new THREE.BufferAttribute(new Float32Array( tv * 4 * 1 ), 1 );
  
  g.addAttribute( 'position', aPos ); 
  g.addAttribute( 'uv', aUV );
  g.addAttribute( 'size', aID );


  var positions = g.getAttribute( 'position' ).array;
  var uvs       = g.getAttribute( 'uv' ).array;
  var ids       = g.getAttribute( 'size' ).array;

  var idTotal = 0;

  for( var i = 0; i < number; i++ ){

    var p = new THREE.Vector3();
    p.z = (Math.random() - .5) * 4 - 2;
    p.x = (Math.random() - .5) * 3 * (p.z - 1)
    p.y = Math.random() * (end-start) + start;
   
    for( var j = 0; j < 4; j++ ){


      positions[ idTotal  * 3 + 0 ] = p.x; 
      positions[ idTotal  * 3 + 1 ] = p.y; 
      positions[ idTotal  * 3 + 2 ] = p.z;
      uvs[ idTotal * 2 + 0 ] = j % 2; 
      uvs[ idTotal * 2 + 1 ] = Math.floor(j / 2); 
      ids[ idTotal  ] = Math.floor(idTotal/4);  
      
      idTotal ++;

    }


  }

  for( var i = 0; i < fadeNum; i++ ){

  var p = new THREE.Vector3();
    p.z = (Math.random() - .5) * 4 - 2;
    p.x = (Math.random() - .5) * 3 * (p.z - 1)
    p.y = ((Math.random() * Math.random())) * fade + start;
   
   
    for( var j = 0; j < 4; j++ ){


      positions[ idTotal  * 3 + 0 ] = p.x; 
      positions[ idTotal  * 3 + 1 ] = p.y; 
      positions[ idTotal  * 3 + 2 ] = p.z;
      uvs[ idTotal  * 2 + 0 ] = j % 2; 
      uvs[ idTotal  * 2 + 1 ] = Math.floor(j / 2); 
      ids[ idTotal ] = Math.floor(idTotal/4);  
      
      idTotal ++;

    }


  }

  for( var i = 0; i < fadeNum; i++ ){

     var p = new THREE.Vector3();
    p.z = (Math.random() - .5) * 4 - 2;
    p.x = (Math.random() - .5) * 3 * (p.z - 1)
    p.y = -(Math.random() * Math.random()) * (fade) + end;
   
    for( var j = 0; j < 4; j++ ){


      positions[ idTotal  * 3 + 0 ] = p.x; 
      positions[ idTotal  * 3 + 1 ] = p.y; 
      positions[ idTotal  * 3 + 2 ] = p.z;
      uvs[ idTotal * 2 + 0 ] = j % 2; 
      uvs[ idTotal * 2 + 1 ] = Math.floor(j / 2); 
      ids[ idTotal ] =Math.floor(idTotal/4); 
      
      idTotal ++;

    }


  }

  var indices = [];

  for( var i = 0; i < tv; i++){
    indices.push(i * 4 + 0);
    indices.push(i * 4 + 1);
    indices.push(i * 4 + 3);
    indices.push(i * 4 + 0);
    indices.push(i * 4 + 3);
    indices.push(i * 4 + 2);
  }

  g.setIndex( indices );

  var particles = new THREE.Mesh( g , mat );
  return particles;
  

}