document.getElementById('toggle-theme').addEventListener('click', function () {
    let themeStyle = document.getElementById('theme-style');

    if (themeStyle.getAttribute('href') === 'styles.css') {
        themeStyle.setAttribute('href', 'dark-mode.css');
    } else {
        themeStyle.setAttribute('href', 'styles.css');
    }
});
