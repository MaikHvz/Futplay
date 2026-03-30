"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Sparkles,
  PlayCircle,
  CreditCard,
  HelpCircle,
  LogIn,
  UserPlus,
  ChevronLeft,
} from "lucide-react"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  return (
    
    <aside
      className={`
        bg-[#1f4b7a] text-white
        h-screen fixed flex flex-col
        transition-[width] duration-300 ease-in-out

        <!-- si is open es true, usa el width 64 sino el 20, el signo ? indica que trabajaras como con un if 
        donde el primer valor es si fuera true y el seguno lo tomaria si fuera false.
        el use state comienza por defecto con true, por lo tanto comienza con open, que seria true  y por lo tanto w/64-->
        
        ${isOpen ? "w-64" : "w-20"}
        
      `}
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 p-4 min-w-0">
        <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold shrink-0">
          F
        </div>

        <span
          className={`
            text-xl font-bold whitespace-nowrap overflow-hidden
            transition-all duration-300
            ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}
          `}
        >
          FUTPLAY
        </span>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-2 space-y-2">
        <Item href="/" icon={<Home />} text="Inicio" isOpen={isOpen} active={pathname === "/"} />
        <Item href="/caracteristicas" icon={<Sparkles />} text="Caracteristicas" isOpen={isOpen} active={pathname === "/caracteristicas"} />
        <Item href="/capsulas" icon={<PlayCircle />} text="Capsulas" isOpen={isOpen} active={pathname === "/capsulas"} />
        <Item href="/planes" icon={<CreditCard />} text="Planes" isOpen={isOpen} active={pathname === "/planes"} />
        <Item href="/contacto" icon={<HelpCircle />} text="Contacto" isOpen={isOpen} active={pathname === "/contacto"} />
      </nav>

      {/* FOOTER */}
      <div className="p-3 space-y-3">
        {/*si el sidebar esta abierto muestra el texto del boton, si esta cerrado solo muestra el icono*/}
        <Button icon={<LogIn size={18} />} text="Iniciar Sesión" isOpen={isOpen} outlined />
        <Button icon={<UserPlus size={18} />} text="Registrarse" isOpen={isOpen} primary />


            {/*cambia el estado del usestate de isOpen  y de ahi reaccionan todos los  demas elementos booleanos*/}
        <button
        
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-2 bg-white/10 rounded-lg p-2 justify-center"
        >
          <ChevronLeft
            className={`transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`}
          />

          <span
            className={`
              overflow-hidden whitespace-nowrap
              transition-all duration-300
              ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}
            `}
          >
            Colapsar
          </span>
        </button>
      </div>
    </aside>
  )
}


function Item({
  icon,
  text,
  isOpen,
  href,
  active,
}: {
  icon: React.ReactNode
  text: string
  isOpen: boolean
  href: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 p-3 rounded-lg
        transition-colors duration-200
        ${active ? "bg-white/20" : "hover:bg-white/10"}
      `}
    >
      <div className="flex justify-center w-6 shrink-0">
        {icon}
      </div>

      <span
        className={`
          whitespace-nowrap overflow-hidden
          transition-all duration-300
          ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}
        `}
      >
        {text}
      </span>
    </Link>
  )
}


function Button({
  icon,
  text,
  isOpen,
  primary,
  outlined,
}: {
  icon: React.ReactNode
  text: string
  isOpen: boolean
  primary?: boolean
  outlined?: boolean
}) {
  return (
    <button
      className={`
        w-full flex items-center gap-2 rounded-lg p-2 justify-center
        transition-all duration-300
        ${primary ? "bg-orange-500" : ""}
        ${outlined ? "border border-white/30" : ""}
      `}
    >
      {icon}

      <span
        className={`
          whitespace-nowrap overflow-hidden
          transition-all duration-300
          ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}
        `}
      >
        {text}
      </span>
    </button>
  )
}