import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Meu Salário em Dólar" },
    { name: "Descubra quanto vale seu salário em dólar" },
    {
      name: "keywords",
      content: "salário, dólar, conversão, brasil, estados unidos",
    },
    {
      name: "description",
      content: "Descubra quanto vale seu salário em dólar",
    },
  ];
};

export default function Index() {
  const [salary, setSalary] = useState("1412");
  const dollarValue = (Number(salary) / 5.5).toFixed(2); // Simple fixed conversion for demo

  return (
    <div className="max-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Meu salário em Reais:</h1>

          {/* Salary Input */}
          <Input
            type="number"
            value={salary}
            max={999999999999999}
            maxLength={15}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Digite seu salário em reais aqui"
            className={` webkit-appearance-none -moz-appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                text-4xl text-center w-full h-12 bg-gray-100 focus-visible:ring-1 focus-visible:ring-yellow-400`}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />

          {/* Dollar Conversion */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Meu salário em Dólar:</h2>
            <p className="text-5xl font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(Number(dollarValue))}
            </p>
          </div>
        </section>

        {/* "Você sabia?" Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-2">Você sabia?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-black text-white rounded-xl p-2">
            {/* Card 1 */}
            <Card className="bg-transparent border-transparent text-yellow-400 hover:border-solid hover:border-yellow-400">
              <CardHeader className="">
                <h3 className="text-xl font-bold">Salário mínimo:</h3>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  No brasil, trabalhando durante 13 meses é possível comprar um
                  MacBook Pro 14 - M3/512gb/8GB, enquanto nos EUA leva
                  aproximadamente 1 mês e meio.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-transparent border-transparent text-yellow-400 hover:border-solid hover:border-yellow-400">
              <CardHeader>
                <h3 className="text-xl font-bold">Poder de Compra</h3>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  Com seu salário você pode comprar 0.1 produtos, enquanto nos EUA
                  poderia comprar x produtos
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-transparent border-transparent text-yellow-400 hover:border-solid hover:border-yellow-400">
              <CardHeader>
                <h3 className="text-xl font-bold">Anuncie aqui:</h3>
              </CardHeader>
              <CardContent>
                <p className="italic">Em breve...</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation Menu */}
        <nav className="grid justify-items-end md:flex md:justify-end md:space-x-4">
          <Link
            to="https://impostometro.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            Impostômetro
          </Link>
          <Link
            to="https://cdn.mises.org/a-anatomia-do-estado_portuguese.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            A Anatomia do Estado
          </Link>
          <Link
            to="#"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            Meu Salário em BTC
          </Link>
          <Link
            to="sources"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            Fontes
          </Link>
          <Link
            to="faq"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </div>
  );
}
