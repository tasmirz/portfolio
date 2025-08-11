import { Program } from './Engine/Program.js'
async function main() {
	const canvas = document.createElement('canvas')
	canvas.width = 500
	canvas.height = 500
	document.querySelector('#parent').appendChild(canvas)

	/** @type {WebGLRenderingContext | null} */
	const gl = canvas.getContext('webgl2')
	if (gl == null) throw 'Failed to initiate webgl'

	const shader = new Program(gl, 'Shader/vertex.glsl', 'Shader/fragment.glsl')
	await shader.init()
	function draw() {
		shader.clear(1.0, 1.0, 0, 1.0)
		//prettier-ignore
		shader.passAttrib([['aPos', new Float32Array([
      -1, -1, 0,  // bottom-left
      1, -1, 0,  // bottom-right
      -1, 1, 0,  // top-left
      1, 1, 0,
    ]), 3]])

		const timeInSeconds = performance.now() / 1000
		shader.passUniforms([['u_time', timeInSeconds]])
		shader.draw(0, 4, gl.TRIANGLE_STRIP)
		//requestAnimationFrame(draw)
	}
	setInterval(draw, 100)
	// debugger
}
window.addEventListener('load', main)
//window.onload = main
//
