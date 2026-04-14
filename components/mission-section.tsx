import Image from "next/image"

export default function MissionSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-0 py-24 md:pb-32 text-center" id="missao">
      {/* Título */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#F59F26]">
          Missão, Visão e Valores
        </h2>
        <div className="w-20 h-[3px] bg-[#F59F26] mx-auto mt-3"></div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Card 1 - Missão */}
        <div className="group relative rounded-lg overflow-hidden border transition-all duration-500">
          <div className="h-64 overflow-hidden relative">
            <Image
              src="/WhatsApp-Image-2022-09-13-at-18.49.39 (2).jpeg"
              alt="Missão"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl text-start font-semibold text-[#1A3767] mb-4">
              Missão
            </h3>
            <p className="text-gray-700 text-start leading-relaxed">
              Prover soluções de engenharia e montagem industrial de alta complexidade, 
              impulsionando o progresso nacional através de execuções precisas, seguras 
              e pautadas pela excelência técnica.
            </p>
          </div>
        </div>

        {/* Card 2 - Visão */}
        <div className="group relative border rounded-lg overflow-hidden transition-all duration-500">
          <div className="h-64 overflow-hidden relative">
            <Image
              src="/DBNE5418.jpeg"
              alt="Visão"
              fill
              className="object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl text-start font-semibold text-[#1A3767] mb-4">
              Visão
            </h3>
            <p className="text-gray-700 text-start leading-relaxed">
              Consolidar-se como o parceiro mais confiável do setor de infraestrutura no Brasil, 
              sendo referência em inovação, gestão moderna e entrega de resultados excepcionais 
              em cada projeto.
            </p>
          </div>
        </div>

        {/* Card 3 - Valores */}
        <div className="group relative border rounded-lg overflow-hidden transition-all duration-500">
          <div className="h-64 overflow-hidden relative">
            <Image
              src="/WhatsApp-Image-2022-09-13-at-19.03.15-e1663106754639 (2).jpeg"
              alt="Valores"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-start text-[#1A3767] mb-4">
              Valores
            </h3>
            <ul className="text-gray-700 leading-relaxed text-start list-disc list-inside space-y-1">
              <li><strong>Segurança Absoluta:</strong> Integridade das pessoas acima de tudo.</li>
              <li><strong>Foco em Resultados:</strong> Eficiência total e zero retrabalho.</li>
              <li><strong>Ética e Compliance:</strong> Rigorosos padrões de integridade.</li>
              <li><strong>Trabalho Colaborativo:</strong> Valorização do capital humano.</li>
              <li><strong>Respeito ao Cliente:</strong> Agilidade e transparência total.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
