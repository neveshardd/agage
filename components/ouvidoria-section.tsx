import Image from "next/image"
import { Handshake, ShieldCheck } from "lucide-react"

export default function OuvidoriaSection() {
  return (
    <section className="w-full bg-[#1A3767] py-20 px-6 overflow-hidden" id="ouvidoria">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* QR Code Section */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-bold mb-8 uppercase tracking-wider">
            Canal de Ouvidoria
          </h2>
          <div className="bg-white p-4 rounded-2xl inline-block shadow-2xl">
            <Image
              src="/ouvidoria-qrcode.png"
              alt="QR Code Ouvidoria Agage"
              width={220}
              height={220}
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="text-white/60 text-sm mt-4 font-medium uppercase tracking-widest">
            Aponte a câmera para denunciar
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mt-6">
          <div className="flex items-start gap-4 text-start bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="bg-[#F59F26] p-3 rounded-lg flex-shrink-0">
              <Handshake className="text-white" size={32} />
            </div>
            <div>
              <p className="text-white text-lg leading-relaxed font-medium">
                Aqui você fala diretamente com quem decide na empresa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-start bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="bg-[#F59F26] p-3 rounded-lg flex-shrink-0">
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
