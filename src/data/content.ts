import { IData, AnimationFormat, IProject } from "../types";

const Cate = {
  frontEnd: "Front-end",
  fullStack: "Full-Stack",
  deisgnAndAnimation: "Design & Animation",
  creativeTech: "ITP-ish",
  other: "Other",
};

const Tag = {
  react: "React",
  ml: "Mechine Learning",
  unity: "Unity",
  vr: "VR",
  afterEffect: "AE",
  c4d: "Cinema 4D",
  installation: "Installation",
  music: "Music",
  app: "Application",
  animation: "Animation",
  storytelling: "Storytelling",
  arduino: "Arduino & Pi",
  dddPrint: "3D Print",
  design: "Design",
  game: "Game",
  nodeJs: "Node.js",
  graphic: "Graphic",
  ts: "TypeScript",
};

const data: IData = {
  projects: [
    {
      priority: 1,
      title: "Magical Pencil",
      cover: {
        image: "images/MagicalPencil-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/MagicalPencil-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/04/magical-pencil/"),
      time: "April, 2019",
      teaser:
        "An ITP-ish video game, made with New Interaction, Machine Learning, Creativity, Storytelling and Love.",
      category: [Cate.fullStack, Cate.deisgnAndAnimation],
      tags: [Tag.ml, Tag.storytelling],
    },
    {
      priority: 15,
      title: "Thesis Archive with WebVR",
      cover: {
        image: "images/ThesisArchivePrototype-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/ThesisArchivePrototype-Cover-Video.mp4",
      },
      link: new URL(
        "http://yangyang.blog/articles/2020/03/reactjs-webvr-3d-portfolio/"
      ),
      time: "March, 2020",
      teaser: "An protorype, made of WebVR",
      category: [Cate.frontEnd, Cate.creativeTech],
      tags: [Tag.react, Tag.vr],
    },
    {
      priority: 2,
      title: "Simple Mirror",
      cover: {
        image: "images/simpleMirror-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/simpleMirror-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/simple-mirror/"),
      time: "Dec, 2017",
      teaser:
        "In our mind, instead of a realistic hi-resolution beautiful appearances, our constant awareness of ourselves is just a vague and sketchy arrangement of abstract and simplified figures, which is being reflected by this simple mirror.",
      category: [Cate.creativeTech],
      tags: [Tag.installation],
    },
    {
      priority: 3,
      title: "New Toy",
      cover: {
        image: "images/NIME-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/NIME-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/new-toy/"),
      time: "Dec, 2018",
      teaser:
        "What instrument can serve as a expressive role in this era's live digital music performence.",
      category: [Cate.other, Cate.creativeTech],
      tags: [Tag.arduino],
    },
    {
      priority: 4,
      title: "Oblivion",
      cover: {
        image: "images/Oblivion-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/Oblivion-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/oblivion/"),
      time: "Nov, 2018",
      teaser: "A tiny story created for a unconventional screen.",
      category: [Cate.deisgnAndAnimation, Cate.creativeTech],
      tags: [Tag.animation, Tag.afterEffect, Tag.c4d],
    },
    {
      priority: 5,
      title: "It's Time to Go to Time",
      cover: {
        image: "images/ittgtt-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/ittgtt-Cover-Video.mp4",
      },
      link: new URL(
        "http://yangyang.blog/articles/2019/02/its-time-to-go-to-time/"
      ),
      time: "Apr, 2018",
      teaser: "A unconventional VR experience.",
      category: [Cate.creativeTech, Cate.fullStack],
      tags: [Tag.vr, Tag.installation],
    },
    {
      priority: 6,
      title: "The Machine of Boredom",
      cover: {
        image: "images/woodenHand-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/woodenHand-Cover-Video.mp4",
      },
      link: new URL(
        "http://yangyang.blog/articles/2019/02/the-machine-of-boredom/"
      ),
      time: "Dec, 2017",
      teaser:
        "How does the human who is watching a machine playing fidget spinner feel? Is this the ultimate of boredom?",
      category: [Cate.creativeTech],
      tags: [Tag.arduino, Tag.installation],
    },
    {
      priority: 7,
      title: "Todd",
      cover: {
        image: "images/todd-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/todd-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/todd/"),
      time: "Oct, 2018",
      teaser: "Todd is an alcoholic hamster and a retired Jedi.",
      category: [Cate.deisgnAndAnimation, Cate.creativeTech],
      tags: [Tag.design, Tag.dddPrint],
    },
    {
      priority: 8,
      title: "Bully",
      cover: {
        image: "images/bully-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/bully-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/bully/"),
      time: "Mar, 2018",
      teaser:
        "Bully is a web-based multiplayer game that represents the essence of our world —— bully.",
      category: [Cate.fullStack],
      tags: [Tag.game, Tag.nodeJs],
    },
    {
      priority: 9,
      title: "Zen Dog",
      cover: {
        image: "images/zenDog-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/zenDog-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/zen-dog/"),
      time: "Mar, 2018",
      teaser: "Yo dog come to my dojo and meditate like a Zen master",
      category: [Cate.fullStack],
      tags: [Tag.game, Tag.nodeJs],
    },
    {
      priority: 10,
      title: "Which Pill",
      cover: {
        image: "images/whichPill-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/whichPill-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/which-pill/"),
      time: "Dec, 2018",
      teaser: "Only one of those players will survive.",
      category: [Cate.fullStack, Cate.frontEnd],
      tags: [Tag.game, Tag.nodeJs],
    },
    {
      priority: 11,
      title: "P5.js Skethes",
      cover: {
        image: "images/p5-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/p5-Cover-Video.mp4",
      },
      link: new URL(
        "http://yangyang.blog/articles/2019/03/my-p5-js-projects-compilation/"
      ),
      time: "Nov, 2017",
      teaser: "Come and see my dark humor.",
      category: [Cate.creativeTech],
      tags: [Tag.game, Tag.graphic],
    },
    {
      priority: 12,
      title: "Pre-ITP Projects",
      cover: {
        image: "images/behinders-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/behinders-Cover-Video.mp4",
      },
      link: new URL(
        "http://yangyang.blog/articles/2019/03/projects-before-itp/"
      ),
      time: "Dec, 2016",
      teaser: "I was a productive product designer",
      category: [Cate.deisgnAndAnimation],
      tags: [Tag.design, Tag.app],
    },
    {
      priority: 13,
      title: "ITP Spring Show Poster",
      cover: {
        image: "images/brainRoller-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/brainRoller-Cover-Video.mp4",
      },
      link: new URL(
        "http://yangyang.blog/articles/2019/03/poster-design-for-2018-itp-spring-show/"
      ),
      time: "Oct, 2017",
      teaser: "Poster Design Campain Winner",
      category: [Cate.deisgnAndAnimation],
      tags: [Tag.design, Tag.animation, Tag.graphic],
    },
  ],
};

const ThesisArchive: IProject = {
  priority: 100,
  title: "ITP Thesis Archive 2020",
  cover: {
    image: "images/brainRoller-Cover.jpg",
    animationFormat: AnimationFormat.video,
    animation: "images/videos/brainRoller-Cover-Video.mp4",
  },
  link: new URL(
    "http://yangyang.blog/articles/2019/03/poster-design-for-2018-itp-spring-show/"
  ),
  time: "Apr, 2020",
  teaser: "An gallery full of suprises.",
  category: [Cate.frontEnd],
  tags: [Tag.react, Tag.nodeJs, Tag.ts],
};

export default data;
