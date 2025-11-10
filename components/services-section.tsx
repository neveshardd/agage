import Image from "next/image"

export default function ServicesSection() {
  const services = [
    { imageSrc: "/services/construcao.png", title: "Obras Civis" },
    { imageSrc: "/services/estrada.png", title: "Pavimentação" },
    { imageSrc: "/services/escavacao.png", title: "Escavação" },
    { imageSrc: "/services/tecido-impermeavel.png", title: "Impermeabilização" },
    { imageSrc: "/services/trator.png", title: "Terraplenagem" },
    { imageSrc: "/services/pilares.png", title: "Obras de Infraestrutura" },
    { imageSrc: "/services/rio.png", title: "Obras de Contenção" },
    { imageSrc: "/services/canteiro-de-obras.png", title: "Conserva de Estradas" },
    { imageSrc: "/services/drenagem.png", title: "Obras de Drenagem" },
    { imageSrc: "/services/industria.png", title: "Obras Industriais" },
    { imageSrc: "/services/bridge-over-water.png", title: "Obras de Artes Especiais" },
    { imageSrc: "/services/pavimentacao-tatil.png", title: "Tratamento de Estrutura" },
  ]

  return (
    <section className="bg-gray-50 py-24 md:py-32 px-6 text-center" id="servicos">
      {/* Título */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#F59F26]">
          Nossos Serviços
        </h2>
        <div className="w-20 h-[3px] bg-[#F59F26] mx-auto mt-3"></div>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Oferecemos uma ampla gama de serviços para pequenos e grandes projetos,
          com excelência, segurança e inovação em cada detalhe.
        </p>
      </div>

      {/* Grid de serviços */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#1A3767]/10 mb-4 group-hover:bg-[#1A3767]/20 transition-colors duration-300">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={48}
                height={48}
                className="object-contain"
                priority={index < 4}
              />
            </div>
            <h3 className="font-semibold text-[#1A3767] text-lg">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
