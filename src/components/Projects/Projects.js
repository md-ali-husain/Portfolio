import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Event from "../../Assets/Projects/Events.jpg";
import Todo from "../../Assets/Projects/To-do.jpg";
import Ecomarce from "../../Assets/Projects/E-comarce.jpg";
import food from "../../Assets/Projects/foodimg.jpg";
import Class from "../../Assets/Projects/class-meg.jpg";
import foodwaste from "../../Assets/Projects/Food-wastes.jpg";

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
              imgPath={food}
              isBlog={false}
              title="Food Delivery Website"
              description="Discover a wide selection of delicious meals from your favorite local restaurants, delivered right to your doorstep. Browse through diverse menus, read customer reviews, and take advantage of exclusive deals. With an easy-to-use interface, you can add items from multiple restaurants to a single cart, making your ordering experience seamless and hassle-free."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodwaste}
              isBlog={false}
              title ="Waste Food Management System"
              description="Developed a Waste Food Management System designed to reduce food waste by connecting restaurants, consumers, and food banks. The platform allows restaurants to track surplus food and offers real-time notifications for donation opportunities. Users can contribute by donating unused food, while consumers can access discounted meals. This system promotes sustainability by minimizing food waste and supporting community outreach."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomarce}
              isBlog={false}
              title="E-Commerce Platform"
              description="Developed a fully functional E-Commerce platform that enables users to browse products add items to their cart and complete secure online transactions. Integrated features such as user authentication order management product search and payment gateway integration.
              E-commerce shops have become part of our daily lives Technological advancement has made it possible for people to sit in the convenience of
             their homes and still shop online without going to a physical shop."
       
            />
          </Col>

          <Col md={4} className="Event Management System">
            <ProjectCard
              imgPath={Event}
              isBlog={false}
              title=" Event Management System "
              description="The Event Management System (EMS) project is designed to streamline the process of planning, managing, and executing events of all types. The system offers a fully integrated platform that handles every aspect of event management, from initial planning stages to post-event analysis. By automating repetitive tasks, enhancing attendee engagement, and providing real-time insights, the EMS simplifies the management of both small and large events."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Class}
              isBlog={false}
              title="Class-Management"
              description="Managing a classroom is a challenge for teachers. Many factors have to be taken into consideration while planning and preparing for a new class of students. I feel that having a clear and consistent classroom management plan with an understanding of how the teacher will behave the beliefs the rules and strategies are crucial in the running and organization of a classroom in order for all children to learn and succeed to the best of their ability."
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo List"
              description="The concept of to-do list has existed for a very long time and it is one of the primary methods for management of tasks, use of a to-dos as a reminder system, to-dos as a system for note management, etc. In the simplest and most primitive form, a to-do list can be implemented on a pen and paper as a checklist of items which can be crossed of or ticked against when completed."
        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
