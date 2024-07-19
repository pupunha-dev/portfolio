import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Plus, Book } from 'lucide-react';
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link";
import jsDados from "@/app/dados/jsDados";

export default function JsNotes() {
  return (
    <div className="flex flex-col text-[#fafafa] p-8 space-y-6">

      <h1 className="text-2xl font-black">Meu Roadmap</h1>

      <Accordion type="single" collapsible className="max-w-80">
      {jsDados.map((titulo, i)=>(
        <AccordionItem value={titulo.tag} key={i} className="border-0">
          <AccordionTrigger>{titulo.title}</AccordionTrigger>
          <AccordionContent>
            <ul>
              {titulo.content.map((items, itendId)=>(
                <li key={itendId} className="py-2 flex space-x-2 items-center">
                  <div className="flex space-x-1 items-center">
                    <Book size={14}/>
                    <p>{items.theme}</p>
                  </div>
                  {items.subTheme !== null ? (
                    <Dialog>
                    <DialogTrigger asChild>
                      <Button variant='outline2' className="text-white bg-purple-600 p-0 h-4 w-4 rounded-full">
                        <Plus size={10} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader className="space-y-4">
                        <DialogTitle>Detalhes</DialogTitle>
                        <DialogDescription>
                          <div className="flex flex-col space-y-4">
                            <code>{items.subTheme}</code>
                            {items.page !== null ? (
                              // <Link href={items.page}>
                              <Link href='/jsnotes/js-padrao'>
                                <Button>Exemplos</Button>
                              </Link>
                            ) : null}
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  ): null}  
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