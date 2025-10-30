export default function ProjectsSection() {
  const projects = [
    {
      title: "Reassentamento de Paracatu - MG",
      client: "Fundação Renova / Andrade Gutierrez",
      service: "Execução de residências",
    },
    {
      title: "Base Aérea de Santa Cruz - RJ",
      client: "Engeform Engenharia",
      service: "Montagem e locação de equipamentos",
    },
    {
      title: "Aeroporto Santos Dumont - RJ",
      client: "Engeform Engenharia",
      service: "Implantação e locação de equipamentos",
    },
    {
      title: "Rio Piracicaba - MG",
      client: "EITEC Construções",
      service: "Obra de Drenagem",
    },
    {
      title: "Pontes na GO 116 - GO",
      client: "Vereda Engenharia",
      service: "Execução de pontes",
    },
    {
      title: "Ferrovia Norte e Sul - GO",
      client: "RUMO Logística / Savery",
      service: "Obra de Drenagem",
    },
    {
      title: "Viaduto Perimetral - GO",
      client: "Consórcio BRT Goiânia",
      service: "Execução de concreto armado",
    },
    {
      title: "BR 040 trechos de MG e GO",
      client: "Consórcio OAS",
      service: "Montagem de material e locação de equipamentos",
    },
    {
      title: "Terminal Isidória - GO",
      client: "Consórcio BRT Goiânia",
      service: "Implantação, vedação, vestiário, estrutura e acabamento",
    },
    {
      title: "BRT de Goiânia - GO",
      client: "Consórcio BRT Goiânia",
      service: "Implantação de blocos de fundação, drenagem e locação de armações da obra civil",
    },
    {
      title: "Aeroporto de Macaé - RJ",
      client: "Construtora Comercial e Engenharia",
      service: "Execução e locação de equipamentos",
    },
    {
      title: "Reassentamento de Bento Rodrigues - MG",
      client: "Fundação Renova / HTB",
      service: "Execução de residências",
    },
    {
      title: "Ferrovia de Integração do Centro-Oeste",
      client: "Vereda Duarte Serviços",
      service: "Execução de obras de arte corrente",
    },
    {
      title: "Anápolis - GO",
      client: "Prefeitura de Anápolis",
      service: "Serviço de pavimentação asfáltica e drenagem pluvial",
    },
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-0" id="obras">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#F59F26]">
          Principais Obras
        </h2>
        <div className="w-20 h-[3px] bg-[#F59F26] mx-auto mt-3"></div>
      </div>

      {/* Grade de obras */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-left border-l-4 border-[#F59F26] pl-2 transition-transform"
          >
            <h3 className="text-lg font-semibold text-[#1A3767] mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-[#1A3767]">Cliente: </span>
              {project.client}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-[#1A3767]">Serviço: </span>
              {project.service}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
