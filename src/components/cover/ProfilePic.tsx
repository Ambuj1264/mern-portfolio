import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Ambuj Singh"
                src="/images/profilePic.jpeg"
                height={100}
                width={120}
                className="object-cover border-4 border-white rounded-full shadow-md h-44"
            />
        </div>
    );
};

export default ProfilePic;
