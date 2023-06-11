# WebGL2FBO
A simple library for OOP encapsulation and abstraction of some of WebGL2 Framebuffers and the Renderbuffers they rely on.

Note: If you wanna see examples of how to use the library check out https://github.com/RandomGamingDev/WebGL2FBO/tree/main/examples and if you want to learn about the more complex features you can search on Google and check out the WebGL documentation since this is basically just an OOP overlay over the WebGL API which means that u should be able to figure out how to use the library from the WebGL documentation.

There are the `Framebuffer` and `Renderbuffer` classes which can be used alongside regular WebGL code or with libraries that can interface with regular WebGL code (this includes a library that I made for WebGL2 textures that I recommend you use when using this library here's the [link](https://github.com/RandomGamingDev/WebGL2Tex))

In order to properly render to the buffer's dimensions use `gl.viewport` in order to set the proper viewport and then set it back.

Check the code and the WebGL documentation for the parameters needed.

To use this library you can simply include https://cdn.jsdelivr.net/gh/RandomGamingDev/WebGL2FBO/fbo.js in your HTML file! If you want to you can also just download the file and include it in your HTML file that way.

btw stuff updates so remember to specify a version/commit for your library if you want to use a link and don't want your code to automatically update to the newest version of the library

Also, this library is based on the Wireframe game engine, which is another project that I made, and is more specifically a C++ game engine/framework for graphics and audio abstractions for ease of use (it's 0-cost too :D). You can check that out here: https://github.com/RandomGamingDev/Wireframe
