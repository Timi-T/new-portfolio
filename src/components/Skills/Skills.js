import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills" id="profile-page-1">
      <div className="top-section">
        <h1>Programming Languages</h1>
        <ul className="languages">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C</li>
          <li>Python</li>
          <li>Bash Scripting</li>
        </ul>
      </div>
      <div className="mid-section">
        <div className="frontend">
          <h1>Frontend Stack (Main Stack)</h1>
          <ul>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Next.JS</li>
            <li>GSAP</li>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>TAILWIND</li>
          </ul>
        </div>
        <div className="soft-skills">
          <h1>Soft Skills</h1>
          <ul>
            <li>Clear and concise communication</li>
            <li>Great Team player</li>
            <li>Ability to take Initiative when necessary</li>
            <li>Highly Professional work Ethics</li>
            <li>Ability to maintain a healthy work environment</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="bottom-section">
        <h1>Technologies I understand but do not use frequently</h1>
        <div className="backend">
          <h1>Backend stack (Built a few projects using these)</h1>
          <ul>
            <li>Node.js</li>
            <li>Flask</li>
            <li>MYSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className="devops">
          <h1>Devops Tools (Worked with these tools as a Devops Intern.)</h1>
          <ul>
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
            <li>NGINX</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
