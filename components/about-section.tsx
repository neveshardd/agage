import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-24 md:py-32 px-4 md:px-0" id="quemsomos">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">

        <div className="w-full md:w-1/2 relative h-[300px] md:h-[650px]">
          <Image
            src="/quem-somos-v2.jpg"
            alt="Equipe do Grupo Agage em campo"
            fill
            className="object-cover rounded-lg shadow-lg"
            unoptimized
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#F59F26]">
              Quem somos ?
            </h2>
            <div className="w-20 h-[3px] bg-[#F59F26] mx-auto mt-3"></div>
          </div>

          <p className="text-gray-700 leading-relaxed text-justify">
            O <span className="font-semibold text-[#1A3767]">Grupo Agage</span> atua nos segmentos de construção civil e montagem industrial, destacando-se desde 2019 pela participação em contratos relevantes em todo o país. Sua atuação é pautada por uma gestão moderna, alinhada às melhores práticas de mercado e rigorosos padrões de compliance.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            A flexibilidade é um dos pilares da empresa, permitindo a execução de obras de pequeno, médio e grande porte com o mesmo nível de eficiência, qualidade e responsabilidade.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            Com sede no Distrito Federal e presença em diversos estados, como <span className="font-medium">Goiás, Minas Gerais, Mato Grosso, Bahia</span> e <span className="font-medium">Rio de Janeiro</span>, o Grupo Agage está preparado para atuar em todo o território nacional, levando soluções completas e sob medida para cada cliente.
          </p>
        </div>
      </div>
    </section>
  )
}
