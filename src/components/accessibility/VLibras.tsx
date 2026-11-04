import Script from "next/script";

/**
 * VLibras (governo federal): traduz o conteúdo da página para Libras. O plugin oficial (7.x) se
 * inicializa sozinho e cria o próprio botão (em shadow DOM) na lateral direita da tela; o script
 * é carregado depois que a página fica ociosa, sem atrasar a primeira pintura.
 */
export function VLibras() {
  return (
    <Script
      src="https://vlibras.gov.br/app/vlibras-plugin.js"
      strategy="lazyOnload"
    />
  );
}
