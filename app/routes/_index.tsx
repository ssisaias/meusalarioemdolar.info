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
    <div className="min-h-screen bg-white p-8">
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
                text-4xl text-center w-full h-12 bg-gray-100 border-none focus:border-none focus:outline-none focus:ring-0 focus:yellow-400 focus:ring-yellow-400`}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-black text-white rounded-xl p-4">
            {/* Card 1 */}
            <Card className="bg-transparent border-transparent text-yellow-400 hover:border-solid hover:border-yellow-400">
              <CardHeader>
                <h3 className="text-xl font-bold">Com seu salário:</h3>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  Você leva X meses para comprar um macbook pro 2021, enquanto
                  nos EUA levaria x meses
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-transparent border-transparent text-yellow-400 hover:border-solid hover:border-yellow-400">
              <CardHeader>
                <h3 className="text-xl font-bold">Title 2</h3>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-transparent border-transparent text-yellow-400 hover:border-solid hover:border-yellow-400">
              <CardHeader>
                <h3 className="text-xl font-bold">Title 3</h3>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation Menu */}
        <nav className="flex justify-end space-x-4 text-md">
          <Link
            to="#"
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
            to="#"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            Fontes
          </Link>
          <Link
            to="#"
            className="border-2 rounded-md border-transparent hover:border-solid hover:border-yellow-400 p-1"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </div>
  );
}
