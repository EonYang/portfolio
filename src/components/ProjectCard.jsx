import React, { useEffect, useCallback, useRef } from 'react';
import Tools from '../utils/Tools';

const ProjectCard = ({ project, isMobile, width, height }) => {

    const videoRef = useRef(null);

    const onMouseEnterPlayVideo = useCallback(() => {
        videoRef.current.play();
    }, [])

    const onMouseLeaveStopVideo = useCallback(() => {
        videoRef.current.pause();
    }, [])

    if (!project) {
        console.warn("no project! : ", project);
        return;
    }

    return (
        <>
            <div className="coverContainer mx-auto overflow-hidden" style={{ width, height }} onClick={() => Tools.openLink(project.link)}>
                <video muted className=""
                    ref={videoRef}

                    style={{ top: '0px' }}
                    src={require(`../data/${project.cover.animation}`)}
                    type="video/mp4" loop="loop"
                    playsInline={true}
                ></video>
                <div className="w-100 h-100 position-absolute cover disapperWhenHover"
                    onMouseEnter={onMouseEnterPlayVideo}
                    onMouseLeave={onMouseLeaveStopVideo}
                    style={{
                        top: '0px',
                        width,
                        height,
                        backgroundImage: `url(${require(`../data/${project.cover.image}`)})`,
                    }}>
                    <div className="darkOverlay"></div>
                    <h3 className="title w-50 h2 h-auto mx-auto font-weight-lighter text-uppercase">
                        {project.title}</h3>
                </div >
            </div >
        </>
    )
}

export default ProjectCard;