import { FC } from "react";
import TechCard from "./Card/TechCard";

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
        What I know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechCard
          title="Frontend"
          classaName="bg-[#4f91f2]"
          tech={[
            "HTML",
            "CSS",
            "Material UI",
            "Javascript",
            "Typescript",
            "React Js",
            "Next Js 14",
          ]}
        />
        <TechCard
          title="Backend"
          classaName="bg-[#f37c36]"
          tech={["Node Js", "Nest Js", "Express Js", "Next Auth", "Bull Queue"]}
        />
        <TechCard
          title="Database"
          classaName="bg-[#e0558a]"
          tech={["MySql", "MongoDB", "PostgreSQL", "Redis"]}
        />
        <TechCard
          title="Devops"
          classaName="bg-[#10c0a2]"
          tech={["Docker", "GIT", "Jenkins", "Sonar", "JIRA", "PLANE"]}
        />
      </div>
    </div>
  );
};

export default TechStack;
