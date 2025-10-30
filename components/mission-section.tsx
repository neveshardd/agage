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
          <div className="h-64 overflow-hidden">
            <img
              src="/WhatsApp-Image-2022-09-13-at-18.49.39 (2).jpeg"
              alt="Missão"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl text-start font-semibold text-[#1A3767] mb-4">
              Missão
            </h3>
            <p className="text-gray-700 text-start leading-relaxed">
              Gerar empregos e contribuir para o desenvolvimento socioeconômico
              do Brasil, atuando com qualidade, credibilidade e compromisso em
              cada obra executada.
            </p>
          </div>
        </div>

        {/* Card 2 - Visão */}
        <div className="group relative border rounded-lg overflow-hidden transition-all duration-500">
          <div className="h-64 overflow-hidden">
            <img
              src="/WhatsApp-Image-2022-09-13-at-18.46.16-e1663107352503 (2).jpeg"
              alt="Visão"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl text-start font-semibold text-[#1A3767] mb-4">
              Visão
            </h3>
            <p className="text-gray-700 text-start leading-relaxed">
              Ser reconhecida nacionalmente como referência em construção civil,
              promovendo inovação, sustentabilidade e excelência em gestão e
              execução de projetos.
            </p>
          </div>
        </div>

        {/* Card 3 - Valores */}
        <div className="group relative border rounded-lg overflow-hidden transition-all duration-500">
          <div className="h-64 overflow-hidden">
            <img
              src="/WhatsApp-Image-2022-09-13-at-19.03.15-e1663106754639 (2).jpeg"
              alt="Valores"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-start text-[#1A3767] mb-4">
              Valores
            </h3>
            <ul className="text-gray-700 leading-relaxed text-start list-disc list-inside space-y-1">
              <li>Satisfação do cliente</li>
              <li>Trabalho em equipe</li>
              <li>Comunicação clara e precisa</li>
              <li>Comprometimento e ética</li>
              <li>Proporcionar prosperidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
