export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-24 md:py-32 px-4 md:px-0" id="quemsomos">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">

        <div className="w-full md:w-1/2">
          <img
            src="/samuel-cruz-o8C5SxNCGaw-unsplash.jpg"
            alt="Equipe da Construtora Agage"
            className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg"
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
            Desde 2019, a <span className="font-semibold text-[#1A3767]">Construtora Agage</span> vem atuando nas principais obras do país por meio de uma gestão moderna e uma equipe administrativa atualizada com as necessidades do mercado e práticas de compliance de contratação.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            Flexibilidade é uma constante em nossa conduta, o que nos permite executar com a mesma eficiência, relevância e responsabilidade obras de pequeno, médio e grande porte.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            A empresa atua em todo o território nacional, já estando presente nos estados de <span className="font-medium">Goiás, Distrito Federal, Rio de Janeiro</span> e <span className="font-medium">Minas Gerais</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
