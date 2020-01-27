var vueApp = {
    el: "#app",
    data: {},
    methods: {
        openLink: function (link) {
            window.open(link, "_blank");
        }
    }
}

function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

vueApp.data.isMobile = isMobile();

var elementsInView = [];
var observer = new IntersectionObserver((entries) => {
    // console.log(entries);
    let currentFirstEl = elementsInView[0];
    console.log(elementsInView.length);
    console.log(currentFirstEl);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            elementsInView.push(entry.target);
        } else {
            let spliceInd = $.inArray(entry.target, elementsInView);
            console.log("spliceInd");
            console.log(spliceInd);
            if (spliceInd >= 0) {
                elementsInView.splice(spliceInd, 1);
            }
        }
    });
    if (elementsInView[0] != undefined && elementsInView[0] != currentFirstEl) {
        try {
            $(currentFirstEl).find(".darkOverlay").fadeTo("slow", 0.6);
            $(currentFirstEl).find("img").fadeTo("slow", 1);
        } catch (error) {
            console.log(error)
        }
        $(elementsInView[0]).find(".darkOverlay").fadeTo("slow", 0.2);
        $(elementsInView[0]).find("img").fadeTo("slow", 0);
        console.log(elementsInView.length)
    }

}, {
    threshold: 0.9
});

$.getJSON("data/content.json", (res) => {
    console.log(res);
    vueApp.data.projects = res.projects;
    var app = new Vue(vueApp);
}).then(startObserve);


function startObserve() {
    if (vueApp.data.isMobile) {
        $(".coverContainer").each((index, element) => {
            observer.observe(element);
        })
    }
}