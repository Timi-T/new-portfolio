import { gsap } from "gsap";
import { PageId } from "../components/Nav/Nav";

export const slidePage = (activePage: PageId, newPageId: PageId | "") => {
  const pageTl = gsap.timeline();

  if (!newPageId) {
    pageTl.fromTo(
      `#${activePage}`,
      {
        xPercent: 0,
      },
      {
        xPercent: 100,
        ease: "power2.out",
        duration: 1,
      },
      ""
    );
  } else if (activePage !== newPageId) {
    pageTl
      .fromTo(
        `#${newPageId}`,
        {
          x: 0,
        },
        {
          xPercent: 100,
          ease: "back",
          duration: 1,
        },
        ""
      )
      .fromTo(
        `#${activePage}`,
        {
          xPercent: 0,
        },
        {
          xPercent: -100,
          ease: "",
          duration: 1,
        },
        ""
      );
  }
};
