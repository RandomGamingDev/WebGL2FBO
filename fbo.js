class Renderbuffer {
  constructor(format, w, h, gl) {
    this.gl = gl;
    this.bufType = gl.RENDERBUFFER;
    this.rb = gl.createRenderbuffer();
    this.bind();
    this.data(format, w, h);
  }
  
  data(format, w, h) {
    this.gl.renderbufferStorage(this.bufType, format, w, h);
  }
  
  bind() {
    this.gl.bindRenderbuffer(this.bufType, this.rb);
  }
  
  unbind() {
    this.gl.bindRenderbuffer(this.bufType, null);
  }
  
  delete() {
    this.gl.deleteRenderbuffer(this.rb);
  }
}

class Framebuffer {
  constructor(gl) {
    this.gl = gl;
    this.bufType = gl.FRAMEBUFFER
    this.create();
  }
  
  create() {
    this.fb = this.gl.createFramebuffer();
  }
  
  bind() {
    this.gl.bindFramebuffer(this.bufType, this.fb);
  }
  
  unbind() {
    this.gl.bindFramebuffer(this.bufType, null);
  }
  
  bindRead() {
    this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.fb);
  }
  
  unbindRead() {
    this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, null);
  }
  
  bindDraw() {
    this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, this.fb);
  }
  
  unbindDraw() {
    this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, null);
  }

  blit(srcX, srcY, srcW, srcH,
       dstX, dstY, dstW, dstH,
       mask, filt) {
    this.gl.blitFramebuffer(srcX, srcY, srcW, srcH,
                            dstX, dstY, dstW, dstH,
                            mask, filt);
  }
  
  linkTexture2D(attachmentPoint, texType, tex, level) {
    this.gl.framebufferTexture2D(this.bufType, attachmentPoint, texType, tex, level);
  }
  
  linkRBO(attachmentType, rb) {
    this.gl.framebufferRenderbuffer(this.bufType, attachmentType, this.gl.RENDERBUFFER, rb);
  }
  
  
  delete() {
    this.gl.deleteFramebuffer(this.fb);
  }
}
