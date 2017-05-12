// HelloPoint1.js (c) 2012 matsuda
// Vertex shader program //顶点着色器程序
var VSHADER_SOURCE =
    'void main() {\n' +
    '  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' + // Set the vertex coordinates of the point //设置坐标
    '  gl_PointSize = 10.0;\n' + // Set the point size  //设置尺寸
    '}\n';

// Fragment shader program //片元着色器成分
var FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // Set the point color //设置颜色
    '}\n';

function main() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('webgl');

    // Get the rendering context for WebGL
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    // Initialize shaders  //初始化着色器
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return;
    }

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw a point
    gl.drawArrays(gl.POINTS, 0, 1);
}
