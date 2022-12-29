import './Skills.scss';
import { useState, useEffect } from 'react';
import { skills, skillExperience } from './skillData.js';
import StackComponent from './stackComponent/StackComponent.jsx';

function Skills() {

    const [ skillName, setSkillName ] = useState('frontend');
    const [ stack, setStack ] = useState([]);

    useEffect( () => {
        const tempStack = skillExperience.map( skill => skill.title == skillName ?skill.stack : null).filter( i => i != null);

        setStack([...tempStack[0]]);

        
        
    }, [skillName]);

    
    return (
    <div className='skills' id='skills'>

        <h1>Skills</h1>

        <div className="main-container">

        <div className="left">

            <p> I mainly focus on Frontend technologies, however, I'm also fluent in Backend, specially <span>NodeJS</span> and <span>Express</span>.</p>

        </div>
                <div className="right">

                    <div className="main-skills-container">

                        <ul>
                            {skills.map(skill => (
                                <li className={skill.title == skillName ? 'skill active' : 'skill'} onClick={() => setSkillName(`${skill.title}`)}> {skill.name} </li>
                            ))}
                        </ul>



                    </div>

                    <div className="stack-container">

                    {stack.map( item => (
                            <StackComponent skill={item} />
                        ))}

                    </div>
                    

                </div>


            </div>



      
    </div>
  )
}

export default Skills;
