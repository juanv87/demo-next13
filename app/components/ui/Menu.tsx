'use client'

import { Icon } from "@iconify/react";
import { useState } from "react";
import HambMenu from "./HambMenu";
import MenuPrincipalStatic from "./MenuPrincipalStatic";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  function onClickMenu() {
    setMenu(!menu);
  }
  return (
    <>
      <div className="flex items-center col-span-1 md:col-span-3">
        <HambMenu onClickMenu={onClickMenu} />

        {menu && (
          <>
            <div className="z-50 h-screen w-60 md:w-80 bg-gray-100 fixed left-0 top-0 pb-3 border-r-2 border-rojoprensa shadow-xX">
              <div className="absolute top-5 right-5 cursor-pointer">
                <Icon
                  onClick={onClickMenu}
                  icon={`${menu ? "icon-park-outline:close" : "feather:menu"}`}
                  color="#222"
                  height="20"
                />
              </div>
              
              <div
                className="flex items-center gap-4 mt-5 md:mt-14 ml-8"
              >
                <div className="w-10 bg-rojoprensa h-1 hidden md:block"></div>
                <h3 className="font-mont text-lg text-gray-800">MENÚ</h3>
              </div>
              <div className="ml-3 md:ml-16">
                <MenuPrincipalStatic />
              </div>
            </div>
            <div
              onClick={onClickMenu}
              className="fixed z-40 h-full w-full bg-black opacity-60 top-0 left-0"
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
