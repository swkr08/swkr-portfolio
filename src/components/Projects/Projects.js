import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import worldsufi from "../../Assets/Projects/worldsufi.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldsufi}
              isBlog={false}
              title="World Sufi Center"
              description="Collaborated on the real-time project'World Sufi center' with a focus on backend development successfully creating 
              dashboard and world statistics pages while playing a key role in understanding and implementing project requirements
              Gained practical experience by actively participating in project tasks and problem-solving further enhancing expertise in 
              backend development during this project"
              ghLink="https://github.com/swkr08/world_sufi/tree/master"
              demoLink="https://younusgeen.pythonanywhere.com/"
            />
            </Col>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="My first portfoliyo"
              description="my first static portfoliyo created during my Starting Learning time using html, css, javascript and hosted of the free hosting site netlify.app"
              ghLink="https://github.com/swkr08/portfolio-swkr"
              demoLink="https://swkr-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bill Spliter"
              description="A Simple Bill spliter created during my Starting Learning time using html, css, javascript and hosted of the free hosting site netlify.app"
              ghLink="https://github.com/swkr08/bill_spliter"
              demoLink="https://online-billspliter.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
