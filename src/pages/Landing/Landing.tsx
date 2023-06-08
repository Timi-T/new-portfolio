import { useEffect, useRef, useState } from "react";
import "./Landing.scss";
import { LandingPageTimeline } from "../../animations/landingPage";
import Carousel from "../../components/Carousel/Carousel";
import { slidePage } from "../../animations/pageSlider";

const Landing = (): JSX.Element => {
  const renderCount = useRef(1);
  const [username, setUsername] = useState("");
  const [nameIterator, setNameIterator] = useState(0);
  const nameArray = [
    "O",
    "P",
    "E",
    "Y",
    "E",
    "M",
    "I",
    " ",
    "O",
    "G",
    "U",
    "N",
    "B",
    "O",
    "D",
    "E",
  ];

  useEffect(() => {
    renderCount.current === 1 && slidePage("home-page-1", "");
    renderCount.current === 1 && LandingPageTimeline();
    renderCount.current++;
  }, []);

  useEffect(() => {
    nameIterator < nameArray.length &&
      setTimeout(
        () => {
          setUsername(username + nameArray[nameIterator]);
          setNameIterator(nameIterator + 1);
        },
        nameIterator === 7 ? 400 : 200
      );
  }, [nameIterator, username]);

  return (
    <section className="landing" id="home-page-1">
      <div>
        <Carousel />
      </div>
      <div className="landing__container">
        <div className="main-container">
          <div className="flex relative">
            <h1 className="name">{username}</h1>
            <div className="w-4">
              <p className="name-cursor"></p>
            </div>
          </div>
          <div className="title flex flex-col md:flex-row gap-2 items-center">
            <h3>
              Frontend Engineer{" "}
              <span className="block md:inline text-center">&&</span>
            </h3>
            <div>
              <h3 className="creative">Creative</h3>
            </div>
            <h3>Coding Enthusiast</h3>
          </div>
          <p className="quote">
            I have no special talent. I am only passionately curious ~{" "}
            <span>Albert Einstein</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
