import Link from "next/link";
import { FC } from "react";
import Button from "../ui/Button";
import { Instagram } from "lucide-react";

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
  return (
    <div className="text-3xl flex flex-col font-bold text-highlight">
      Ambuj Singh
      <div className="text-sm font-thin flex justify-between items-center">
        <Link
          className="block md:hidden"
          href="https://instagram.com/heyambujsingh"
          target="_blank"
        >
          <Button variant="primary" sizes={"iconOnly"}>
            <Instagram />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileName;
