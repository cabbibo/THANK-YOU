

uniform sampler2D t_audio;

varying vec2 vUv;
varying float vID;

attribute float size;


void main(){
  
  vID = size;
  vUv         = uv;

  vec3 a = texture2D(t_audio, vec2(abs(sin(size)) , 0.)).xyz;

  vec3 pos = position + .1*length(a) * vec3( vUv.x -.5, vUv.y-.5 , 0.);
  
  //vec3 pos = texture2D( t_lookup , lookup ).xyz + position;

  vec4 mvPos = modelViewMatrix * vec4( pos , 1.0 );
 
  gl_Position = projectionMatrix * mvPos;

}
