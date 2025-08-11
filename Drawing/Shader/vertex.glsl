attribute vec3 aPos;
varying vec2 vPos;
void main(void) {
    gl_Position = vec4(aPos, 1.0);
    vPos = aPos.xy * .5 + .5;
}
