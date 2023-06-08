import { ReactComponent as PortfolioIcon } from "../../assets/svg/portfolio-icon.svg";
import { ReactComponent as GraduationIcon } from "../../assets/svg/graduation-icon.svg";
import { tools, ToolInterface } from "./tools";
import "./profile.scss";
import { useState } from "react";
import StoryModal from "./StoryModal";

const ToolCase = ({ tool }: { tool: ToolInterface }) => {
  return (
    <div className="stack-item">
      <div className="tool-icon">{tool.icon}</div>
      <h5>{tool.name}</h5>
    </div>
  );
};

const Profile = () => {
  const [storyModalIsOpen, setStoryModalIsOpen] = useState(false);

  return (
    <div className={`profile`} id="profile-page-1">
      <div className={`profile-con ${storyModalIsOpen && "blur-sm"}`}>
        <div className="prof-summary">
          <h1>Summary</h1>
          <p>
            👋 I am a Software Engineer based in Lagos Nigeria with 2 years of
            Programming experience and 1 year of professional experience. I have
            a backgroung in Mechanical Engineering as a university major which
            has contributed greatly my problem solving skills. My passion for
            problem solving has brought me into the field of Technology and I
            look to take on more interesting and important challenges to shape
            the future.
          </p>
        </div>
        <div className="my-story">
          <h3>My Journey 🚶🏾‍♂️</h3>
          <div className="flex flex-col xl:flex-row gap-1 xl:gap-5">
            <p>
              If you are a recruiter, chances are that you want to understand my
              background. Well this section does just that.
            </p>
            <button
              className="journey-cta"
              onClick={() => {
                setStoryModalIsOpen(true);
              }}
            >
              Read My story...
            </button>
          </div>
        </div>
        <div className="tech-stack">
          <h3>Tech Stack 🛠️</h3>
          <div className="stack-items">
            {tools.map((tool, index) => {
              return (
                <div key={index}>
                  <ToolCase tool={tool} />
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="timeline-title">Timeline</h1>
        <div className="timeline">
          <div className="work-timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <PortfolioIcon />
              </div>
              <p className="tl-duration">Jan 2023 - present 📌</p>
              <h5>
                Software Engineer | Frontend
                <span> - Nautilus Technologies</span>
              </h5>
              <div>
                <p>
                  - Worked in a team to develop and deploy a new software
                  (BlockOps) that allows users interact seamlessly with complex
                  cloud infrastructures.
                </p>
                <p>
                  - Integrated UI designs with high accuracy and user facing
                  functionalities to improve user experience.
                </p>
                <p>
                  - Followed Agile methods to build and maintain existing
                  software.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <PortfolioIcon />
              </div>
              <p className="tl-duration">July 2022 - Dec 2022</p>
              <h5>
                Devops Intern<span> - Nautilus Technologies</span>
              </h5>
              <div>
                <p>
                  - Created AWS cloud resources such as Ec2 instances and s3
                  bucket for application deployment using Infrastructure as
                  Code.
                </p>
                <p>
                  - Built automated deployment pipelines for applications using
                  GitHub actions.
                </p>
                <p>
                  - Integrated Kubernetes for orchestration of Docker
                  containerised applications.
                </p>
              </div>
            </div>
          </div>
          <div className="edu-timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <GraduationIcon />
              </div>
              <p className="tl-duration">Aug 2021 - Sept 2022</p>
              <h5>
                Software Engineering
                <span> - Holberton School (ALX-Africa)</span>
              </h5>
              <div>
                <p>
                  - Took a year long intensive training on the core fundamentals
                  of software engineering.
                </p>
                <p>
                  - Worked on real world projects in teams and as an individual.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <GraduationIcon />
              </div>
              <p className="tl-duration">July 2022 - Dec 2022</p>
              <h5>
                Mechanical Engineering<span> - Covenant University</span>
              </h5>
              <div>
                <p>- GPA 4.21.</p>
                <p>
                  - Elected Financial Secretary for Covenant University
                  Mechanical Engineering Students Association.
                </p>
              </div>
            </div>
          </div>
        </div>

        <StoryModal
          storyModalIsOpen={storyModalIsOpen}
          setStoryModalIsOpen={setStoryModalIsOpen}
        />
      </div>
    </div>
  );
};

export default Profile;
