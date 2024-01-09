import React from "react";
import "../styles/pages/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projets</h2>
      <div className="project">
        <div className="project-hover">
          <a
            className="project-link-btn"
            href="https://github.com/AlexDsv/slot"
            target="blank"
          >
            Voir le projet
          </a>
        </div>
        <div className="project-infos">
          <div className="project-name">
            <h3>Machine à sous</h3>
          </div>
          <div className="project-description">
            Réaliser une machine à sous avec TypeScript. C'était le challenge
            pour ce projet. Une machine à sous 100% fonctionnelle avec
            possibilité de parier et de modifier le montant du pari pour chaque
            spin. Avec un système de victoire basé sur le montant du pari et un
            solde fictif actualisé en temps réel.
          </div>

          <div className="project-skills">
            <div className="project-skill-bubble">HTML</div>
            <div className="project-skill-bubble">CSS</div>
            <div className="project-skill-bubble">SASS</div>
            <div className="project-skill-bubble">TypeScript</div>
          </div>
        </div>
        <div className="project-img" id="project-img"></div>
      </div>
      <div className="project">
        <div className="project-hover">
          <a
            className="project-link-btn"
            href="https://github.com/AlexDsv/Kasa-OC"
            target="blank"
          >
            Voir le projet
          </a>
        </div>
        <div className="project-infos">
          <div className="project-name">
            <h3>Kasa</h3>
          </div>
          <div className="project-description">
            Kasa est une application de location de logement. Il regroupe un
            certain nombre de propositions et met à disposition toutes les infos
            importantes concernant les logements. Soit des photos, les
            équipements et le mobilier disponible sur place ainsi qu'une
            description et l'emplacement du logement.
          </div>
          <div className="project-skills">
            <div className="project-skill-bubble">HTML</div>
            <div className="project-skill-bubble">CSS</div>
            <div className="project-skill-bubble">SASS</div>
            <div className="project-skill-bubble">JavaScript</div>
            <div className="project-skill-bubble">React</div>
          </div>
        </div>
        <div className="project-img" id="project-img1"></div>
      </div>
      <div className="project">
        <div className="project-hover">
          <a
            className="project-link-btn"
            href="https://github.com/AlexDsv/photographer-portfolio"
            target="blank"
          >
            Voir le projet
          </a>
        </div>
        <div className="project-infos">
          <div className="project-name">
            <h3>Portfolio de photographe</h3>
          </div>
          <div className="project-description">
            J'ai réalisé de portfolio pour une photographe, Emily Brown. J'ai
            misé sur un design plutôt minimaliste et épuré et une navigation
            fluide avec des animations pour rendre l'expérience plus agréable.
            Les images sont récupérées sur un cloud. Pour stocker et récupérer
            mes images, j'ai utilisé Cloudinary, ce qui permet aussi de donner
            la possibilité au photographe de gérer lui même les photos de son
            portfolio.
          </div>
          <div className="project-skills">
            <div className="project-skill-bubble">HTML</div>
            <div className="project-skill-bubble">CSS</div>
            <div className="project-skill-bubble">JavaScript</div>
            <div className="project-skill-bubble">React</div>
            <div className="project-skill-bubble">Express</div>
          </div>
        </div>
        <div className="project-img" id="project-img2"></div>
      </div>
      <div className="project">
        <div className="project-hover">
          <a
            className="project-link-btn"
            href="https://github.com/AlexDsv/furniro"
            target="blank"
          >
            Voir le projet
          </a>
        </div>
        <div className="project-infos">
          <div className="project-name">
            <h3>Furniro</h3>
          </div>
          <div className="project-description">
            Furniro est un site e-commerce de mobilier d'intérieur et de
            décoration. Le but avec ce site était de mettre le plus possible en
            valeur les produits. D'utiliser les photos de la meilleure manière
            possible pour rendre le site le plus beau possible. On peut modifier
            la quantité du produit que l'on veut ajouter au panier et accéder à
            celui-ci.
          </div>
          <div className="project-skills">
            <div className="project-skill-bubble">HTML</div>
            <div className="project-skill-bubble">CSS</div>
            <div className="project-skill-bubble">JavaScript</div>
            <div className="project-skill-bubble">React</div>
          </div>
        </div>
        <div className="project-img" id="project-img3"></div>
      </div>
      <div className="project">
        <div className="project-hover">
          <a
            className="project-link-btn"
            href="https://github.com/AlexDsv/OC_Project_2"
            target="blank"
          >
            Voir le projet
          </a>
        </div>
        <div className="project-infos">
          <div className="project-name">
            <h3>Booki</h3>
          </div>
          <div className="project-description">
            Booki est une plateforme permettant de trouver des hébergements et
            des activités dans une ville. Il regroupe plusieurs propositions
            avec différentes informations les concernant, des photos, des notes
            etc... De même pour les activités sur place. Le but était vraiment
            d'obtenir une UX la plus agréable possible en utilisant des
            animations et des belles photos.
          </div>
          <div className="project-skills">
            <div className="project-skill-bubble">HTML</div>
            <div className="project-skill-bubble">CSS</div>
          </div>
        </div>
        <div className="project-img" id="project-img4"></div>
      </div>
    </div>
  );
};

export default Projects;
