import React from "react";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-left">
          <h2>
            Alex <br /> Da Silva
          </h2>
          <h3>Développeur Frontend</h3>
          <p>
            "Ma passion est de transformer vos concepts les plus innovants en
            réalités numériques, en créant des interfaces utilisateur qui sont
            non seulement intuitives, mais aussi offrent une expérience fluide
            et captivante."
          </p>
        </div>
        <div className="home-right">
          <div className="home-photo"></div>
          <div className="resume-download-btn">
            <button>
              <a target="blank" href="./CV.pdf" download="CV_Alex_Da_Silva">
                Téléchargez mon CV <i class="fa-solid fa-download"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
