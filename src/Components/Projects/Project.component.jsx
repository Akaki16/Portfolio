import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Projects/Project.styles.css';

const Project = ({
    projectTitle,
    techStack,
    projectDescription,
    projectImage,
    liveLink,
    githubLink
}) => {
    return (
        <div className='project-item'>
            <div className='item'>
                <h2>{projectTitle}</h2>
                {techStack.map((stackItem, i) => {
                    return (
                        <div className='stack-item' key={i}>{stackItem}</div>
                    );
                })}
                <article>
                    <p>
                        {projectDescription}
                    </p>
                </article>
                <a className='live-link' href={liveLink} target='_blank'>
                    Live Demo
                </a>
                <a className='github-link' href={githubLink} target='_blank'>
                    Github
                </a>
            </div>
            <div className='item'>
                <a href={liveLink} target='_blank'>
                    <img src={projectImage} alt='project-image' />
                </a>
            </div>
        </div>
    );
}

Project.propTypes = {
    projectTitle: PropTypes.string,
    techStack: PropTypes.array,
    projectDescription: PropTypes.string,
    projectImage: PropTypes.string,
    liveLink: PropTypes.string,
    githubLink: PropTypes.string
};

export default Project;