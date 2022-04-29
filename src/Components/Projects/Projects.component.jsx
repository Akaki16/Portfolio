import React from 'react';
import '../../Styles/Projects/Projects.styles.css';
import Project from './Project.component';
import MyTaskManagerAppImage from '../../assets/images/mytask-manager/task-manager1.png';
import CountriesFinderAppImage from '../../assets/images/countries-finder/countries-finder1.png';
import ArticlesRESTAPIProjectImage from '../../assets/images/articles-rest-api/articles-rest-api1.png';
import RockPaperScissorsProjectImage from '../../assets/images/rock-paper-scissors/rock-paper-scissors1.png';
import TicTacToeProjectImage from '../../assets/images/tic-tac-toe/tic-tac-toe1.png';
import SpaceTravelWebsiteImage from '../../assets/images/space-travel-website/space-travel1.png';
import GithubProfileFinderAppImage from '../../assets/images/github-profile-finder/github-profile-finder1.png';
import CalculatorAppImage from '../../assets/images/calculator/calculator1.png';

const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <br />
            <br />
            <h1 className='project-section-title'>I beleive in Proof of Work</h1>
            <br />
            <div className='projects-container'>
                <Project
                    projectTitle='MyTaskManager'
                    techStack={['React', 'Node', 'Express', 'MongoDB']}
                    projectDescription='This project was made using MERN stack,  By using this app you are able to add tasks, see tasks statistics, filter tasks based on their difficulty and completed status, Also you can search tasks by specyfing a search query. Deleting and Completing task functionality is implemented'
                    projectImage={MyTaskManagerAppImage}
                    liveLink='https://tasksmanage.netlify.app/'
                    githubLink='https://github.com/Akaki16/MyTaskManager-frontend'
                />
                <Project
                    projectTitle='Countries Finder'
                    techStack={['React', 'Countries REST API']}
                    projectDescription='This project was made using React, for countries data I used Countires REST API. By using this app you can search any country in the world, Also you can filter countries based on their region. If you click on a specific country, more information about this country will be shown.'
                    projectImage={CountriesFinderAppImage}
                    liveLink='https://findanycountry.netlify.app/'
                    githubLink='https://github.com/Akaki16/Countries-Finder'
                />
                <Project
                    projectTitle='Articles REST API'
                    techStack={['Node', 'Express', 'MongoDB']}
                    projectDescription='This project was made using Node, Express and MongoDB. This is REST API, you can CREATE, READ, DELETE and UPDATE resource.'
                    projectImage={ArticlesRESTAPIProjectImage}
                    liveLink='https://dry-ravine-06684.herokuapp.com/api/articles'
                    githubLink='https://github.com/Akaki16/Articles-REST-API'
                />
                <Project
                    projectTitle='Space Travel Website'
                    techStack={['HTML', 'CSS']}
                    projectDescription='This project was only made using HTML and CSS. You can see different sections in this website, For example: space travel destinations, crew and iformation about space technology.'
                    projectImage={SpaceTravelWebsiteImage}
                    liveLink='https://akaki16.github.io/Space-Travel-Website/index.html'
                    githubLink='https://github.com/Akaki16/Space-Travel-Website'
                />
                <Project
                    projectTitle='Rock Paper Scissors'
                    techStack={['HTML', 'CSS', 'JavaScript']}
                    projectDescription='This RPS game was made using HTML, CSS and Vanilla JavaScript. In this game you play against the computer. In total there are 15 rounds in this game.'
                    projectImage={RockPaperScissorsProjectImage}
                    liveLink='https://akaki16.github.io/Rock-Paper-Scissors/'
                    githubLink='https://github.com/Akaki16/Rock-Paper-Scissors'
                />
                <Project
                    projectTitle='Tic Tac Toe'
                    techStack={['HTML', 'CSS', 'JavaScript']}
                    projectDescription='This Tic Tac Toe game was made using HTML, CSS and Vanilla JavaScript. In this game two players are playing with each other, AI system is not implemented.'
                    projectImage={TicTacToeProjectImage}
                    liveLink='https://akaki16.github.io/Tic-Tac-Toe/'
                    githubLink='https://github.com/Akaki16/Tic-Tac-Toe'
                />
                <Project
                    projectTitle='Github Profile Finder'
                    techStack={['HTML', 'CSS', 'JavaScript']}
                    projectDescription="This app was made using HTML, CSS and Vanilla JavaScript. By using this app you can view rendered github profile's repos and followers. Also you can use search functionality to find any github profile. Toggling between light and dark mode is implemented in this app."
                    projectImage={GithubProfileFinderAppImage}
                    liveLink='https://akaki16.github.io/Github-Profile-Finder/'
                    githubLink='https://github.com/Akaki16/Github-Profile-Finder'
                />
                <Project
                    projectTitle='Web Calculator'
                    techStack={['HTML', 'CSS', 'JavaScript']}
                    projectDescription='This web calculator app was made using HTML, CSS and Vanilla JavaScript. It (web calculator) has all of the basic functionalities: addition, subtraction, division, multiplication.'
                    projectImage={CalculatorAppImage}
                    liveLink='https://akaki16.github.io/calculator/'
                    githubLink='https://github.com/Akaki16/calculator'
                />
            </div>
        </section>
    );
}

export default Projects;