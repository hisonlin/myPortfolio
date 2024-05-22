import React from 'react';
import PropTypes from 'prop-types';
import './SkillCard.scss';
import MakeAwesome from '../MakeAwesome/MakeAwesome';

const SkillCard = (props) => {
  return (
    <div className="mainContainer">
      <div className="skillContainer underline-animation">
        <div>SKILLS</div>
      </div>
      <div className="skillCard" id="programmingCard">
        <div className="face face1">
          <div className="content programming-content">
              <div className="text">JavaScript</div>
              <div className="text">HTML5</div>
              <div className="text">CSS3</div>
              <div className="text">ES2015</div>
              <div className="text">NodeJS</div>
              <div className="text">ReactJS</div>
              <div className="text">REST API</div>
              <div className="text">Animation</div>
              <div className="text">Database</div>
              <div className="text">Responsive Design</div>
              <div className="text">WebStorm</div>            
              <div className="text">Visual Studio Code</div>

          </div>
        </div>
        <div className="face face2 programming-face">
          <div className="cardHead">Web Dev</div>
        </div>
      </div>
      
      <div className="skillCard" id='stylingCard'>
        <div className="face face1">
          <div className="content">
              <div className='text'>Wireframe</div>
              <div className='text'>Mockup</div>
              <div className="text">Figma</div>          
              <div className="text">Bootstrap</div>
              <div className="text">Material UI</div>
              <div className="text">Tailwind</div>           
              <div className="text">Material Design 3</div>
              <div className="text">Compose</div>
          </div>
        </div>
        <div className="face face2 uix-face" >
          <div className="cardHead">UI/UX</div>
        </div>
      </div>
      <div className="skillCard" id='dataCard'>
        <div className="face face1">
          <div className="content">            
              <div className="text">MySQL</div>
              <div className="text">MongoDB</div>           
              <div className="text">Firebase</div>
              <div className="text">DynamoDB</div>
          </div>
        </div>
        <div className="face face2 data-face">
          <div className="cardHead">Database</div>
        </div>
      </div>
      <div className="skillCard" id='devCard'>
        <div className="face face1">
          <div className="content">           
              <div className="text">Java</div>
              <div className="text">Kotlin</div>
              <div className="text">Material Design 3</div>
              <div className="text">Compose</div>
              <div className="text">Android Studio</div>
          </div>
        </div>
        <div className="face face2 android-face">
          <div className="cardHead">Android</div>
        </div>
      </div>
      
      <div className="skillCard" id='ideCard'>
        <div className="face face1">
          <div className="content">           
              <div className="text">JavaSrcipt</div>
              <div className="text">Java</div>
              <div className="text">Kotlin</div>
              <div className="text">Python</div>
              <div className="text">C++</div>
              <div className="text">C#</div> 
          </div>
        </div>
        <div className="face face2 languages-face">
          <div className="cardHead">Languages</div>
        </div>
      </div>
      <div className='makeAwesome'><MakeAwesome /></div>
      
    </div>
  );
};

SkillCard.propTypes = {};

export default SkillCard;
