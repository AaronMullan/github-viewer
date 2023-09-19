import React from 'react';
import Image from 'next/image';

interface UserDetailProps {
  avatarUrl: string;
  login: string | null;
}

const UserDetail: React.FC<UserDetailProps> = ({ avatarUrl, login }) => {
  return (
    <>
      <Image
        src={avatarUrl}
        width={300}
        height={300}
        alt="user profile image"
      />
      <h2 className="text-3xl">{login}</h2>
    </>
  );
};

export default UserDetail;
