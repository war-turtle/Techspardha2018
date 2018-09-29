window.addEventListener("DOMContentLoaded", function() {
    calculateLightHousePosition();
    boatAnimation();
    starAnimation();
    lightAnimation();
    primeAnimation();
    cloudAnimation();
    // boatTwoAnimation();
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

function starAnimation() {
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

function lightAnimation() {
    var time = new TimelineMax({ repeat: -1 });
    time.to("#light", 5, { scaleX: "0", ease: Power0.easeNone });

    time.to("#light", 5, { scaleX: "-1", ease: Power0.easeNone });
    time.to("#light", 5, { scaleX: "0", ease: Power0.easeNone });
    time.to("#light", 5, { scaleX: "1", ease: Power0.easeNone });
}

function primeAnimation() {
    var time = new TimelineMax({ repeat: -1 });

    time.to("#prime", 10, { opacity: 0, ease: Bounce.easeOut });
}

function cloudAnimation() {
    var time = new TimelineMax({ repeat: -1 });

    time.set("#cloud1", { y: "-=100%" });

    time.to("#cloud1", 30, { x: "+=300%" });
    time.to("#cloud1", 30, { x: "-=300%" });

    time.to("#cloud2", 30, { x: "-=200%" }, "30");
    time.to("#cloud2", 30, { x: "+=200%" }, "60");

    time.to("#cloud3", 30, { x: "+=50%" }, "0");
    time.to("#cloud3", 30, { x: "-=50%" }, "30");

    time.to("#cloud4", 30, { x: "+=150%" }, "0");
    time.to("#cloud4", 30, { x: "-=150%" }, "30");
}

// function boatTwoAnimation() {
//     TweenMax.to("#boat2", 1, { opacity: 0 });
// }
