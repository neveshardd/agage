export default function Footer() {
  return (
    <footer className="bg-[#1A3767] text-gray-100 py-16 px-6 md:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Coluna 1 - Logo e descrição */}
        <div>
          <img
            src="/agage.png"
            alt="Construtora Agage"
            className="h-12 mb-6"
          />
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Desde 2019, a <span className="font-semibold text-white">Construtora Agage</span> atua
            em todo o Brasil, entregando obras com eficiência, qualidade e
            responsabilidade social.
          </p>
        </div>

        {/* Coluna 2 - Links úteis */}
        <div>
          <h3 className="text-lg font-semibold text-[#F59F26] mb-4">Links úteis</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#quemsomos" className="hover:text-[#F59F26] transition">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#principais-obras" className="hover:text-[#F59F26] transition">
                Principais Obras
              </a>
            </li>
            <li>
              <a href="#clientes" className="hover:text-[#F59F26] transition">
                Clientes
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-[#F59F26] transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h3 className="text-lg font-semibold text-[#F59F26] mb-4">Contato</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-medium text-white">E-mail:</span>{" "}
              engenharia@agage.com.br
            </li>
            <li>
              <span className="font-medium text-white">Endereço:</span>{" "}
              Edifício Itaú - Parque Ferroviário de Brasília - SIA Trecho 3 - Brasília/DF
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="md:flex justify-between max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Construtora Agage. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          Desenvolvido por{" "}
          <a
            href="https://github.com/neveshardd"
            target="_blank"
            className="text-[#F59F26] hover:underline"
          >
            neveshardd
          </a>
        </p>
      </div>
    </footer>
  )
}
