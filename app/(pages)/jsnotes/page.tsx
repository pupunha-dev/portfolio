import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function JsNotes() {
  return (
    <div className="flex flex-col text-[#fafafa] p-8 space-y-6">

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      <ul>
        <li className="font-black text-xl">Sintaxe Básica</li>
        <li>Variáveis</li>
        <li>Tipos de dados (number, string, boolean, null, undefined)</li>
        <li>Operadores (aritméticos, lógicos e relacionais)</li>
      </ul>

      <ul>
        <li className="font-black text-xl">Estruturas de Controle</li>
        <li>Condicionais (if, else, switch)</li>
        <li>Loops (for, while, do-while)</li>
      </ul>

      <ul>
        <li className="font-black text-xl">Funções</li>
        <li>Declarações</li>
        <li>Funções anônimas</li>
        <li>Arrow Functions</li>
        <li>Parâmetros e Rest/Spread</li>
      </ul>

      <ul>
        <li className="font-black text-xl">Arrays</li>
        <li>Métodos Básicos (pop, push, shift, unshift, slice)</li>
        <li>Métodos Avançados (map, filter, reduce, find)</li>
        <li>Destructuring</li>
      </ul>

      <ul>
        <li className="font-black text-xl">Objetos</li>
        <li>Propriedades e Métodos</li>
        <li>Destructuring</li>
      </ul>
    </div>
  )
}