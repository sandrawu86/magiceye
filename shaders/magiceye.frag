precision mediump float;

uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    
    // 讀取紋理顏色
    vec4 color = texture2D(u_texture, uv);
    
    gl_FragColor = color;
}
