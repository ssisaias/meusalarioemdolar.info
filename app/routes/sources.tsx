import SourceCitation from "@/components/citations";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";

interface citation {
  citation: string;
  url: string;
}

const citations: citation[] = [
  {
    citation: `Contábeis, P. (2024, January 1). Tabela Salários Mínimos de 1995 a 2024. Portal Contabeis. https://www.contabeis.com.br/tabelas/salario-minimo/`,
    url: "https://www.contabeis.com.br/tabelas/salario-minimo/",
  },
  {
    citation: `Minimum wage | USAGov. (n.d.). Retrieved October 10, 2024, from https://www.usa.gov/minimum-wage`,
    url: "https://www.usa.gov/minimum-wage",
  },
  {
    citation: `Brasil é o país mais caro do mundo para se comprar um MacBook Pro. (n.d.). Mundoconectado. Retrieved October 10, 2024, from https://www.mundoconectado.com.br/apple/brasil-e-o-pais-mais-caro-do-mundo-para-se-comprar-um-macbook-pro/`,
    url: "https://www.mundoconectado.com.br/apple/brasil-e-o-pais-mais-caro-do-mundo-para-se-comprar-um-macbook-pro/",
  },
  {
    citation: `Compare Worldwide Apple MacBook Pro 14 (M3 chip) Prices - Best Deals. (n.d.). Apple Price Compare. Retrieved October 10, 2024, from https://www.applepricecompare.com/macbook-pro/14`,
    url: "https://www.applepricecompare.com/macbook-pro/14",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-4">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">Rationale + Fontes</h1>
          <ul className="list-disc list-inside">
            <li>Salário Mínimo USA (2023): $ 7.25 / hora</li>
            <li>Horas uteis no mês: 160h (40h/Semana * 4)</li>
            <li>Salário Mínimo USA (2023): $ 1,160.00 / Mês</li>
            <li>Salário Mínimo BR (2023): R$ 1.302,00 / Mês</li>
          </ul>
          {citations.map((citation) => (
            <SourceCitation
              key={citation.url}
              citationText={citation.citation}
              citationUrl={citation.url}
            />
          ))}
        </section>

        {/* Navigation Menu */}
        <nav className="flex justify-end space-x-4 text-md">
          <Link
            to="/"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            <ArrowLeftIcon />
          </Link>
        </nav>
      </div>
    </div>
  );
}
