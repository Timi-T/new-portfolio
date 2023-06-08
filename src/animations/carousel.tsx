import { gsap } from "gsap";

const tl1 = gsap.timeline();
const tl2 = gsap.timeline();

const infoTl = gsap.timeline();

export const startCarousel = () => {
  tl1.fromTo(
    ".project-list-1",
    { xPercent: -100 },
    { xPercent: 100, duration: 20, ease: "linear", repeat: -1 },
    ""
  );
  tl2.fromTo(
    ".project-list-2",
    {
      xPercent: -100,
      opacity: 1,
    },
    {
      xPercent: 100,
      opacity: 1,
      duration: 20,
      ease: "linear",
      repeat: -1,
      delay: 10,
    },
    ""
  );
};

export const pauseCarousel = () => {
  tl1.pause();
  tl2.pause();
};

export const playCarousel = () => {
  tl1.play();
  tl2.play();
};

export const displayProjectInfo = (id: string) => {
  infoTl.fromTo(
    `#${id}`,
    {
      opacity: 0,
      y: 0,
      x: 0,
      scale: 0.2,
    },
    {
      opacity: 1,
      yPercent: 50,
      xPercent: 50,
      ease: "back",
      scale: 1,
      duration: 1.3,
    }
  );
};

export const hideProjectInfo = (id: string) => {
  infoTl.fromTo(
    `#${id}`,
    {
      opacity: 1,
      yPercent: 50,
      xPercent: 50,
      ease: "back",
      scale: 1,
      duration: 1.3,
    },
    {
      opacity: 0,
      y: -50,
      x: -50,
      scale: 0.2,
    }
  );
};
