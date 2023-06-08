import "./nav.scss";
import { ReactComponent as HomeIcon } from "../../assets/svg/home-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user-icon.svg";
import { ReactComponent as PortfolioIcon } from "../../assets/svg/portfolio-icon.svg";
import { ReactComponent as BlogIcon } from "../../assets/svg/blog-icon.svg";
import { ReactComponent as ContactIcon } from "../../assets/svg/contact-icon.svg";
import { slidePage } from "../../animations/pageSlider";
import { usePage } from "../../contexts/PageContext";

export type PageId =
  | "home-page-1"
  | "profile-page-1"
  | "portfolio-page-1"
  | "blog-page-1"
  | "contact-page-1";

const Nav = (): JSX.Element => {
  const { activePage, setActivePage } = usePage();

  return (
    <div className="nav-controls">
      <button
        className={`control control-1 ${
          activePage === "home-page-1" && "active-btn"
        }`}
        data-id="home-page-1"
        onClick={() => {
          slidePage(activePage, "home-page-1");
          setActivePage("home-page-1");
        }}
      >
        <HomeIcon className="scale-[0.4]" />
      </button>
      <button
        className={`control control-2 ${
          activePage === "profile-page-1" && "active-btn"
        }`}
        data-id="profile-page-1"
        onClick={() => {
          slidePage(activePage, "profile-page-1");
          setActivePage("profile-page-1");
        }}
      >
        <UserIcon className="scale-[0.4]" />
      </button>
      <button
        className={`control control-3 ${
          activePage === "portfolio-page-1" && "active-btn"
        }`}
        data-id="portfolio-page-1"
        onClick={() => {
          slidePage(activePage, "portfolio-page-1");
          setActivePage("portfolio-page-1");
        }}
      >
        <PortfolioIcon className="scale-[0.4]" />
      </button>
      <button
        className={`control control-4 ${
          activePage === "blog-page-1" && "active-btn"
        }`}
        data-id="blog-page-1"
        onClick={() => {
          slidePage(activePage, "blog-page-1");
          setActivePage("blog-page-1");
        }}
      >
        <BlogIcon className="scale-[0.4]" />
      </button>
      <button
        className={`control control-5 ${
          activePage === "contact-page-1" && "active-btn"
        }`}
        data-id="contact-page-1"
        onClick={() => {
          slidePage(activePage, "contact-page-1");
          setActivePage("contact-page-1");
        }}
      >
        <ContactIcon className="scale-[0.4]" />
      </button>
    </div>
  );
};

export default Nav;
