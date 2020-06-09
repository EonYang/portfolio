import { IData, AnimationFormat } from "../types";

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
      priority: 60,
      featured: true,
      wpid: 1203,
      title: "Magical Pencil",
      cover: {
        image: "images/MagicalPencil-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/MagicalPencil-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/04/magical-pencil/"),
      time: "April, 2019",
      teaser: "An untraditional video game made with Unity, C#, and TensorFlow",
      category: [Cate.fullStack, Cate.deisgnAndAnimation],
      tags: [Tag.ml, Tag.storytelling],
    },
    {
      priority: 15,
      featured: false,
      wpid: 1386,
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
      teaser:
        "A Virtual Reality gallery in the browser, made with React.js and WebVR.",
      category: [Cate.frontEnd, Cate.creativeTech],
      tags: [Tag.react, Tag.vr],
    },
    {
      priority: 2,
      featured: false,
      wpid: 838,
      title: "Simple Mirror",
      cover: {
        image: "images/simpleMirror-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/simpleMirror-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/simple-mirror/"),
      time: "Dec, 2017",
      teaser:
        "An interactive new media art installation publicly exhibited in LaMama Gallery, NYC.",
      category: [Cate.creativeTech],
      tags: [Tag.installation],
    },
    {
      priority: 3,
      featured: false,
      wpid: 862,
      title: "New Toy",
      cover: {
        image: "images/NIME-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/NIME-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/new-toy/"),
      time: "Dec, 2018",
      teaser:
        "An physical instrument that can serve as a expressive role in this era's live digital music performence.",
      category: [Cate.creativeTech],
      tags: [Tag.arduino],
    },
    {
      priority: 45,
      featured: true,
      wpid: 903,
      title: "Oblivion",
      cover: {
        image: "images/Oblivion-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/Oblivion-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/oblivion/"),
      time: "Nov, 2018",
      teaser:
        "Fusion Film Festival 2019, Best Animation Short winner. A story created for an 11:1 screen made with Cinema 4D.",
      category: [Cate.deisgnAndAnimation, Cate.creativeTech],
      tags: [Tag.animation, Tag.afterEffect, Tag.c4d],
    },
    {
      priority: 5,
      featured: false,
      wpid: 891,
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
      teaser:
        "A unconventional VR experience, created with GVR SDK and RTMP Streaming protocol.",
      category: [Cate.creativeTech, Cate.fullStack],
      tags: [Tag.vr, Tag.installation],
    },
    {
      priority: 6,
      featured: false,
      wpid: 967,
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
      featured: false,
      wpid: 981,
      title: "Todd",
      cover: {
        image: "images/todd-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/todd-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/todd/"),
      time: "Oct, 2018",
      teaser: "Todd is an alcoholic hamster and a retired Jedi. ",
      category: [Cate.deisgnAndAnimation, Cate.creativeTech],
      tags: [Tag.design, Tag.dddPrint],
    },
    {
      priority: 8,
      featured: false,
      wpid: 937,
      title: "Bully",
      cover: {
        image: "images/bully-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/bully-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/bully/"),
      time: "Mar, 2018",
      teaser: "A web-based multiplayer game made with Socket.io and Node.js.",
      category: [Cate.fullStack],
      tags: [Tag.game, Tag.nodeJs],
    },
    {
      priority: 30,
      featured: false,
      wpid: 961,
      title: "Zen Dog",
      cover: {
        image: "images/zenDog-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/zenDog-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/zen-dog/"),
      time: "Mar, 2018",
      teaser:
        "A dojo for friends to meditate together and become Zen Masters, made with Node.js, Socket.io and MongoDB.",
      category: [Cate.fullStack],
      tags: [Tag.game, Tag.nodeJs],
    },
    {
      priority: 40,
      featured: false,
      wpid: 993,
      title: "Which Pill",
      cover: {
        image: "images/whichPill-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/whichPill-Cover-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2019/02/which-pill/"),
      time: "Dec, 2018",
      teaser: "A survival game mede with Node.js and Socket.io.",
      category: [Cate.fullStack, Cate.frontEnd],
      tags: [Tag.game, Tag.nodeJs],
    },
    {
      priority: 11,
      wpid: 1018,
      featured: false,
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
      teaser: "An interactive gallery of my creations.",
      category: [Cate.creativeTech],
      tags: [Tag.game, Tag.graphic],
    },
    {
      priority: 12,
      featured: false,
      wpid: 1033,
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
      teaser:
        "A collection of projects designed by me before I attend to New York University.",
      category: [Cate.deisgnAndAnimation],
      tags: [Tag.design, Tag.app],
    },
    {
      priority: 13,
      featured: false,
      wpid: 1067,
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
      teaser: "Poster Design Campain Winner at New York University.",
      category: [Cate.deisgnAndAnimation],
      tags: [Tag.design, Tag.animation, Tag.graphic],
    },
    {
      priority: 100,
      wpid: 1412,
      featured: true,
      title: "ITP Thesis Archive 2020",
      cover: {
        image: "images/Thesis-Archive-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/Thesis-Archive-Video.mp4",
      },
      link: new URL(
        "http://yangyang.blog/articles/2020/04/thesis-archive-2020/"
      ),
      time: "Apr, 2020",
      teaser:
        "An interactive art gallery experience made with React.js and TypeScript.",
      category: [Cate.frontEnd],
      tags: [Tag.react, Tag.nodeJs, Tag.ts],
    },
    {
      priority: 80,
      wpid: 1423,
      featured: true,
      title: "COVID-19-Ticker",
      cover: {
        image: "images/Covid-Ticker-Cover.jpg",
        animationFormat: AnimationFormat.video,
        animation: "images/videos/Covid-Ticker-Video.mp4",
      },
      link: new URL("http://yangyang.blog/articles/2020/04/covid-19-ticker/"),
      time: "Mar, 2020",
      teaser: "An COVID-19 macOS app tracker made with Swift and Cocoa.",
      category: [Cate.frontEnd, Cate.deisgnAndAnimation],
      tags: [Tag.react, Tag.nodeJs, Tag.ts, Tag.app],
    },
  ],
};

export default data;
