import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prathmesh Bondar </span>
            from <span className="purple"> Pune, India.</span>
            <p>
          A passionate and dedicated final-year Computer Science student at Sinhgad College of Engineering, batch of 2025. With a strong foundation in coding and a keen interest in electronics and hardware-related fields, I thrive on learning new skills and creating innovative projects.
        </p>
        
        <h3>Education</h3>
        <p>
          - Sinhgad College of Engineering - Bachelor of Engineering in Computer Science (2025)
        </p>
        
        <h3>Professional Experience</h3>
        <p>
          - Java Developer Intern: Gained hands-on experience in Java development, worked on multiple projects, and learned to write efficient and scalable code.
        </p>
        <p>
          - Flutter Developer Intern: Developed mobile applications using Flutter, enhancing my skills in mobile app development and UI/UX design.
        </p>
        
        <h3>Achievements</h3>
        <p>
          - Presented Java projects at the Super X Program at Core2Web.
        </p>
        <p>
          - Completed a comprehensive Java course at Core2Web and a C programming course at SNTI System & Networks Technologies Training Institute.
        </p>
        
        <h3>Other Interests</h3>
        <p>
          Apart from coding, some other activities that I love to do!
        </p>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
