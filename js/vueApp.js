function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

// var this.elementsInView = [];
// var observer = new IntersectionObserver((entries) => {
//     // console.log(entries);
//     let currentFirstEl = this.elementsInView[0];
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             this.elementsInView.push(entry.target);
//         } else {
//             let spliceInd = $.inArray(entry.target, this.elementsInView);
//             if (spliceInd >= 0) {
//                 this.elementsInView.splice(spliceInd, 1);
//             }
//         }
//     });
//     if (this.elementsInView[0] != undefined && this.elementsInView[0] != currentFirstEl) {
//         //currentFirstEl is undefined when first initiated.
//         try {
//             playVideo(currentFirstEl, false)
//         } catch (error) {
//             console.log(error)
//         }
//         playVideo(this.elementsInView[0], true);
//     }
// }, {
//     threshold: 0.9
// });

// function playVideo(project, trueOfFalse) {
//     switch (trueOfFalse) {
//         case true:
//             $(project).find(".darkOverlay").fadeTo("slow", 0.2);
//             $(project).find("img").fadeTo("slow", 0);
//             $(project).addClass("enlarge");
//             break;
//         case false:
//             $(project).find(".darkOverlay").fadeTo("slow", 0.75);
//             $(project).find("img").fadeTo("slow", 1);
//             $(project).removeClass("enlarge");
//             break;
//         default:
//             break;
//     }

// }

$(() => {
    var app = new Vue({
        el: "#app",
        data: {
            projects: [],
            categories: ["All"],
            mobile: false,
            elementsInView: [],
            observer: undefined,
            selected:  "All",
        },
        methods: {
            setFilter: function (cat){
                console.log(cat);
                this.selected = cat;
            },
            openLink: function (link) {
                console.log("clicked");
                window.open(link, "_blank")
            },
            isMobile: function () {
                try {
                    document.createEvent("TouchEvent");
                    this.mobile = true;
                    return true;
                } catch (e) {
                    console.log(e);
                }
                return false;
            },
            playVideo: function (project, trueOfFalse) {
                switch (trueOfFalse) {
                    case true:
                        $(project).find(".darkOverlay").fadeTo("slow", 0.2);
                        $(project).find("img").fadeTo("slow", 0);
                        $(project).addClass("enlarge");
                        break;
                    case false:
                        $(project).find(".darkOverlay").fadeTo("slow", 0.75);
                        $(project).find("img").fadeTo("slow", 1);
                        $(project).removeClass("enlarge");
                        break;
                    default:
                        break;
                }

            }
        },
        mounted: function () {
            // create intersection observer
            this.observer = new IntersectionObserver((entries) => {
                // console.log(entries);
                let currentFirstEl = this.elementsInView[0];
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.elementsInView.push(entry.target);
                    } else {
                        let spliceInd = $.inArray(entry.target, this.elementsInView);
                        if (spliceInd >= 0) {
                            this.elementsInView.splice(spliceInd, 1);
                        }
                    }
                });
                if (this.elementsInView[0] != undefined && this.elementsInView[0] != currentFirstEl) {
                    //currentFirstEl is undefined when first initiated.
                    try {
                        this.playVideo(currentFirstEl, false)
                    } catch (error) {
                        console.log(error)
                    }
                    this.playVideo(this.elementsInView[0], true);
                }
            }, {
                threshold: 0.9
            });
            // fetch data from json file
            fetch("data/content.json")
                .then(res => res.json())
                // get projects data
                .then(data => {
                    console.log(data);
                    this.projects = data.projects;
                    return data;
                })
                // extract categories
                .then(data => {
                    data.projects.forEach((project, i) => {
                        project.category.split(",").forEach((cate, ind) => {
                            if (this.categories.indexOf(cate.trim()) < 0) this.categories.push(cate.trim());
                        })
                    })
                    console.log(this.categories);
                    return data;
                })
                // start observe(if mobile) or hover enlarge(if desktop)
                .then(() => {
                    if (isMobile()) {
                        $(".coverContainer").each((index, element) => {
                            observer.observe(element);
                        })
                    } else {
                        let eles = $('.coverContainer');
                        $('.coverContainer').each((index, element) => {
                            // console.log(element);
                            $(element).hover(() => $(element).addClass('enlarge'), () => $(element).removeClass('enlarge'))
                        })
                    }
                });
        }
    })
})