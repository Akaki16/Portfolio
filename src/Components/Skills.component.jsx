import React, { useState } from 'react';
import '../Styles/Skills.styles.css';

const Skills = () => {
    const [skills, setSkills] = useState([
        'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-html-mobile-app-development-flaticons-lineal-color-flat-icons.png',
        'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-css-mobile-app-development-flaticons-lineal-color-flat-icons-4.png',
        'https://img.icons8.com/color/48/000000/bootstrap.png',
        'https://img.icons8.com/color/48/000000/javascript--v1.png',
        'https://img.icons8.com/officel/40/000000/react.png',
        'https://img.icons8.com/color/48/000000/nodejs.png',
        'https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67',
        'https://img.icons8.com/color/48/000000/mongodb.png',
        'https://img.icons8.com/color/48/000000/git.png'
    ]);

    return (
        <section className='skills' id='skills'>
            <br />
            <h1 className='skills-section-title'>Technologies I'm working with</h1>
            <br />
            <div className='skills-container'>
                {skills.map((skill, i) => {
                    return (
                        <div key={i} className='skills-container-item'>
                            <img src={skill} alt='skill' />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;