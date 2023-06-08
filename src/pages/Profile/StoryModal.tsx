import React, { useState } from "react";
import { ReactComponent as CancelIcon } from "../../assets/svg/cancel-icon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow-icon.svg";
import { StoryInterface, storyPages } from "./story";
import Modal from "react-modal";

const StoryModal = ({
  storyModalIsOpen,
  setStoryModalIsOpen,
}: {
  storyModalIsOpen: boolean;
  setStoryModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Styles for modal
  const customStyles = {
    overlay: {
      top: 0,
      right: 0,
      bottom: 0,
      opacity: "1",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      opacity: "1",
    },
  };

  const getParentElement = (): HTMLElement => {
    return document.querySelector(".profile")!;
  };

  return (
    <div>
      <Modal
        isOpen={storyModalIsOpen}
        onRequestClose={() => setStoryModalIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        contentLabel="Pause Project Modal"
        overlayClassName={`left-0 absolute bg-[#00000080]`}
        className="absolute bg-white w-[75%] max-w-[1000px] opacity-[1] h-[70vh] max-h-[600px] text-black"
        parentSelector={getParentElement}
      >
        <div className="w-full relative h-full flex flex-col justify-between px-5 md:px-8 py-7 gap-5">
          <div className="w-full absolute flex justify-end items-center cancel-btn">
            <button onClick={() => setStoryModalIsOpen(false)}>
              <CancelIcon />
            </button>
          </div>
          <div className="self-center mt-10 max-w-[700px] overflow-scroll">
            {
              <div>
                <h2 className="text-[22px] font-[600] uppercase">
                  {storyPages[currentPage].title}
                </h2>
                <p className="mt-5">{storyPages[currentPage].text}</p>
              </div>
            }
          </div>
          <div className="w-full">
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (currentPage - 1 < 0) {
                    setCurrentPage(2);
                  } else {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              >
                <ArrowIcon className="-rotate-[180deg]" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (currentPage + 1 === storyPages.length) {
                    setCurrentPage(0);
                  } else {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                <ArrowIcon />
              </button>
            </div>
            <div className="relative w-full flex items-center justify-center">
              <p className="">
                <span
                  className={`font-[900] text-[30px] ${
                    currentPage + 1 !== 1 && "text-[grey]"
                  }`}
                >
                  .
                </span>
                <span
                  className={`font-[900] text-[30px] ${
                    currentPage + 1 !== 2 && "text-[grey]"
                  }`}
                >
                  .
                </span>
                <span
                  className={`font-[900] text-[30px] ${
                    currentPage + 1 !== 3 && "text-[grey]"
                  }`}
                >
                  .
                </span>
              </p>
              <p className="absolute right-0 text-[14px]">
                {currentPage + 1} / {storyPages.length}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StoryModal;
