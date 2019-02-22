$.getJSON("data/content.json", (data) => {
    loopAllProjects(data);
});

var loopAllProjects = (data) => {
    var items = [];
    $.each(data.projects, (index, value) => {
        generateContent(value);
    });
};

var generateContent = (project) => {
    let block,
        cover,
        gifLayer,
        videoLayer,
        link,
        hoverLayer,
        title;
    // generate block
    block = $("<div>", {
        "class": "block vw50"
    });
    // generate hover layer
    // generate link
    link = $("<a>").attr("href", project.link);
    // generate cover element, then append it to block

    cover = $("<img>", {
        "src": project.cover.image,
        "class": "cover"
    });

    if (project.cover.animationFormat == "gif") {
        gifLayer = $("<img>", {
            "src": project.cover.animation,
            "class": "gifLayer block vw50"
        });
        gifLayer.appendTo(block);
    } else if (project.cover.animationFormat == "video") {
        gifLayer = $("<video />", {
            "src": project.cover.animation,
            "class": "videoPlayer gifLayer block vw50",
            "type": "video/mp4",
            "controls": false,
            "loop": true,
            playsinline: true,
        });
        gifLayer.prop("muted", true);
        gifLayer.prop("autoplay", true);
        gifLayer.appendTo(block);
    }


    hoverLayer = $("<div>", {
        "class": "hoverLayer block vw50"
        // "class": "block vw50"
    });

    title = $("<h2>", {
        "class": "title vw50",
    });
    title.append(project.title);

    //put link in to cover
    // link.appendTo(block);
    cover.appendTo(block);
    hoverLayer.appendTo(block);
    title.appendTo(block);
    block.appendTo("body");

    block.click(
        function() {
            window.open(
                project.link, '_blank');
        }
    );
};
