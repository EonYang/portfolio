import React , {useEffect} from 'react';
import Tools from '../tools/Tools';
import $ from "jquery"

const ProjectCard = ({project, isMobile}) => {

    useEffect(()=>{
        console.log();
        $(`.coverContainer`).addClass('animated fadeInUp fast')
    },[])

    return (
        
        <div className="col-md-6 col-lg-4" >
            {console.log(project.title)}
            <div className="coverContainer position-relative my-2 mx-auto" onClick={() => Tools.openLink(project.link)}>
                <video autoPlay muted className="centerCrop position-absolute" style={{ top: '0px' }} src={require(`../data/${project.cover.animation}`)}
                    type="video/mp4" loop="loop" playsInline={true}></video>
                <div className="w-100 h-100 position-absolute disapperWhenHover" style={{ top: '0px' }}>
                    <img className="centerCrop w-100 h-100 position-absolute" style={{ top: '0px' }} alt={project.title} src={require(`../data/${project.cover.image}`)}></img>
                    <div className="darkOverlay "></div>
                    <div className="title w-50 h2 h-auto mx-auto font-weight-lighter text-uppercase">
                        {project.title}</div>
                </div >
            </div >
        </div >
    )
}

export default ProjectCard;