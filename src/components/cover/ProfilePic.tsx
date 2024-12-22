import Image from "next/image";
import { FC } from "react";

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
  return (
    <div className="">
      <div className="h-24 w-24 relative">
        <Image
          alt="Ambuj Singh"
          src="/images/IMG_20220415_110542.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
