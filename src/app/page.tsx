import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        <div className="flex items-center justify-around  w-1/2 max-w-full h-72">
          <div className="p-6">
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={400}
              height={400}
              draggable={false}
            />
          </div>
          <div>
            <Image
              src="/images/vetor.png"
              alt="Picture of the author"
              width={5}
              height={5}
              draggable={false}
            />
          </div>
          <div className="p-6 flex flex-col justify-around h-full">
            <h1>Login</h1>
            <form className="flex flex-col space-y-2 items-center justify-between">
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
