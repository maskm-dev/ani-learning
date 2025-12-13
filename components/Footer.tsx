import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-amber-300">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Logo />
          <span className="ml-3 text-xl">Animation-Learning</span>
        </a>
        <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 Examblocks —
          <a
            href="https://github.com/maskm-dev"
            className="text-gray-900 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @maskm-dev
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <Image
              src="/footers/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
          </a>
          <a className="ml-3 text-gray-500">
            <Image
              src="/footers/github.svg"
              alt="github"
              width={24}
              height={24}
            />
          </a>
          <a className="ml-3 text-gray-500">
            <Image
              src="/footers/logmein.svg"
              alt="linkin"
              width={24}
              height={24}
            />
          </a>
          <a className="ml-3 text-gray-500">
            <Image
              src="/footers/youtube.svg"
              alt="youtube"
              width={24}
              height={24}
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
