import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-4">

        <section className="space-y-4">
          <h1 className="text-3xl font-bold">FAQ (PT-Br)</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual a motivação?</AccordionTrigger>
              <AccordionContent>
                <p>1. Ter um local direto para me lembrar sempre a merda que é ganhar em real.</p>
                <p>2. Experimentar o framework Remix e utilizar em produção</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
