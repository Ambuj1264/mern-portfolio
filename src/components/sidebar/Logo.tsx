import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className="hidden lg:flex gap-2 p-5 pt-0">
      {/* Close (Red) */}
      <div className="h-4 w-4 bg-red-500 rounded-full"></div>
      {/* Minimize (Yellow) */}
      <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
      {/* Maximize (Green) */}
      <div className="h-4 w-4 bg-green-500 rounded-full"></div>
    </div>
  );
};

export default Logo;
