import Link from "next/link";
import React from "react";
import LogoPrensaSvg from "./LogoPrensaSvg";

const LogoPrensa = () => {
  return (
    <>
      <div className="hidden md:flex flex-grow justify-center col-span-10 md:col-span-3">
        <Link href="/">
          <LogoPrensaSvg width="340" />
        </Link>
      </div>
      <div className="flex md:hidden flex-grow justify-center col-span-10 md:col-span-3">
        <Link href="/">
          <LogoPrensaSvg width="180" />
        </Link>
      </div>
    </>
  );
};

export default LogoPrensa;
