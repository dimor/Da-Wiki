import classes from './About.module.css';
import React from 'react';
import logo from '../../assets/dawikilogo.png';
import github from '../../assets/GitHub_Logo.png'
const About = () => {

    return (

        <React.Fragment>

            <div className={classes.Wrapper}>
                <div className={classes.About} >
                <img src={logo} alt={logo} />
                    <p> האתר דע-ויקי שואב את המידע מתוך מאות אלפי ערכי ויקדפידה ומציג אותם בצורה ידידותית וקלילה,
                      כך שתוכלו ללמוד כמות גדולה של ערכים בזמן קצר,ובנוסף תוכלו לשמור ערכים שאהבתם</p>
                        <p>   נבנה על ידי: </p>
                            
                         <h4>dimorm@gmail.com</h4>  
                                <img  style={{cursor:'poiner'}} onClick={() => window.open('https://github.com/dimor/Da-Wiki', '_blank').focus()}   alt='github' src={github} />
                            
                            
                            
                </div>
            </div>

        </React.Fragment>

    )



}

export default About;