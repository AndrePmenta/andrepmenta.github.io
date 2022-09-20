  window.addEventListener('DOMContentLoaded', () => {
      VANTA.CLOUDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00
      })

      setTimeout(() => {
        const main = document.querySelector('main')
        main.style.opacity = 1
        main.style.filter = 'blur(0px)'
      }, 1000)

    });