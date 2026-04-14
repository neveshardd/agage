import Image from "next/image"
import { Handshake, ShieldCheck } from "lucide-react"

export default function OuvidoriaSection() {
  return (
    <section className="w-full bg-[#1A3767] py-12 md:py-16 px-6 overflow-hidden" id="ouvidoria">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Superior Title - Tighter spacing */}
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-6 md:mb-8 uppercase tracking-tight">
          Espaço do colaborador
        </h2>
        
        {/* QR Code Section - Tighter spacing and slightly smaller desktop size */}
        <div className="mb-8 md:mb-10">
          <div className="inline-block relative w-64 h-64 md:w-[450px] md:h-[450px]">
            <Image
              src="/ouvidoria-qrcode.png"
              alt="QR Code Ouvidoria Agage"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Info Cards - Maximum width constraint for better vertical balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10 transition-colors hover:bg-white/10">
            <div className="bg-[#F59F26] p-3 rounded-xl shrink-0 shadow-lg">
              <Handshake className="text-white" size={28} />
            </div>
            <div>
              <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                Aqui você fala diretamente com quem decide na empresa.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10 transition-colors hover:bg-white/10">
            <div className="bg-[#F59F26] p-3 rounded-xl shrink-0 shadow-lg">
              <ShieldCheck className="text-white" size={28} />
            </div>
            <div>
              <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                O canal de ouvidoria conta com a tecnologia de criptografia de ponta a ponta, 
                que <span className="font-bold text-[#F59F26]">GARANTE O ANONIMATO</span> de quem denuncia.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
