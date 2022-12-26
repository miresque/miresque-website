import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const NavBar = () => {
  const [navVisibility, setNavVisibility] = useState(false);
  const refOne = useRef(null);
  const refTwo = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        !refOne.current?.contains(e.target) &&
        !refTwo.current?.contains(e.target)
      ) {
        setNavVisibility(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNav = () => {
    setNavVisibility(!navVisibility);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto h-full px-4">
        <Image
          src="/assets/miresque-logo.svg"
          alt="logo"
          width={40}
          height={40}
        />
        <nav>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase border-b border-[#FAF9F6] hover:border-b hover:border-[#33333315]">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-[#FAF9F6] hover:border-b hover:border-[#33333315]">
              <Link href="/">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-[#FAF9F6] hover:border-b hover:border-[#33333315]">
              <Link href="/">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-[#FAF9F6] hover:border-b hover:border-[#33333315]">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div
            ref={refTwo}
            onClick={handleNav}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </nav>
      </div>
      {/* Mobile NavBar Menu */}
      <div
        className={
          navVisibility
            ? "fixed left-0 top-0 w-full h-screen bg-black/60 duration-500 md:hidden"
            : ""
        }
      >
        <aside
          ref={refOne}
          className={
            navVisibility
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FAF9F6] p-8 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-8 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between border-b">
            <Image
              src="/assets/miresque-logo.svg"
              alt="logo"
              width={35}
              height={35}
              className="mb-1"
            />
            <AiOutlineClose
              onClick={handleNav}
              size={20}
              className="cursor-pointer"
            />
          </div>
          <nav className="flex flex-col">
            <ul className="mt-1">
              <li className="py-4 text-sm font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="py-4 text-sm font-semibold">
                <Link href="/">Projects</Link>
              </li>
              <li className="py-4 text-sm font-semibold">
                <Link href="/">About</Link>
              </li>
              <li className="py-4 text-sm font-semibold">
                <Link href="/">Contact</Link>
              </li>
            </ul>

            <div className="mt-20">
              <p className="uppercase tracking-widest font-bold">
                Let&apos;s connect
              </p>
              <ul className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <li className="button-styled p-3 md:py-1 md:px-3">
                  <FaLinkedin />
                </li>
                <li className="button-styled p-3 md:py-1 md:px-3">
                  <IoIosMail />
                </li>
                <li className="button-styled p-3 md:py-1 md:px-3">
                  <FaDiscord />
                </li>
                <li className="button-styled p-3 md:py-1 md:px-3">
                  <FaGithub />
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default NavBar;
