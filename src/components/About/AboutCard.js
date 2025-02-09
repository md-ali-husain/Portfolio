import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md Ali Husain </span>
            from <span className="purple"> Aurangabad Bihar, India.</span>
            <br />
            I am fresher.
            <br />
            I have completed an MCA in Computer Science from Galgotias University. 
            <br />
            <br/> 
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Personal Projects – Could be web apps, mobile apps, or exploring new technologies.
            </li>
            <br></br>
            <li className="about-activity">
              <ImPointRight />Learning New Programming Languages or Frameworks – Staying updated with languages or frameworks like Dart, React Native, Docker, or Flutter.
            </li>
            <br></br>
            <li className="about-activity">
              <ImPointRight />AI/ML Experimentation – Exploring machine learning models, experimenting with datasets, or building AI-related applications.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Md Ali Husain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
