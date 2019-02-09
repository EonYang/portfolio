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
    // switch (project.coverFormate) {
    //     case "image":
    //
    //         break;
    //     case "video":
    //         break;
    // }

    cover = $("<img>", {
        "src": project.cover.image,
        "class": "cover"
    });

    gifLayer = $("<img>", {
        "src": project.cover.animation,
        "class": "gifLayer block vw50"
    });

    hoverLayer = $("<div>", {
        "class": "hoverLayer block vw50"
        // "class": "block vw50"
    });

    title = $("<h2>", {
        "class": "title vw50",
    });
    title.append(project.title)

    //put link in to cover
    // link.appendTo(block);
    cover.appendTo(block);
    gifLayer.appendTo(block);
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
