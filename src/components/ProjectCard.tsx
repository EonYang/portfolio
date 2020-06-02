//@ts-nocheck
import React, { useCallback, useRef } from "react";
import Tools from "../utils/Tools";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, isMobile, width, height }) => {
  const videoRef = useRef(null);

  const onMouseEnterPlayVideo = useCallback(() => {
    const isPlaying =
      videoRef.current.currentTime > 0 &&
      !videoRef.current.paused &&
      !videoRef.current.ended &&
      videoRef.current.readyState > 2;

    if (!isPlaying) {
      videoRef.current.play();
    }
  }, []);

  const onMouseLeaveStopVideo = useCallback(() => {
    const isPlaying =
      videoRef.current.currentTime > 0 &&
      !videoRef.current.paused &&
      !videoRef.current.ended &&
      videoRef.current.readyState > 2;
    if (isPlaying) {
      videoRef.current.pause();
    }
  }, []);

  if (!project) {
    console.warn("no project! : ", project);
    return;
  }

  let left = width * 0.05;
  width = width * 0.9;
  height = height * 0.7;

  return (
    <>
      <Link to={`/project/${project.wpid}`}>
        <div
          className="coverContainer mx-auto overflow-hidden"
          style={{
            left,
            width,
            height,
          }}
          onClick={() => `Tools.openLink(project.link)`}
        >
          <video
            muted
            className=""
            ref={videoRef}
            style={{ top: "0px" }}
            src={require(`../data/${project.cover.animation}`)}
            type="video/mp4"
            loop="loop"
            playsInline={true}
          ></video>
          <div
            className="w-100 h-100 position-absolute cover disapperWhenHover"
            onMouseEnter={onMouseEnterPlayVideo}
            onMouseLeave={onMouseLeaveStopVideo}
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
          <h3 className="text-uppercase">{project.title}</h3>
          <p>{project.teaser}</p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
