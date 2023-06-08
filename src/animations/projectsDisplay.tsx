import gsap from "gsap";

export const displayCard = (
  operation: "-" | "+",
  cardNumber: number,
  currentlyDisplaying: string | null,
  setCurrentlyDisplaying: React.Dispatch<React.SetStateAction<null | string>>,
  timeline: gsap.core.Timeline,
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>
): void => {
  let currentBaseHeight = 0;

  const cardbaseHeights: any = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  if (operation === "-" && !currentlyDisplaying) {
    Object.keys(cardbaseHeights).map((currentCardNo: string) => {
      if (cardNumber !== +currentCardNo) {
        cardbaseHeights[currentCardNo] =
          (cardbaseHeights[currentCardNo] + currentBaseHeight) * -1;
        currentBaseHeight += 20;
      }
    });

    setCurrentlyDisplaying(String(cardNumber));

    timeline
      .fromTo(`#preview-card-${cardNumber}`, {}, { opacity: 0, zIndex: -1 })
      .fromTo(
        `#project-card-${cardNumber}`,
        {},
        { left: 500, skewY: -12, duration: 1, ease: "linear" }
      )
      .fromTo(
        `#project-card-${cardNumber}`,
        {},
        {
          translateX: 0,
          translateY: 0,
          width: 600,
          height: 350,
          backgroundColor: "transparent",
          /* color: "black", */
          duration: 1,
        }
      );

    timeline
      .fromTo(
        `${cardNumber < 2 ? "#project-card-2" : null}`,
        {},
        {
          translateY: cardbaseHeights["2"],
          translateX: -cardbaseHeights["2"] * 2,
          duration: cardNumber < 2 ? 0.5 : 0,
          ease: "linear",
        }
      )
      .fromTo(
        `${cardNumber < 3 ? "#project-card-3" : null}`,
        {},
        {
          translateY: cardbaseHeights["3"],
          translateX: -cardbaseHeights["3"] * 2,
          duration: cardNumber < 3 ? 0.5 : 0,
          ease: "linear",
        },
        "=-.25"
      )
      .fromTo(
        `${cardNumber < 4 ? "#project-card-4" : null}`,
        {},
        {
          translateY: cardbaseHeights["4"],
          translateX: -cardbaseHeights["4"] * 2,
          duration: cardNumber < 4 ? 0.5 : 0,
          ease: "linear",
        },
        "=-.25"
      )
      .fromTo(
        `${cardNumber < 5 ? "#project-card-5" : null}`,
        {},
        {
          translateY: cardbaseHeights["5"],
          translateX: -cardbaseHeights["5"] * 2,
          duration: cardNumber < 5 ? 0.5 : 0,
          ease: "linear",
        },
        "=-.25"
      );
  } else if (currentlyDisplaying) {
    timeline.reverse();
    const newTimeline = gsap.timeline();
    setTimeline(newTimeline);
    setCurrentlyDisplaying(null);
    setTimeout(() => {
      if (cardNumber !== +currentlyDisplaying) {
        displayCard(
          "-",
          cardNumber,
          null,
          setCurrentlyDisplaying,
          newTimeline,
          setTimeline
        );
      }
    }, 1000);
  }
};

export const reverseDisplay = (
  cardNumber: string,
  setCurrentlyDisplaying: React.Dispatch<React.SetStateAction<any>>
) => {
  console.log("reversed");
  const currentCard = document.querySelector(
    `#project-card-${cardNumber}`
  ) as HTMLElement;
  /* const dipslayBox = document.querySelector(".fit-box");
  dipslayBox?.removeChild(currentCard); */
  const cardsBox = document.querySelector(".projects__display-cards");
  cardsBox?.appendChild(currentCard);
  setCurrentlyDisplaying(null);
};

export const previewCard = (
  id: string,
  currentlyPreviewing: string | null,
  setCurrentlyPreviewing: React.Dispatch<React.SetStateAction<any>>,
  currentlyDisplaying: string | null,
  setCurrentlyDisplaying: React.Dispatch<React.SetStateAction<any>>
) => {
  const previewTl = gsap.timeline();

  setCurrentlyPreviewing(id);
  currentlyDisplaying !== id &&
    previewTl
      .fromTo(`#preview-card-${id}`, {}, { y: -280, duration: 1, ease: "back" })
      .fromTo(
        `#preview-card-${id}`,
        {},
        { opacity: 1, duration: 1, ease: "power2.out" },
        "=<"
      );
};

export const reversePreview = (
  id: string,
  currentlyPreviewing: string | null,
  setCurrentlyPreviewing: React.Dispatch<React.SetStateAction<any>>,
  currentlyDisplaying: string | null,
  setCurrentlyDisplaying: React.Dispatch<React.SetStateAction<any>>
) => {
  const reversePreviewTl = gsap.timeline();

  setCurrentlyPreviewing(id);
  currentlyDisplaying !== id &&
    reversePreviewTl
      .fromTo(
        `#preview-card-${id}`,
        { y: -280 },
        { y: -35, duration: 1, ease: "back" }
      )
      .fromTo(
        `#preview-card-${id}`,
        {},
        { opacity: 0, duration: 1, ease: "linear" },
        "=<"
      );
};
