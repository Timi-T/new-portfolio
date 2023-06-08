import { useEffect, useRef, useState } from "react";
import { ReactComponent as MagnifyIcon } from "../../assets/svg/magnify-icon.svg";
import { projects, projectInterface } from "../../pages/Projects/ProjectInfo";
import {
  displayProjectInfo,
  hideProjectInfo,
  pauseCarousel,
  playCarousel,
  startCarousel,
} from "../../animations/carousel";
import "./carousel.scss";
import { usePage } from "../../contexts/PageContext";
import { slidePage } from "../../animations/pageSlider";

const CarouselBox = ({
  project,
  id,
}: {
  project: projectInterface;
  id: string;
}) => {
  const { activePage, setActivePage, setDisplayProjectOnLoad } = usePage();
  const [currentlyAnimating, setCurrentlyAnimating] = useState("");
  const projectId = `project-${id}`;
  const infoId = `project-info-${id}`;

  return (
    <button
      type="button"
      className="carousel-box relative"
      id={projectId}
      onClick={() => {
        if (currentlyAnimating !== infoId) {
          pauseCarousel();
          displayProjectInfo(infoId);
          setCurrentlyAnimating(infoId);
        }
      }}
      onMouseEnter={pauseCarousel}
      onBlur={(e) => {
        playCarousel();
        e.stopPropagation();
        if (currentlyAnimating === infoId) {
          hideProjectInfo(infoId);
          setCurrentlyAnimating("");
        }
      }}
    >
      <div className="w-full flex flex-row items-center justify-between px-5">
        <p className="w-[80%] truncate">{project.title}</p>
        <MagnifyIcon />
      </div>
      <div className="carousel-info" id={infoId}>
        <div className="row">
          <p>
            Title
            <span>|</span>
          </p>
          {project.title}
        </div>
        <div className="row">
          <p>
            Type <span>|</span>
          </p>{" "}
          {project.type}
        </div>
        {/* <div className="row">
          {" "}
          <p>Description:</p>{" "}
          {project.description}
        </div> */}
        <div className="row">
          <p>
            Stack <span>|</span>
          </p>
          <div className="w-[170px] 2xl:w-[200px] text-start">
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
          className="absolute bottom-5 bg-[#e75f6b] text-white px-3 py-1 rounded-sm max-w-[170px] text-[12px] self-center"
          onClick={() => {
            setActivePage("portfolio-page-1");
            console.log(project.id);
            setDisplayProjectOnLoad(project.id);
            slidePage(activePage, "portfolio-page-1");
          }}
        >
          See full details
        </div>
      </div>
    </button>
  );
};

const Carousel = () => {
  const projectList1 = (
    <div
      className="project-list"
      onMouseLeave={() => {
        playCarousel();
      }}
    >
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <CarouselBox project={project} id={String(index)} />
          </div>
        );
      })}
    </div>
  );
  const projectList2 = (
    <div className="project-list">
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <CarouselBox
              project={project}
              id={String(projects.length + index)}
            />
          </div>
        );
      })}
    </div>
  );

  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current === 1 && startCarousel();
  }, []);

  return (
    <div className="w-[calc(100%-80px)] relative mt-10">
      <h2 className="ml-10 mt-10">Preview Projects</h2>
      <div className="project-carousel">
        <div className="project-list-1 w-full">{projectList1}</div>
        <div className="project-list-2 w-full absolute">{projectList2}</div>
      </div>
    </div>
  );
};

export default Carousel;
