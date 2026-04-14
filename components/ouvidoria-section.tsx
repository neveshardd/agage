import Image from "next/image"
import { Handshake, ShieldCheck } from "lucide-react"

export default function OuvidoriaSection() {
  return (
    <section className="w-full bg-[#1A3767] py-16 md:py-24 px-6 overflow-hidden" id="ouvidoria">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Superior Title - Responsive Size */}
        <h2 className="text-white text-3xl md:text-6xl font-semibold mb-10 md:mb-16 uppercase tracking-tight">
          Espaço do colaborador
        </h2>
        
        {/* QR Code Section - Responsive Size */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block relative w-64 h-64 md:w-[600px] md:h-[600px]">
            <Image
              src="/ouvidoria-qrcode.png"
              alt="QR Code Ouvidoria Agage"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Info Cards - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 transition-colors hover:bg-white/10">
            <div className="bg-[#F59F26] p-4 rounded-xl shrink-0 shadow-lg">
              <Handshake className="text-white" size={32} />
            </div>
            <div>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                Aqui você fala diretamente com quem decide na empresa.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 transition-colors hover:bg-white/10">
            <div className="bg-[#F59F26] p-4 rounded-xl shrink-0 shadow-lg">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <div>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
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
