$(() => {
    var app = new Vue({
        el: "#app",
        data: {
            projects: [],
            categories: ["All"],
            mobile: false,
            elementsInView: [],
            videoObserver: undefined,
            animationObserver: undefined,
            selected: "All",
            selected2: "All",
            cnt: 0,
        },
        methods: {
            setFilter: function (cat) {
                console.log(this.cnt);
                //change cursor position
                this.selected = cat;
                //fade out all
                $(".coverContainer").each((index, element) => {
                    try {
                        $(element).removeClass("animated fadeOut faster fadeIn slow");
                        element.removeEventListener('animationend', element.onAnimationEnd);
                    } catch (error) {
                        console.log(error);
                    }
                    $(element).addClass("animated fadeOut faster");
                    if (index == 0) {
                        element.onAnimationEnd = () => {
                            console.log("1st called");
                            this.$data.selected2 = cat;
                            $(".coverContainer").each((index, element) => {
                                // if (this.mobile) {
                                //     this.videoObserver.observe(element);
                                // }
                                this.animationObserver.observe(element);
                            })
                            // setTimeout(()=>{
                                $(element).removeClass("animated fadeOut faster");
                            // },10);
                        }
                        element.addEventListener('animationend', element.onAnimationEnd)
                    } else {
                        element.onAnimationEnd = () => {
                            console.log("others called");
                            $(element).removeClass("animated fadeOut faster");
                        }
                        element.addEventListener('animationend', element.onAnimationEnd);
                    }
                })

                setTimeout(() => {

                    $(".coverContainer").each((index, element) => {
                        if (this.mobile) {
                            this.videoObserver.observe(element);
                        }
                        // this.animationObserver.observe(element);
                    })
                }, 601);

            },
            openLink: function (link) {
                console.log("clicked");
                window.open(link, "_blank");
            },
            isMobile: function () {
                try {
                    document.createEvent("TouchEvent");
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
            this.mobile = this.isMobile();
            // create intersection videoObserver

            this.animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log("intersecting")
                        $(entry.target).removeClass("animated fadeOut faster slow");
                        $(entry.target).addClass("animated fadeIn slow");
                    } else {
                        console.log("not intersecting")
                        $(entry.target).removeClass("animated fadeIn slow");
                        $(entry.target).addClass("animated fadeOut slow");
                    }
                })
            }, {
                threshold: 0.1
            });

            if (this.mobile) {
                this.videoObserver = new IntersectionObserver((entries) => {
                    console.log(entries);
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
            }
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
                    if (this.mobile) {
                        $(".coverContainer").each((index, element) => {
                            this.videoObserver.observe(element);
                        })
                    } else {
                        let eles = $('.coverContainer');
                        $('.coverContainer').each((index, element) => {
                            // console.log(element);
                            this.animationObserver.observe(element);
                            $(element).hover(() => $(element).addClass('enlarge'), () => $(element).removeClass('enlarge'))
                        })
                    }
                });
        }
    })
})