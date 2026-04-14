import Image from "next/image"
import { Handshake, ShieldCheck } from "lucide-react"

export default function OuvidoriaSection() {
  return (
    <section className="w-full bg-[#1A3767] py-8 md:py-12 px-6 overflow-hidden" id="ouvidoria">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Superior Title - Adjusted spacing */}
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-6 md:mb-10 uppercase tracking-wide">
          Espaço do colaborador
        </h2>
        
        {/* QR Code/Logo Section - Balanced size and spacing */}
        <div className="w-full max-w-4xl flex justify-center mb-8 md:mb-12">
          <div className="relative w-full h-48 md:h-64">
            <Image
              src="/ouvidoria-qrcode.png"
              alt="Ouvidoria e Denúncia QR Code"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Info Cards - Tightened spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10">
            <div className="bg-[#F59F26] p-3 rounded-xl shrink-0 shadow-lg">
              <Handshake className="text-white" size={28} />
            </div>
            <div>
              <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                Aqui você fala diretamente com quem decide na empresa.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10">
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
