import type { MetaFunction } from "@remix-run/node";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="text-center space-y-8">
          <h1 className="text-4xl font-bold">Meu Salário em Reais</h1>

          {/* Salary Display */}
          <div className="bg-gray-500 text-white p-6">
            <h2 className="text-5xl font-bold">BRL 6867</h2>
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
      </div>
    </div>
  );
}
