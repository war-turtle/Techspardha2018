window.addEventListener("DOMContentLoaded", function() {
    calculateLightHousePosition();
});

function calculateLightHousePosition() {
    var seaTop = document
        .getElementsByClassName("sea")[0]
        .getBoundingClientRect().top;
    var lightHouse1Top = document
        .getElementsByClassName("lighthouse-1")[0]
        .getBoundingClientRect().top;
    document.getElementById("lighthouseSvg").style.top =
        seaTop - lightHouse1Top;
}
