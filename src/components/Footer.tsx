import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        {/* <a href="https://github.com/HadiAliHussein" target="_blank" rel="noreferrer"><GitHubIcon/></a> */}
        <a href="https://www.linkedin.com/in/hadi-ali-hussein-98837a217" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>E-Mail: <a href="mailto:hadi@alihussein.de" target="_blank" rel="noreferrer">hadi@alihussein.de</a></p>
    </footer>
  );
}

export default Footer;
