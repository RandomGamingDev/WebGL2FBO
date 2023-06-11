#version 300 es

precision mediump float;

in vec2 vTexCoord;

uniform sampler2D test;
//uniform float test;

out vec4 fragColor;

void main() {
  fragColor = texture(test, vTexCoord);
  //fragColor = vec4(test, 1.0, 0.0, 1.0);
}