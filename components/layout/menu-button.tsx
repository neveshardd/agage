"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import React from "react"
import { FaBars } from "react-icons/fa"

const items = [
  { title: "Início", url: "#hero" },
  { title: "Quem somos?", url: "#quemsomos" },
  { title: "Missão, Visão e Valores", url: "#missao" },
  { title: "Nossos Serviços", url: "#servicos" },
  { title: "Principais Obras", url: "#obras" },
  { title: "Clientes", url: "#clientes" },
  { title: "Contato", url: "#contato" }
]

export default function MenuButton() {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="border-none h-full text-current bg-transparent items-start flex flex-col justify-between w-full cursor-pointer hover:bg-transparent hover:text-[#F59F26] transition-colors duration-100">
          <FaBars size={38}/>
          <p className="uppercase font-semibold">Menu</p>
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 bg-[#1A3767] text-black p-6">
        <SheetHeader>
          <SheetTitle className="hidden">Menu de Navegação</SheetTitle>
          <SheetDescription className="hidden">Descrição do sheet</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="hover:text-white text-[#F59F26] transition uppercase font-semibold"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
