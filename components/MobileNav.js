import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import Link from "next/link";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const MobileNav = () => {
  const [user] = useAuthState(auth);
  return (
    <main className="absolute top-10 -right-2 z-10">
      <div className="w-[100vw] mt-5 bg-[#032A5D] grid">
        <section className=" border-b-2 border-white">
          <div className="flex flex-col items-center justify-center">
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
        </section>
      </div>
    </main>
  );
};

export default MobileNav;
