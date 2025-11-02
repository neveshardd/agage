import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LucideLanguages } from "lucide-react";

export default function LanguageDialog(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-none text-current bg-transparent items-start hover:text-[#F59F26] transition-colors duration-100 justify-between flex flex-col h-full w-full cursor-pointer hover:bg-transparent">
          <LucideLanguages size={38}/>
          <p className="uppercase font-semibold">Language</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escolha um Idioma</DialogTitle>
        </DialogHeader> 
        <DialogDescription>As linguagens serão alteradas automaticamente.</DialogDescription>
        <p>Portugues - BR</p>
      </DialogContent>
    </Dialog>
  )
}