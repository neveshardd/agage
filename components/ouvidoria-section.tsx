import Image from "next/image"
import { Handshake, ShieldCheck } from "lucide-react"

export default function OuvidoriaSection() {
  return (
    <section className="w-full bg-[#1A3767] py-20 px-6 overflow-hidden" id="ouvidoria">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-white text-6xl font-semibold mb-10 uppercase">
          Espaço do colaborador
        </h2>
        
        {/* QR Code Section */}
        <div className="mb-12">
          <div className="inline-block relative">
            <Image
              src="/ouvidoria-qrcode.png"
              alt="QR Code Ouvidoria Agage"
              width={600}
              height={600}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mt-6">
          <div className="flex items-start gap-4 text-start bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="bg-[#F59F26] p-3 rounded-lg shrink-0">
              <Handshake className="text-white" size={32} />
            </div>
            <div>
              <p className="text-white text-lg leading-relaxed font-medium">
                Aqui você fala diretamente com quem decide na empresa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-start bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="bg-[#F59F26] p-3 rounded-lg shrink-0">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <div>
              <p className="text-white text-lg leading-relaxed font-medium">
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
