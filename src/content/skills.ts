import Bootstrap from "../components/Icons/Bootstrap";
import CSS from "../components/Icons/Css";
import HTML from "../components/Icons/Html";
import JavaScript from "../components/Icons/JavaScript";
import Motion from "../components/Icons/Motion";
import Reacts from "../components/Icons/React";
import Redux from "../components/Icons/Redux";
import TailwindCSS from "../components/Icons/TailwindCSS";
import TypeScript from "../components/Icons/TypeScript";
import type { IconProps } from "../types/icon";

export type SkillProps = {
  id: number;
  name: string;
  Icon: React.FC<IconProps>;
};

export const skills: SkillProps[] = [
  { id: 1, name: "JavaScript", Icon: JavaScript },
  { id: 2, name: "TypeScript", Icon: TypeScript },
  { id: 3, name: "React", Icon: Reacts },
  { id: 4, name: "React Native", Icon: Reacts },
  { id: 5, name: "HTML", Icon: HTML },
  { id: 6, name: "CSS", Icon: CSS },
  { id: 7, name: "Tailwind CSS", Icon: TailwindCSS },
  { id: 8, name: "Bootstrap", Icon: Bootstrap },
  { id: 9, name: "Motion", Icon: Motion },
  { id: 10, name: "Redux", Icon: Redux },
];
