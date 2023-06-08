import { useEffect, useState } from "react";
import {
  displayCard,
  previewCard,
  reversePreview,
} from "../../animations/projectsDisplay";
import gsap from "gsap";
import "./projects.scss";
import { usePage } from "../../contexts/PageContext";
import { projects } from "./ProjectInfo";

const DisplayCard = ({
  id,
  className,
  currentlyPreviewing,
  setCurrentlyPreviewing,
  currentlyDisplaying,
  setCurrentlyDisplaying,
  timeline,
  setTimeline,
}: {
  id: string;
  className?: string;
  currentlyPreviewing: string | null;
  setCurrentlyPreviewing: React.Dispatch<React.SetStateAction<any>>;
  currentlyDisplaying: string | null;
  setCurrentlyDisplaying: React.Dispatch<React.SetStateAction<any>>;
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}): JSX.Element => {
  const translations: any = {
    1: "-translate-x-[30px] -translate-y-[35px]",
    2: "-translate-x-[30px] -translate-y-[35px]",
    3: "-translate-x-[30px] -translate-y-[35px]",
    4: "-translate-x-[30px] -translate-y-[35px]",
    5: "-translate-x-[30px] -translate-y-[35px]",
  };
  const { displayProjectOnLoad } = usePage();
  const p = projects.filter((project) => {
    return project.id === id;
  });
  const project = p[0];

  useEffect(() => {
    if (displayProjectOnLoad === id) {
      console.log(displayProjectOnLoad);
      displayCard(
        "-",
        +displayProjectOnLoad,
        currentlyDisplaying,
        setCurrentlyDisplaying,
        timeline,
        setTimeline
      );
    }
  }, [displayProjectOnLoad]);

  return (
    <div
      id={`project-card-${id}`}
      className={`project-card ${className}`}
      onMouseEnter={() => {
        previewCard(
          id,
          currentlyPreviewing,
          setCurrentlyPreviewing,
          currentlyDisplaying,
          setCurrentlyDisplaying
        );
      }}
      onMouseLeave={() => {
        reversePreview(
          id,
          currentlyPreviewing,
          setCurrentlyPreviewing,
          currentlyDisplaying,
          setCurrentlyDisplaying
        );
      }}
      onClick={() => {
        reversePreview(
          id,
          currentlyPreviewing,
          setCurrentlyPreviewing,
          currentlyDisplaying,
          setCurrentlyDisplaying
        );
        displayCard(
          "-",
          +id,
          currentlyDisplaying,
          setCurrentlyDisplaying,
          timeline,
          setTimeline
        );
      }}
    >
      {project.title}
      <div className="">
        <p>{project.description}</p>
        <div>
          {project.stack.map((tool, index) => {
            if (index === project.stack.length - 1) {
              return `${tool}.`;
            } else {
              return `${tool}, `;
            }
          })}
        </div>
      </div>
      <div
        id={`preview-card-${id}`}
        className={`preview-card opacity-0 ${translations[id]}`}
      >
        <div className="w-full h-full">
          <p className="pt-10">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = (): JSX.Element => {
  const [currentlyDisplaying, setCurrentlyDisplaying] = useState(null);
  const [currentlyPreviewing, setCurrentlyPreviewing] = useState(null);
  const [removeCardTl, setRemoveCardTl] = useState(gsap.timeline());

  return (
    <div className="projects" id="portfolio-page-1">
      <div className="projects__header">
        <h1>My Projects</h1>
      </div>
      <div className="projects__display">
        <div className="w-full h-full">
          <div className="projects__display-cards">
            <DisplayCard
              id="1"
              className={`skew-y-[12deg] origin-left z-[999999]`}
              currentlyPreviewing={currentlyPreviewing}
              setCurrentlyPreviewing={setCurrentlyPreviewing}
              currentlyDisplaying={currentlyDisplaying}
              setCurrentlyDisplaying={setCurrentlyDisplaying}
              timeline={removeCardTl}
              setTimeline={setRemoveCardTl}
            />
            <DisplayCard
              id="2"
              className={`skew-y-[12deg] translate-x-[40px] -translate-y-[20px] origin-left z-[99999]`}
              currentlyPreviewing={currentlyPreviewing}
              setCurrentlyPreviewing={setCurrentlyPreviewing}
              currentlyDisplaying={currentlyDisplaying}
              setCurrentlyDisplaying={setCurrentlyDisplaying}
              timeline={removeCardTl}
              setTimeline={setRemoveCardTl}
            />
            <DisplayCard
              id="3"
              className={`skew-y-[12deg] translate-x-[80px] -translate-y-[40px] origin-left z-[9999]`}
              currentlyPreviewing={currentlyPreviewing}
              setCurrentlyPreviewing={setCurrentlyPreviewing}
              currentlyDisplaying={currentlyDisplaying}
              setCurrentlyDisplaying={setCurrentlyDisplaying}
              timeline={removeCardTl}
              setTimeline={setRemoveCardTl}
            />
            <DisplayCard
              id="4"
              className={`skew-y-[12deg] translate-x-[120px] -translate-y-[60px] origin-left z-[999]`}
              currentlyPreviewing={currentlyPreviewing}
              setCurrentlyPreviewing={setCurrentlyPreviewing}
              currentlyDisplaying={currentlyDisplaying}
              setCurrentlyDisplaying={setCurrentlyDisplaying}
              timeline={removeCardTl}
              setTimeline={setRemoveCardTl}
            />
            <DisplayCard
              id="5"
              className={`skew-y-[12deg] translate-x-[160px] -translate-y-[80px] origin-left z-[99]`}
              currentlyPreviewing={currentlyPreviewing}
              setCurrentlyPreviewing={setCurrentlyPreviewing}
              currentlyDisplaying={currentlyDisplaying}
              setCurrentlyDisplaying={setCurrentlyDisplaying}
              timeline={removeCardTl}
              setTimeline={setRemoveCardTl}
            />
          </div>
          {/* <div className="projects__display-mobileCards">
            <MobileCard />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
