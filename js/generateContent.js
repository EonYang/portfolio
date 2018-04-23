$.getJSON("data/content.json", (data) => {
  loopAllProjects(data);
});

var loopAllProjects = (data) => {
  var items = [];
  $.each(data.projects, (index, value) => {
    generateContent(value);
  });
}

var generateContent = (project) => {
  let block,
    cover,
    title;
// generate block
  block = $("<div>", {
    "class": "block"
  });
// generate cover element, then append it to block
  switch (project.coverFormate) {
    case "image":
      cover = $("<img>", {
        "src": project.coverPath
      });
      break;
    case "video":
      break;
  }
  cover.appendTo(block);
  block.appendTo("body");

}
