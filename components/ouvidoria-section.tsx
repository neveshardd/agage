import Image from "next/image"
import { Handshake, ShieldCheck } from "lucide-react"

export default function OuvidoriaSection() {
  return (
    <section className="relative w-full bg-[#1A3767] py-24 md:py-32 overflow-hidden" id="ouvidoria">
      {/* Elementos decorativos de fundo para dar textura sem distrair */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-16">
        
        {/* Superior: Título e Intro */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[#F59F26] uppercase tracking-[0.4em] text-xs font-bold">
              Canal de Transparência
            </span>
            <div className="w-12 h-0.5 bg-[#F59F26]"></div>
          </div>
          
          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight">
            OUVIDORIA <span className="text-[#F59F26]">AGAGE</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Um ambiente seguro e estritamente profissional projetado para que cada <br className="hidden md:block" />
            <span className="text-white font-medium italic">voz seja ouvida</span> com total confidencialidade.
          </p>
        </div>

        {/* Central: A Imagem (Integrada e Reduzida) */}
        <div className="relative w-full max-w-lg aspect-21/9 md:aspect-3/1">
          <div className="absolute inset-4 md:inset-0">
            <Image
              src="/ouvidoria-qrcode.png"
              alt="Ouvidoria e Denúncia"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.6)]"
              unoptimized
            />
          </div>
        </div>

        {/* Inferior: Detalhes Técnicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Handshake className="text-[#F59F26]" size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl uppercase tracking-wider">Diretoria</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[280px] mx-auto">
                Canal de comunicação direta com o alto escalão, garantindo que temas críticos cheguem a quem decide.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <ShieldCheck className="text-white/80" size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl uppercase tracking-wider">Anonimato</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[280px] mx-auto">
                Tecnologia de criptografia avançada que assegura o sigilo absoluto e a proteção da sua identidade.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
