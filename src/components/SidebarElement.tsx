import React from "react";
import Image from "next/image";

interface SidebarElementProps {
  id: string;
  url: string;
  avatarUrl: string;
  login: string;
}

const SidebarElement: React.FC<SidebarElementProps> = ({
  id,
  url,
  avatarUrl,
  login,
}) => {
  return (
    <li key={id} className="shadow">
      <a
        href={url}
        className="px-1 text-xl text-a11yBlue"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="grid lg:grid-cols-2 gap-2">
          <div className="flex items-center justify-center">
            <Image src={avatarUrl} height={50} width={50} alt={login} />
          </div>
          <div className="flex items-center justify-center">
            <p>{login}</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SidebarElement;
