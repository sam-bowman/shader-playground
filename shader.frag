precision mediump float;

varying vec2 pos;

void main() {
  vec4 colourTL = vec4(0.3,0.6,0.2,1.0);
  vec4 colourTR = vec4(0.89, 0.41, 0.05, 1.0);
  vec4 colourBL = vec4(0.08, 0.11, 0.65, 1.0);
  vec4 colourBR = vec4(0.9, 0.02, 0.8, 1.0);

  vec4 mixedColourTop = mix(colourTL, colourTR, pos.x);
  vec4 mixedColourBottom = mix(colourBL, colourBR, pos.x);

  vec4 mixedColour = mix(mixedColourTop, mixedColourBottom, pos.y);

  gl_FragColor = mixedColour;
}