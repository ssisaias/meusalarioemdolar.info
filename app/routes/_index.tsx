import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
  const [salary, setSalary] = useState("6867");
  const dollarValue = (Number(salary) / 5.5).toFixed(0); // Simple fixed conversion for demo

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="text-center space-y-8">
          <h1 className="text-4xl font-bold">Meu Salário em Reais</h1>

           {/* Salary Input */}
          <div className="bg-gray-500 text-white p-6 border-2 border-blue-500">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-5xl font-bold">BRL</span>
              <Input 
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="text-5xl font-bold bg-transparent border-none text-white text-center w-48 focus:outline-none"
              />
            </div>
          </div>

          {/* Dollar Conversion */}
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Meu Salário em Dólar</h2>
            <p className="text-5xl font-bold">USD {dollarValue}</p>
          </div>
        </section>

        {/* "Você sabia?" Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-8">Você sabia?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black text-white rounded-xl p-8">
            {/* Card 1 */}
            <Card className="bg-transparent border-none text-yellow-400">
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
            <Card className="bg-transparent border-none text-yellow-400">
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
            <Card className="bg-transparent border-none text-yellow-400">
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
        <nav className="flex justify-end space-x-6 text-lg">
          <a href="#" className="hover:underline">A Anatomia do Estado</a>
          <a href="#" className="hover:underline">Meu Salário em BTC</a>
          <a href="#" className="hover:underline">Fontes</a>
          <a href="#" className="hover:underline">FAQ</a>
        </nav>
      </div>
    </div>
  );
}
