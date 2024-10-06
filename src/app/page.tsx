import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-4xl h-auto p-6">          <div className="p-6">
          <div className="mb-6 md:mb-0 md:p-6">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={300} // Reduza um pouco a largura para telas pequenas
              height={300}
              draggable={false}
              className="mx-auto"
            />
          </div>
        </div>
          <div className="hidden md:block">
            <Image
              src="/images/vetor.png"
              alt="Picture of the author"
              width={5}
              height={5}
              draggable={false}
            />
          </div>
          <div className="p-6 flex flex-col gap-7 justify-be h-full">
            <h1>Login</h1>
            <form className="flex flex-col w-72 md:w-96 lg:w-72 space-y-2 items-center justify-between">
              <Input className="focus:border-purple-800" name="email" placeholder="Digite o email"></Input>
              <Input className="focus:border-purple-800" name="senha" type="password" placeholder="Digite a senha"></Input>
            </form>
            <Link href="/home/cadastrarpessoa/dadosbasicos">
              <Button className="bg-purple-800 w-full">Conectar</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
