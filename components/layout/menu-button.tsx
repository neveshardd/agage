"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import React from "react"

const items = [
  { title: "Início", url: "#hero" },
  { title: "Clientes", url: "#clientes" },
  { title: "Quem somos?", url: "#quemsomos" },
  { title: "Missão e Valores", url: "#missao" },
  { title: "Serviços", url: "#servicos" },
  { title: "Principais Obras", url: "#obras" },
  { title: "Contato", url: "#contato" }
]

export default function MenuButton() {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="border-none h-12 text-white bg-transparent items-start flex flex-col justify-between w-full cursor-pointer hover:bg-transparent hover:text-white">
          <img src="/menu.png" alt="Menu" className="w-10" />
          <p className="uppercase font-semibold">Menu</p>
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 bg-[#1A3767] text-black p-6">
        <SheetHeader>
          <SheetTitle className="opacity-0">Menu de Navegação</SheetTitle>
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
