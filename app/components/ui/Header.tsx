import Link from 'next/link'
import React from 'react'
import getMenuSecundario from '../../services/getMenuSecundario'
import Container from '../Container'
import LogoPrensa from '../logos/LogoPrensa'
import Menu from './Menu'
import MenuSecundario from './MenuSecundario'

const Header = async () => {
  const menuSecundario = await getMenuSecundario()
  return (
    <>
      <header className="w-full bg-gray-100 h-12 md:h-24 sticky top-0 items-center flex z-50">
        <Container>
          <div className="grid grid-cols-12 md:grid-cols-9 items-center">
            <Menu />
            <LogoPrensa />
            <div className="flex col-span-1 md:col-span-3 justify-end items-center gap-10">
                <Link href="/suscribite">
                  <span className="hidden md:block font-semibold font-mont border-1 py-1 px-2  border-gray-800 hover:bg-rojoprensa hover:text-white transition-all">
                    Suscribite
                  </span>
                </Link>
              </div>
          </div>
        </Container>
      </header>
      <div className="bg-black">
        <Container>
          <MenuSecundario menuSecundario={menuSecundario} />
        </Container>
      </div>
      <style jsx>{`
        @media screen and (max-height: '650') and (width: '1366') {
          header {
            height: 80px !important;
          }
        }
      `}</style>
    </>
  )
}

export default Header