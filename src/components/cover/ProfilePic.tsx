import Image from "next/image";
import { FC } from "react";

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
  return (
    <div className="">
      <div className="h-48 w-48 relative">
        {" "}
        {/* Updated size */}
        <Image
          alt="Ambuj Singh"
          src="/images/myprofile.jpeg"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
