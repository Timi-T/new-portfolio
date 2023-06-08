import { ReactComponent as ReactIcon } from "../../assets/svg/tools/react-icon.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/tools/nextjs-icon.svg";
import { ReactComponent as HtmlIcon } from "../../assets/svg/tools/html-icon.svg";
import { ReactComponent as CssIcon } from "../../assets/svg/tools/css-icon.svg";
import { ReactComponent as SassIcon } from "../../assets/svg/tools/sass-icon.svg";
import { ReactComponent as GsapIcon } from "../../assets/svg/tools/gsap-icon.svg";
import { ReactComponent as TailwindIcon } from "../../assets/svg/tools/tailwind-icon.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/svg/tools/javascript-icon.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/svg/tools/typescript-icon.svg";

export interface ToolInterface {
  name: string;
  icon: any | null;
  iconType: "svg" | "img";
}

export const tools: ToolInterface[] = [
  {
    name: "React.Js",
    icon: <ReactIcon />,
    iconType: "svg",
  },
  {
    name: "Next.Js",
    icon: <NextIcon className="mt-3 scale-[1.5]" />,
    iconType: "svg",
  },
  {
    name: "JavaScript",
    icon: <JavascriptIcon />,
    iconType: "svg",
  },
  {
    name: "TypeScript",
    icon: <TypescriptIcon className="rounded-[3px]" />,
    iconType: "svg",
  },
  {
    name: "HTML 5",
    icon: <HtmlIcon />,
    iconType: "svg",
  },
  {
    name: "CSS",
    icon: <CssIcon />,
    iconType: "svg",
  },
  {
    name: "SaSS",
    icon: <SassIcon className="mt-1" />,
    iconType: "svg",
  },
  {
    name: "GSAP",
    icon: <GsapIcon />,
    iconType: "svg",
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon className="mt-2" />,
    iconType: "svg",
  },
];
