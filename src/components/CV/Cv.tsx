import "./cv.scss";
import LinkedIn from "../../assets/img/cv-linkedin.png";
import Github from "../../assets/img/cv-github.png";

const CV = () => {
  return (
    <div className="cv">
      <div className="cv__header">
        <div className="cv__header_name">
          <div className="initials">oo</div>
          <h1 className="name-text">opeyemi ogunbode</h1>
        </div>
        <div className="cv__header_details">
          <p>+2349011164280</p>
          <a href="mailto:ogunbodetimi@gmail.com">ogunbodetimi@gmail.com</a>
          <p className="capitalize">lagos, nigeria.</p>
          <div className="links">
            <a href="https://www.linkedin.com/in/opeyemi-ogunbode/" target={'_blank'}>
              <img src={LinkedIn} alt='' width={20} />
              LinkedIn
            </a>
            <a href="https://github.com/Timi-T" target={'_blank'}>
              <img src={Github} alt='' width={20} />
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="cv__body">
        <div className="cv__body_professional section">
          <h3 className="title">professional summary</h3>
          <p className="text">
            Talented Software Engineer equipped with a solid foundation in full-stack web development and
            a focus on user facing applications. An enthusiastic and passionate problem solver with an
            ability to quickly adapt to new challenges. Great team player and meticulous observer with an
            eye for details.
          </p>
        </div>

        <div className="cv__body_experience section">
          <h3 className="title">Experience</h3>
          <div className="text">
            <ul>
              <p>
                <span>software engineer, nautilus technologies,</span>
                &nbsp;jan 2023 - present, lagos nigeria.
              </p>
              <li>
                Worked in a team to develop and deploy a new software (BlockOps) that helps users interact seamlessly
                with complex cloud infrastructures.
              </li>
              <li>
                Integrated UI designs with high accuracy and user facing functionalities to improve user experience.
              </li>
              <li>
                Followed Agile methods to build and maintain existing software.
              </li>
            </ul>
            <ul className="mt-2">
              <p>
                <span>devops engineering intern, nautilus technologies,</span>
                &nbsp;jul 2022 - dec 2022, lagos nigeria.
              </p>
              <li>
                Created AWS cloud resources such as Ec2 instances and s3 bucket for application deployment using Infrastructure as Code.
              </li>
              <li>
                Built automated deployment pipelines for applications using GitHub actions.
              </li>
              <li>
                Integrated Kubernetes for orchestration of Docker containerised applications.
              </li>
            </ul>
          </div>
        </div>

        <div className="cv__body_skills section">
          <h3 className="title">skills summary</h3>
          <div className="text skills-list">
            <ul>
              <li>c language</li>
              <li>javascript & typescript</li>
              <li>python (flask)</li>
              <li>react.js & next.js</li>
              <li>node.js & express.js</li>
            </ul>
            <ul>
              <li>mySQL, mongoDB & redis</li>
              <li>HTML5</li>
              <li>CSS, SASS & tailwind</li>
              <li>GSAP</li>
            </ul>
          </div>
        </div>

        <div className="cv__body_education section">
          <h3 className="title">Education</h3>
          <div className="text">
          <ul className="mt-2">
              <div className="flex items-center justify-between">
                <p><span>certificate of completion, software engineering.</span></p>
                <p><span>sep 2022</span></p>
              </div>
              <p>
                <span>holberton school (ALX SE)</span>
                &nbsp;- tulsa, oklahoma, USA.
              </p>
              <li>
                Took a year long intensive training on the core fundamentals of software engineering.
              </li>
            </ul>
            <ul>
              <div className="flex items-center justify-between">
                <p><span>bachelor of engineering, mechanical engineering.</span></p>
                <p><span>dec 2020</span></p>
              </div>
              <p>
                <span>covenant university</span>
                &nbsp;- otta, ogun, nigeria.
              </p>
              <li>
                Elected Financial Secretary for Covenant University Mechanical Engineering Students Association.
              </li>
              <li>
                GPA 4.21.
              </li>
            </ul>
          </div>
        </div>

        <div className="cv__body_projects section">
          <h3 className="title">projects</h3>
          <div className="text">
            <ul className="cv-projects">
              <li>
                Productiv {'->'} &nbsp;
                <a href="https://github.com/Timi-T/producktiv" target={'_blank'}>view on github</a>
                <p className="project-text">
                  Peer based project for an online learning platform which allows users to share video
                  resources and learn from other users.
                </p>
              </li>
              <li>
                demo credit {'->'} &nbsp;
                <a href="https://github.com/Timi-T/lendsqr" target={'_blank'}>view on github</a>
                <p className="project-text">
                  Wallet API service that allows users deposit, withdraw and transfer funds from their wallet.
                </p>
              </li>
              <li>
                fees manager {'->'} &nbsp;
                <a href="https://github.com/Timi-T/fees_manager" target={'_blank'}>view on github</a>
                <p className="project-text">
                  School management software for managing fees payments and students records (In progress).
                </p>
              </li>
              <li>
                airbnb clone {'->'} &nbsp;
                <a href="https://github.com/Timi-T/AirBnB_clone_v4" target={'_blank'}>view on github</a>
                <p className="project-text">
                  Collaborated with peers to build a clone of AirBnB web application console that uses OOP
                  concepts to perform CRUD operations on a database and organise data into json format for
                  HTTP responses.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV;
