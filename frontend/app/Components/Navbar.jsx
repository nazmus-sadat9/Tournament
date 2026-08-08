import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center bg-transparent absolute left-0 top-0">
      <div className="w-[80%] bg-[#121212] flex text-[#fff] justify-evenly py-[2%]">
        <Link href="/">Home</Link>
        <Link href="/Teams">Teams</Link>
        <Link href="/Register">Register</Link>
      </div>
    </div>
  )
}

export default Navbar;
