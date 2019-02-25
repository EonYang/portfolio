let minWidth = 400;

$(window).resize(() => {
    resize();
});

var resize = () => {
    let className = $(".block").attr('class');

    if ($(window).width() >= minWidth * 2 && className.indexOf("vw50") === -1) {
        console.log(`> ${minWidth * 2}`);
        $(".block").removeClass("vw100").addClass("vw50");
        $(".title").removeClass("vw100").addClass("vw50");
    } else if ($(window).width() < minWidth * 2 && className.indexOf("vw100") === -1) {
        console.log(`< ${minWidth * 2}`);
        $(".block").removeClass("vw50").addClass("vw100");
        $(".title").removeClass("vw50").addClass("vw100");
    }

};

setTimeout(() => {
    resize();
    $("#headerBlock").click(
        function() {
            window.open(
                "http://yangyang.blog/2019/02/my-portfolio-page/", '_blank');
        }
    );
}, 50);
