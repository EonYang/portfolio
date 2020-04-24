//@ts-nocheck
import $ from "jquery";

class Tools {
  constructor() {
    this.elementsInView = [];
  }

  extractCategories(projects) {
    let categories = new Map();
    projects.forEach((project) => {
      project.category.forEach((category) => {
        if (categories.has(category)) {
          categories.get(category).count++;
        } else {
          categories.set(category, {
            count: 1,
            category: category,
          });
        }
      });
    });
    return [...categories.values()].sort((a, b) => b.count - a.count);
  }

  openLink(link) {
    console.log("clicked");
    window.open(link, "_blank");
  }

  playVideo(project, trueOfFalse) {
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

  createIntersectionObserver(isMobile) {
    if (isMobile) {
      let videoObserver = new IntersectionObserver(
        (entries) => {
          console.log(entries);
          let currentFirstEl = this.elementsInView[0];
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.elementsInView.push(entry.target);
            } else {
              let spliceInd = $.inArray(entry.target, this.elementsInView);
              if (spliceInd >= 0) {
                this.elementsInView.splice(spliceInd, 1);
              }
            }
          });
          if (
            this.elementsInView[0] !== undefined &&
            this.elementsInView[0] !== currentFirstEl
          ) {
            //currentFirstEl is undefined when first initiated.
            try {
              this.playVideo(currentFirstEl, false);
            } catch (error) {
              console.log(error);
            }
            this.playVideo(this.elementsInView[0], true);
          }
        },
        {
          threshold: 0.9,
        }
      );
      return videoObserver;
    }
    return -1;
  }
}

export default new Tools();

export const testIfMobile = () => {
  try {
    document.createEvent("TouchEvent");
    console.log("This is a mobile.");
    return true;
  } catch (e) {
    console.log("Not a mobile.");
  }
  return false;
};
