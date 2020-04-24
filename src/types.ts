export enum AnimationFormat {
  video,
  gif,
}

export interface ICover {
  image: string;
  animationFormat: AnimationFormat;
  animation: string;
}

export interface IProject {
  priority: number;
  title: string;
  cover: ICover;
  link: URL;
  time: string;
  teaser: string;
  category: string[];
  tags: string[];
}

export interface IData {
  projects: IProject[];
}
