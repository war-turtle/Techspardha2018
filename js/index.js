window.addEventListener("DOMContentLoaded", function() {
    calculateLightHousePosition();
    boatAnimation();
    startAnimation();
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

function boatAnimation() {
    var boat = document.getElementById("boat");
    TweenMax.to(boat, 10, { left: "10%", ease: Power3.easeOut, delay: 5 });
    var time = new TimelineMax({ repeat: -1, delay: 15 });
    time.to(boat, 5, { rotationZ: "-=3deg" });
    time.to(boat, 5, { rotationZ: "+=3deg" });
}

function startAnimation() {
    var time = new TimelineMax({ repeat: -1 });
    time.staggerTo("#star11 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star11 > path", 0.5, { opacity: 1 }, 0.05, "1");
    time.staggerTo("#star12 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star12 > path", 0.5, { opacity: 1 }, 0.05, "1");
    time.staggerTo("#star21 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star21 > path", 0.5, { opacity: 1 }, 0.05, "1");
    time.staggerTo("#star22 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star22 > path", 0.5, { opacity: 1 }, 0.05, "1");
    time.staggerTo("#star31 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star31 > path", 0.5, { opacity: 1 }, 0.05, "1");
    time.staggerTo("#star32 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star32 > path", 0.5, { opacity: 1 }, 0.05, "1");
    time.staggerTo("#star41 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star41 > path", 0.5, { opacity: 1 }, 0.05, "1");
    time.staggerTo("#star42 > path", 0.5, { opacity: 0 }, 0.05, "0");
    time.staggerTo("#star42 > path", 0.5, { opacity: 1 }, 0.05, "1");
}
