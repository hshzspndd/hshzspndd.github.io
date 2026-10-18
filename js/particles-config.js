document.addEventListener('DOMContentLoaded', async function() {
    await tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
            color: { value: ["#49B1F5", "#FF7242", "#99a9bf"] }, // 彩色星云
            links: { enable: true, color: "#999", distance: 150, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5 },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } }
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } }
        }
    });

    // 监听主题切换，动态反色
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-theme') {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const particles = tsParticles.domItem(0);
                if (particles) {
                    particles.options.particles.color.value = isDark ? "#ffffff" : "#333333";
                    particles.refresh();
                }
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });
});