import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function LanguageDialog(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-none text-white bg-transparent items-start justify-between flex flex-col h-12 w-full cursor-pointer hover:bg-transparent hover:text-white">
          <img src="/language.png" alt="Language" className="w-10" />
          <p className="uppercase font-semibold">Language</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escolha um Idioma</DialogTitle>
        </DialogHeader>
        <p>Portugues - BR</p>
      </DialogContent>
    </Dialog>
  )
}