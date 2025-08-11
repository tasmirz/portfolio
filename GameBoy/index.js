const canvas = document.createElement('canvas')
canvas.width = 500
canvas.height = 500
document.querySelector('#parent').appendChild(canvas)

/** @type {WebGLRenderingContext | null} */
const gl = canvas.getContext('webgl2')
if (gl == null) throw 'Failed to initiate webgl'
