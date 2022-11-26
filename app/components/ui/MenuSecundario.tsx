import Link from "next/link";
import { CamposMenuSecundario } from "../../interfaces/CamposMenuSecundario";
import BuscadorHeader from "./BuscadorHeader";

function MenuSecundario({ menuSecundario }: CamposMenuSecundario) {
  
  return (
    <>
      <nav className="menu-secundario hidden md:flex justify-between items-center py-2">
        <ul className="flex">
          <li>
            <Link href="/ultimas-noticias">
              <span className="font-mont text-white hover:underline"> Últimas noticias </span>
            </Link>
          </li>
          {menuSecundario?.nodes.map((nodes) => (
            <li className="flex" key={nodes.id}>
              <a
                href={nodes.path}
                className="font-mont text-white hover:underline"
              >
                {nodes.label}
              </a>
            </li>
          ))}
        </ul>
        <BuscadorHeader />
      </nav>
      <style jsx>{`
        .menu-secundario a {
          font-weight: 300;
          font-size: 15px;
        }
        .menu-secundario li:first-child a {
          font-weight: 500;
        }
        .menu-secundario li:after {
          content: "";
          display: block;
          width: 1px;
          background-color: var(--rojoprensa);
          margin: 0 10px;
        }
        .menu-secundario li:last-child:after {
          display: none;
        }
      `}</style>
    </>
  );
}

export default MenuSecundario;
