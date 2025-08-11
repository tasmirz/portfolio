precision mediump float;
varying vec2 vPos;

uniform float u_time; // for animation

void main() {
    float wave = sin(-100.0 * vPos.y + u_time * 2.0); // sine wave on x, animated
    float intensity = 0.5 + 0.5 * wave; // normalize to [0,1]
    intensity = smoothstep(0.5, .49, intensity);
    float wave2 = sin(100.0 * vPos.x + u_time * 4.0); // sine wave on x, animated
    float intensity2 = 0.5 + 0.5 * wave2;
    intensity2 = smoothstep(0.5, 0.4, intensity2);
    float wave3 = sin(50.0 * vPos.x + u_time * 4.6); // sine wave on x, animated
    float intensity3 = 0.5 + 0.5 * wave3;
    intensity3 = smoothstep(0.5, 0.499, intensity3);
    gl_FragColor = vec4(intensity3, intensity, intensity2, 1.0);

    // float c = sin(20. * vPos.x + u_time);
    // c = smoothstep(.9, .899, c);
    // gl_FragColor = vec4(1. - c, 1., 0, 1.);
}
