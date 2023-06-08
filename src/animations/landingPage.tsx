import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LandingPageTimeline = (): void => {
  const quoteTl = gsap.timeline();
  const creativeTl = gsap.timeline();
  const nameCursorTl = gsap.timeline();
  const titleTl = gsap.timeline();

  quoteTl
    .fromTo(
      ".quote",
      { scale: 0.95, y: 5, opacity: 0.5 },
      { scale: 1, y: 0, opacity: 1, ease: "linear", duration: 2 }
    )
    .fromTo(
      ".quote",
      { scale: 1, y: 0, opacity: 1 },
      { scale: 0.95, y: 5, opacity: 0.5, ease: "linear", duration: 2 }
    )
    .repeat(-1);

  creativeTl
    .fromTo(
      ".creative",
      { rotate: 0, x: 0, ease: "linear" },
      {
        rotateX: 360,
        x: 0,
        transformOrigin: "center",
        ease: "linear",
        duration: 1.5,
        delay: 3,
      }
    )
    .repeat(-1);

  setTimeout(() => {
    nameCursorTl
      .fromTo(
        ".name-cursor",
        { display: "none" },
        {
          display: "block",
          delay: 0.4,
          duration: 0.5,
          ease: "none",
          yoyo: true,
        }
      )
      .repeat(-1);
  }, 3600);

  titleTl.fromTo(
    ".title",
    { y: 200, opacity: 0, scale: 0, ease: "linear" },
    { y: 0, opacity: 1, duration: 1.5, scale: 1, ease: "power2.out", delay: 3 },
    "=1"
  );
};
