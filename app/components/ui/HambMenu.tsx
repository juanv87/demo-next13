import { Icon } from "@iconify/react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import HambCSS from "../icons/HambCSS";

interface Props {
  onClickMenu: MouseEventHandler<any>;
}

const HambMenu = ({ onClickMenu }: Props) => {
  return (
    <>
      <div className="hidden md:flex cursor-pointer items-center gap-4">
        <button onClick={onClickMenu}>
          <HambCSS width={35} height={20} weight={3} />
        </button>
        <Link href="/secciones">
          <span className="uppercase">Secciones</span>
        </Link>
      </div>
      <div className="flex md:hidden cursor-pointer">
        <button onClick={onClickMenu}>
          <HambCSS width={25} height={18} weight={2} />
        </button>
      </div>
    </>
  );
};

export default HambMenu;
