import { Anchor, Building2, Factory, Hammer, Mountain, Network, RefreshCcw, Ruler, ShieldCheck, Waves } from "lucide-react"
import { BiCube } from "react-icons/bi"
import {
  FaRoad,
} from "react-icons/fa"

export default function ServicesSection() {
  const services = [
    {
      icon: <Building2 size={36} />,
      title: "Obras Civis",
    },
    {
      icon: <FaRoad size={36} />,
      title: "Pavimentação",
    },
    {
      icon: <Hammer size={36} />,
      title: "Escavação",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Impermeabilização",
    },
    {
      icon: <Mountain size={36} />,
      title: "Terraplenagem",
    },
    {
      icon: <Network size={36} />,
      title: "Obras de Infraestrutura",
    },
    {
      icon: <Anchor size={36} />,
      title: "Obras de Contenção",
    },
    {
      icon: <RefreshCcw size={36} />,
      title: "Conserva de Estradas",
    },
    {
      icon: <Waves size={36} />,
      title: "Obras de Drenagem",
    },
    {
      icon: <Factory size={36} />,
      title: "Obras Industriais",
    },
    {
      icon: <Ruler size={36} />,
      title: "Obras de Artes Especiais",
    },
    {
      icon: <BiCube size={36} />,
      title: "Tratamento de Estrutura",
    },
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
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#1A3767]/10 text-[#1A3767] mb-4 group-hover:bg-[#1A3767] group-hover:text-white transition-colors duration-300">
              {service.icon}
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
