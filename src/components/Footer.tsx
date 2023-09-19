import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-4 text-lightBlue xl:px-24 2xl:px-48">
      <div className="mt-4">
        <div className="flex justify-end px-4 md:px-24">
          <a
            className="mr-4"
            href="https://www.linkedin.com/in/aaron-mullan/"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              width={100}
              height={100}
              alt="LinkedIn"
            />
          </a>
          <a href="https://aaronmullan.com/" rel="noopener noreferrer">
            <Image
              src="/web-page.svg"
              width={100}
              height={100}
              alt="Personal Website"
            />
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <p>&copy; {new Date().getFullYear()} Git Insight</p>
      </div>
    </footer>
  );
};

export default Footer;
