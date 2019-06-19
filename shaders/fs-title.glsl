
uniform sampler2D t_audio;
uniform float opacity; 

varying vec2 vUv;
varying float vID;

void main(){


  float dif = length(vUv - vec2( .5 , .5 ));
  vec3 col = texture2D( t_audio , vec2( dif * .1 + abs(sin(vID)) , 0. )).xyz;

  if( dif > .5 ){ discard; }

  gl_FragColor = vec4(col ,1.);//, alpha * opacity );

}
