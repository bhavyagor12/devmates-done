import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10 dark:bg-[#032A5D] bg-[#0082EF]">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/home">
                  <h1 className=" font-bold text-3xl cursor-pointer text-white">
                    Dev
                    <span className="dark:text-[#0082EF] text-[#032A5D]">
                      Mates
                    </span>
                  </h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/profile">
                    <p className="text-white text-xl cursor-pointer dark:hover:text-[#0082EF] hover:text-[#032A5D]">
                      Profile
                    </p>
                  </Link>
                  <Link href="/projects">
                    <p className="text-white text-xl cursor-pointer dark:hover:text-[#0082EF] hover:text-[#032A5D]">
                      Projects
                    </p>
                  </Link>
                  <Link href="/chat">
                    <p className="text-white text-xl cursor-pointer dark:hover:text-[#0082EF] hover:text-[#032A5D]">
                      Chat
                    </p>
                  </Link>
                  <Link href="/newsPage">
                    <p className="text-white text-xl cursor-pointer dark:hover:text-[#0082EF] hover:text-[#032A5D]">
                      News
                    </p>
                  </Link>
                  <Link href="/login">
                    <p className="text-white text-xl cursor-pointer dark:hover:text-[#0082EF] hover:text-[#032A5D]">
                      Login
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
