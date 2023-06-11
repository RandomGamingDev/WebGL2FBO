let img;
let ban;
let shad;
let testS;
let gl;

let fbTex;
let fb;

let dim = 64;

function preload() {
  shad = loadShader("default.vert", "default.frag");
  testS = loadShader("default.vert", "default.frag");
}

function setup() {
  createCanvas(400, 400, WEBGL);
  gl = drawingContext;
  console.log("Flag0");
  const test = new Uint8Array([
    255, 0, 0, 255,
    255, 255, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255
  ]); // code is confirmed to work perfectly except for the part that works with p5.js
  img = new Texture.T2D(0, gl.RGBA, 2, 2, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, test, gl); // try with larger values in each of the different dimensions later
  img.paramI(gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  img.paramI(gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  console.log("Flag1");
  
  fbTex = new Texture.T2D(0, gl.RGBA, dim, dim, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, null, gl);
  img.paramI(gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  img.paramI(gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  
  fb = new Framebuffer(gl);
  fb.bind();
  fb.linkTexture2D(gl.COLOR_ATTACHMENT0, fbTex.bufType, fbTex.tex, 0);
  
  console.log(gl.getError());
  //noStroke();
}

function draw() {
  background(220);
  
  fb.bind();
  gl.viewport(0, 0, dim, dim);
  
  shader(shad);
  img.bind();
  img.setUniform(shad._glProgram, "test");
  
  rect(0, 0, 100, 100);
  
  fb.unbind();
  gl.viewport(0, 0, width, height)
  
  fbTex.bind();
  fbTex.setUniform(shad._glProgram, "test");
  
  rect(-200, -200, 400, 400);
  
  resetShader();
  
  if (shad.samplers[0].texture != undefined) {
    shad.samplers[0].texture.bindTexture = () => null;
    shad.samplers[0].texture.update = () => null;
    shad.samplers[0].location = drawingContext.getUniformLocation(shad._glProgram, "test");
  }
}