
attribute vec4 textCoord;
attribute vec2 lookup;

uniform sampler2D t_lookup;
uniform float time; 
uniform float golden; 

varying vec4 vTextCoord;
varying vec2 vUv;
varying vec3 vNorm;
varying vec3 vMPos;
varying vec3 vEye;
varying float vDist;

$simplex

void main(){
  
  vUv         = uv;
  vTextCoord  = textCoord;
 
  vec3 tpos =  texture2D( t_lookup , lookup ).xyz;

  float dif =((modelMatrix * vec4( tpos , 1. )).xyz - cameraPosition).y;
  //dif = dif * dif * 5.;
  float n = 1.+snoise( (tpos + position ) * 2. + vec3(0., 0., time * .4) );

  vec3 weird = 3. * vec3( snoise( tpos * 20. ) , snoise( tpos * 13. ) , snoise( tpos * 17. +100.) );
 
  vec3 pos = vec3(0. , 0.,n * .04) * (golden + .4) + tpos + position + weird * min( pow( abs(dif), 4.) , 10. ) * .8;

  vMPos = ( modelMatrix * vec4( pos , 1. ) ).xyz;

  vec4 mvPos = modelViewMatrix * vec4( pos , 1.0 );
 
  gl_Position = projectionMatrix * mvPos;

  vDist = length( mvPos );

  vEye = vMPos - cameraPosition;

}
