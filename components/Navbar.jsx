"use client";
import { FaUserAstronaut } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { use } from "react";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className=" flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white text-pink-500 shadow sm:items-baseline w-full">
      <Link className="text-xl font-semibold" href={"/"}>
        Home Next App
      </Link>
      <ul>
        {pathname !== "/users" &&(
          <li>
            <Link href={"/users"}>
              <FaUserAstronaut size={25} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
