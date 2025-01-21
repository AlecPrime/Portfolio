// filepath: /C:/Users/Alex/Hub/School/Portfolio/script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('layout.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data.split('<footer>')[0];
            document.getElementById('footer-placeholder').innerHTML = data.split('<footer>')[1];
        });
});