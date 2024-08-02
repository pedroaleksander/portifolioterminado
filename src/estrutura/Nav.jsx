// src/components/nav.js
import React from 'react';
import '../App.css'
import zap from "../img/zap.png"
import link from "../img/link.jpeg"
import git from "../img/git.png"
import gmail from "../img/gmail.png"

function nav() {
  return (
 <nav className="nav">
      <div className="logo">Portfólio</div>
        <ul className="nav-links">
          <li><a href="#ct">Carta de Apresentação</a></li>
          <li><a href="#vt">Curiculo Vitae</a></li>
          <li><a href="#tc">Técnico</a></li>
          <li><a href="#mt">Mátematica</a></li>
          <li><a href="#nt">Humanas</a></li>
          <li><a href="#lg">Linguagens</a></li>
          <li><a href="#pp">PPE</a></li>
          <li><a href="#pt">Primeiros Portfolios</a></li> 
             <img id="github" src={git} alt="github"/> &nbsp;
                <img id="gmail" src={gmail} alt="gmail"/>&nbsp;
                <img id="linkedin" src={link} alt="linkedin"/>&nbsp;
                <img id="whatsap" src={zap} alt="whatsap"/>&nbsp;
        </ul>
              <div className="img">
             
              </div>
</nav>
    
  );
}

export default nav;