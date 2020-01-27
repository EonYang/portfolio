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

var observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).find(".darkOverlay").fadeTo("slow", 0);
            $(entry.target).find("img").fadeTo("slow", 0);
        } else {
            $(entry.target).find(".darkOverlay").fadeTo("slow", 0.6);
            $(entry.target).find("img").fadeTo("slow", 1);
        }

    });
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