import { HeadersLinks } from "@/components/HeadersLinks";

export default function Home() {
  return (
    <main className={`flex flex-col w-3/5 h-screen mt-16 pt-4`}>
    
      <HeadersLinks url={"/javascript"} description={"Estudos sobre Javascript"} />
      <HeadersLinks url={"/express"} description={"Estudos sobre Express e NodeJS"} />
      <HeadersLinks url={"/arquitetura"} description={"Estudos sobre Padrões de Arquitetura de Software"} />

    </main>
  );
}
