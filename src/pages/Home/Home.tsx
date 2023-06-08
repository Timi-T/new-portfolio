import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import Nav, { PageId } from "../../components/Nav/Nav";
import Profile from "../Profile/Profile";
import { usePage } from "../../contexts/PageContext";
import { slidePage } from "../../animations/pageSlider";
import { useEffect } from "react";

const Home = (): JSX.Element => {
  const { activePage, setActivePage, windowScroll, setWindowScroll } =
    usePage();

  const pages: PageId[] = [
    "home-page-1",
    "profile-page-1",
    "portfolio-page-1",
    "blog-page-1",
    "contact-page-1",
  ];

  useEffect(() => {
    window.scrollTo(0, 5);
  }, []);

  const handleScrollEvent = (e: React.UIEvent<HTMLElement>): void => {
    console.log("scroll");
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    const top = e.currentTarget.scrollTop === 0;
    const currentIndex = pages.indexOf(activePage);

    if (bottom) {
      console.log("bottom");
      let nextIndex;
      if (currentIndex + 1 === pages.length) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
      slidePage(activePage, pages[nextIndex]);
      setActivePage(pages[nextIndex]);
    } else if (top) {
      console.log("top");
      let prevIndex;
      if (currentIndex - 1 === -1) {
        prevIndex = pages.length - 1;
      } else {
        prevIndex = currentIndex - 1;
      }
      slidePage(activePage, pages[prevIndex]);
      setActivePage(pages[prevIndex]);
    }
  };

  return (
    <div className="h-[100vh] overflow-scroll" onScroll={handleScrollEvent}>
      <div className="w-full relative overflow-scrol">
        <Nav />
        <Landing />
        <Profile />
        <Projects />
        {/* <Skills />
      <Story /> */}
      </div>
    </div>
  );
};

export default Home;

/*
Home
My Story
Skills
Education
CV
*/
