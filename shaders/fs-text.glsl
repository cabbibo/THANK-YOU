uniform vec3 color;
uniform sampler2D t_text;
uniform sampler2D t_audio;
uniform float opacity; 
uniform float time; 
uniform float golden;
uniform float random;


varying vec4 vTextCoord;
varying vec2 vUv;
varying float vDist;

varying vec3 vNorm;
varying vec3 vMPos;
varying vec3 vEye;

const float smoothing = 1.;// / 2.0;

vec3 hsv(float h, float s, float v)
{
    
  return mix( vec3( 1.0 ), clamp( ( abs( fract(
    h + vec3( 3.0, 2.0, 1.0 ) / 3.0 ) * 6.0 - 3.0 ) - 1.0 ), 0.0, 1.0 ), s ) * v;
}

$simplex

void main(){


  float x = vTextCoord.x;
  float y = vTextCoord.y;
  float w = vTextCoord.z;
  float h = vTextCoord.w;

  float xF = x + vUv.x * w;
  float yF = y + (1. - vUv.y) * h;

  vec2 sCoord =  vec2( xF , yF );

  float n = .4*snoise( vMPos * 100. + vec3(0.,0.,time * .4));
   n += snoise( vMPos * 10. + vec3(0.,0.,time * .2));

  vec3 col = hsv( n * .06 + .1 , .6 , 1.);
  
  float distance = texture2D( t_text , sCoord ).a;

  float lum = smoothstep( 0.4 - smoothing , 0.4 + smoothing , distance );
  float alpha = lum;



  if( distance < .1 ){  alpha = 0.; }


  float fallOffVal =  abs(vEye.y) * abs(vEye.y) * 3.;//30. / pow( vDist , 8. );
 
 col *= 1.-fallOffVal;

 vec3 tCol = texture2D( t_audio , vec2( vUv.y * 1. + .3 * random , 0.) ).xyz;
 col = tCol * 2. * hsv( random , 1.,1.);//mix( col , vec3(n + 1.5)*.5 , 1.-golden);
 
if( distance < .9 ){ col = vec3(1.);}

  gl_FragColor = vec4(col , alpha );


}
