import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('./me.png')} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/HadiAliHussein" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hadi-ali-hussein-98837a217" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hadi Ali Hussein</h1>
          <p>Front- & Backend | IT-Security</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/HadiAliHussein" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hadi-ali-hussein-98837a217" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;