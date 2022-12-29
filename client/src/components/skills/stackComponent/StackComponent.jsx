import { NoEncryption } from '@mui/icons-material';
import './StackComponent.scss';


function StackComponent({ skill }) {
    return (


         <div className={`skill-container`} >
            <div className="skill-experience" style={ { width: `${skill.experience}%`} }>
                <p> {skill.name} </p>
            </div>
        </div>
    )
}

export default StackComponent;
