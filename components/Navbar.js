import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };
  const [user] = useAuthState(auth);
  return (
    <nav className="shadow-sm sticky top-0 w-full z-10 dark:bg-[#032A5D] bg-[#0082EF]">
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
            <div className="flex item-center justify-center md:hidden">
              <button
                className=""
                onClick={() => {
                  showSideMenu();
                }}
              >
                {isSideMenuOpen ? (
                  <CgClose size={40} color="white" />
                ) : (
                  <GiHamburgerMenu size={40} color="white" />
                )}
              </button>
              {isSideMenuOpen ? SideMenu() : ""}
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
                <button onClick={() => auth.signOut()}>
                  <p className="text-white text-xl cursor-pointer dark:hover:text-[#0082EF] hover:text-[#032A5D]">
                    {user.displayName}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function SideMenu() {
  return <MobileNav />;
}
