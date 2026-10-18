// vanta-init.js
window.addEventListener('DOMContentLoaded', () => {
    // 获取当前是否暗黑模式，以决定背景色
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // 初始化 Vanta 飞鸟特效
    VANTA.BIRDS({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: isDark ? 0x0 : 0xffffff, // 暗色模式黑底，白天白底
        color1: 0x49b1f5, // 飞鸟/粒子的颜色1
        color2: 0xff7242, // 飞鸟/粒子的颜色2
        colorMode: "variance",
        birdSize: 1.50,
        wingSpan: 30.00,
        speedLimit: 5.00
    });
});