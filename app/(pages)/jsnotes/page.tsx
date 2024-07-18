import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion"
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"


const jsThemes = [
  {
    tag: 'item-1', title: 'Sintaxe Básica', content: [
      {theme: 'Variáveis', subTheme:''},
      {theme: 'Tipos de Dados',subTheme:''},
      {theme: 'Operadores', subTheme:''}]},
  // {tag: 'item-2', title: 'Estruturas de Controle', content: ['Condicionais','Loops']},
  // {tag: 'item-3', title: 'Funções', content: ['Declarações','Funções anônimas','Arrow Functions','Parâmetros e Rest/Spread']},
  // {tag: 'item-4', title: 'Arrays', content: ['Métodos Básicos','Métodos Avançados','Destructuring']},
  // {tag: 'item-5', title: 'Objetos', content: ['Objetos','Propriedades e Métodos','Destructuring']},
]

export default function JsNotes() {
  return (
    <div className="flex flex-col text-[#fafafa] p-8 space-y-6">

      <h1 className="text-2xl font-black
      
      ">Meu Roadmap</h1>

      <Accordion type="single" collapsible>
      {jsThemes.map((titulo, i)=>(
        <AccordionItem value={titulo.tag} key={i}>
          <AccordionTrigger>{titulo.title}</AccordionTrigger>
          <AccordionContent>
            <ul>
              {titulo.content.map((items, itendId)=>(
                <li key={itendId}>
                  {items} - 
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="text-xs text-green-500">Hover</TooltipTrigger>
                      <TooltipContent>
                        <p>{items}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
      </Accordion>
    </div>
  )
}