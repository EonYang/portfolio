import React, { useCallback, useRef, FC, useEffect } from "react";
import Tools from "../utils/Tools";
import { IProject } from "types";
// import { Link } from "react-router-dom";

interface IProjectCardProps {
  project: IProject;
  isMobile: boolean;
  width: number;
  height: number;
}

const ProjectCard: FC<IProjectCardProps> = ({
  project,
  isMobile,
  width,
  height,
}) => {
  const videoRef = useRef(null);
  const videoCurtain = useRef(null);

  const playVideo = useCallback(() => {
    console.log("called playing");
    const isPlaying =
      videoRef.current.currentTime > 0 &&
      !videoRef.current.paused &&
      !videoRef.current.ended &&
      videoRef.current.readyState > 2;

    videoCurtain.current && videoCurtain.current.classList.add("opacity-0");

    if (!isPlaying) {
      videoRef.current.play();
    }
  }, []);

  const stopVideo = useCallback(() => {
    const isPlaying =
      videoRef.current.currentTime > 0 &&
      !videoRef.current.paused &&
      !videoRef.current.ended &&
      videoRef.current.readyState > 2;
    videoCurtain.current && videoCurtain.current.classList.remove("opacity-0");
    if (isPlaying) {
      videoRef.current.pause();
    }
  }, []);

  // const [ratio, setRatio] = useState(0);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio >= 0.8) {
          console.log("play video");
          playVideo();
          setTimeout(stopVideo, 1500);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px",
        threshold: [0.8, 0.9],
      }
    )
  );

  useEffect(() => {
    let observerCurrent = observer.current;
    observerCurrent.observe(videoRef.current);
    return () => {
      observerCurrent.disconnect();
    };
  }, []);

  if (!project) {
    console.warn("no project! : ", project);
    return;
  }

  let left = 0;
  // let left = width * 0.05;
  // width = width * 0.9;
  height = height * 0.7;

  return (
    <>
      {/* <Link to={`/project/${project.wpid}`}> */}
      <div
        className="coverContainer mx-auto overflow-hidden"
        style={{
          left,
          width,
          height,
        }}
        onClick={() => Tools.openLink(project.link)}
      >
        <video
          muted
          className=""
          ref={videoRef}
          style={{ top: "0px" }}
          src={require(`../data/${project.cover.animation}`)}
          loop={true}
          playsInline={true}
        ></video>
        <div
          className="w-100 h-100 position-absolute cover disapperWhenHover"
          onMouseEnter={playVideo}
          onMouseLeave={stopVideo}
          ref={videoCurtain}
          style={{
            top: "0px",
            width,
            height,
            backgroundImage: `url(${require(`../data/${project.cover.image}`)})`,
          }}
        ></div>
      </div>
      <div
        className="project-info"
        style={{
          left,
          width,
        }}
      >
        {/* <h3 className="text-uppercase">{ratio}</h3> */}
        <h3 className="text-uppercase">{project.title}</h3>
        <p>{project.teaser}</p>
      </div>
      {/* </Link> */}
    </>
  );
};

export default ProjectCard;
