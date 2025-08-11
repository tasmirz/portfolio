export class Program {
	/**
	 * @param {WebGLRenderingContext} gl - The WebGL rendering context.
	 * @param {string} vertexSource - GLSL source code for the vertex shader.
	 * @param {string} fragmentSource - GLSL source code for the fragment shader.
	 */
	/** @type {WebGLProgram} */
	#program
	/** @type {WebGLRenderingContext} */
	#gl
	#vertexShaderURL
	#fragmentShaderURL
	constructor(gl, vertexShaderURL, fragmentShaderURL) {
		this.#gl = gl
		this.#vertexShaderURL = vertexShaderURL
		this.#fragmentShaderURL = fragmentShaderURL
	}

	async init() {
		try {
			const vertexShaderSource = await (
				await fetch(this.#vertexShaderURL)
			).text()
			const fragmentShaderSource = await (
				await fetch(this.#fragmentShaderURL)
			).text()
			this.vertexShader = this._compileShader(
				vertexShaderSource,
				this.#gl.VERTEX_SHADER
			)

			this.fragmentShader = this._compileShader(
				fragmentShaderSource,
				this.#gl.FRAGMENT_SHADER
			)
			this.#program = this._linkProgram(this.vertexShader, this.fragmentShader)
		} catch (error) {
			console.log(error)
		}
		return this
	}

	_compileShader(source, type) {
		const shader = this.#gl.createShader(type)
		if (!shader) throw new Error('Failed to create shader')

		this.#gl.shaderSource(shader, source)
		this.#gl.compileShader(shader)

		if (!this.#gl.getShaderParameter(shader, this.#gl.COMPILE_STATUS)) {
			const info = this.#gl.getShaderInfoLog(shader)
			this.#gl.deleteShader(shader)
			throw new Error(`Shader (${source}) compile error: ${info}`)
		}
		return shader
	}

	_linkProgram(vs, fs) {
		const program = this.#gl.createProgram()
		if (!program) throw new Error('Failed to create program')

		this.#gl.attachShader(program, vs)
		this.#gl.attachShader(program, fs)
		this.#gl.linkProgram(program)

		if (!this.#gl.getProgramParameter(program, this.#gl.LINK_STATUS)) {
			const info = this.#gl.getProgramInfoLog(program)
			this.#gl.deleteProgram(program)
			throw new Error(`Program link error: ${info}`)
		}
		return program
	}
	use() {
		if (this.#program == null)
			throw Error('Shader not initialized, initialize with inti()')
		if (this.#program === this.#gl.getParameter(this.#gl.CURRENT_PROGRAM))
			return
		this.#gl.useProgram(this.#program)
	}

	attribLocation(name) {
		return this.#gl.getAttribLocation(this.#program, name)
	}

	uniformLocation(name) {
		return this.#gl.getUniform(this.#program, name)
	}
	/**
	 * Draws a vertex array
	 * WARNING: draw same program objects in cluster than frequent switching
	 */
	passAttrib(passedData) {
		const gl = this.#gl
		if (this.#program !== gl.getParameter(gl.CURRENT_PROGRAM)) this.use()
		for (const [attribName, data, size] of passedData) {
			const attribLoc = this.attribLocation(attribName)
			if (attribLoc === -1) {
				throw new Error(`Attribute "${attribName}" not found in program.`)
			}

			const buffer = gl.createBuffer()
			gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
			gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)

			gl.enableVertexAttribArray(attribLoc)
			gl.vertexAttribPointer(attribLoc, size, gl.FLOAT, false, 0, 0)
		}
	}
	passUniforms(passedData) {
		const gl = this.#gl
		if (this.#program !== gl.getParameter(gl.CURRENT_PROGRAM)) this.use()

		for (const [uniformName, data] of passedData) {
			const location = gl.getUniformLocation(this.#program, uniformName)
			if (location === null) {
				throw new Error(`Uniform "${uniformName}" not found in program.`)
			}

			if (typeof data === 'number') {
				gl.uniform1f(location, data)
			} else if (data.length) {
				switch (data.length) {
					case 1:
						gl.uniform1fv(location, data)
						break
					case 2:
						gl.uniform2fv(location, data)
						break
					case 3:
						gl.uniform3fv(location, data)
						break
					case 4:
						gl.uniform4fv(location, data)
						break
					case 9:
						gl.uniformMatrix3fv(location, false, data)
						break
					case 16:
						gl.uniformMatrix4fv(location, false, data)
						break
					default:
						throw new Error(`Unsupported uniform data length: ${data.length}`)
				}
			} else {
				throw new Error(`Unsupported uniform data type for ${uniformName}`)
			}
		}
	}

	draw(s, n, mode = this.#gl.TRIANGLES) {
		this.#gl.drawArrays(mode, s, n)
	}

	clear(r, g, b, a) {
		const gl = this.#gl
		if (this.#program !== gl.getParameter(gl.CURRENT_PROGRAM)) this.use()
		gl.clearColor(r, g, b, a)
		gl.clear(gl.COLOR_BUFFER_BIT)
	}

	dispose() {
		if (this.#program) this.#gl.deleteProgram(this.#program)
		if (this.vertexShader) this.#gl.deleteShader(this.vertexShader)
		if (this.fragmentShader) this.#gl.deleteShader(this.fragmentShader)
	}
}
