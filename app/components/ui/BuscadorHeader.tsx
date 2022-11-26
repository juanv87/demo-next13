'use client'

import { useRouter } from "next/router";
import LupaHeaderSearch from "../icons/LupaHeaderSearch";

const BuscadorHeader = () => {
  const router = useRouter();
  const handleClickSearch = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const textoBusqueda = (
      document.querySelector("#textoBusqueda") as HTMLInputElement
    ).value;
    router.push(`/buscar?q=${textoBusqueda}`);
  };
  return (
    <form onSubmit={handleClickSearch}>
      <div className="hidden md:flex items-center">
        <input
          className="rounded-l-sm py-1 pl-2 outline-none bg-white"
          type="text"
          name="textoBusqueda"
          id="textoBusqueda"
        />
        <button
          className="bg-white rounded-r-sm p-1"
          onClick={handleClickSearch}
        >
          <LupaHeaderSearch width="24" height="24" />
        </button>
      </div>
    </form>
  )
}

export default BuscadorHeader