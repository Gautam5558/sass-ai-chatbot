import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthButtons from "./auth-buttons";

const Navbar = () => {
  return (
    <nav className="w-full p-5 flex justify-between border-b-[1px] shadow-sm border-black/5">
      <Link href="/" className="flex items-center">
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
        Purchasing Power Parity
      </Link>
      <div className="flex items-center gap-2">
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="/">About</Link>
        <Link href="/">Dashboard</Link>
      </div>
      <AuthButtons />
    </nav>
  );
};

export default Navbar;
