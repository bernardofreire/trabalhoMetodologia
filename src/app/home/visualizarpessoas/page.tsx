import React from 'react'
import NavigationButton from '@/components/template/botao';
import FormInput from '@/components/template/inputText';
import Table from '@/components/template/Table';


export function TableDemo() {
  return (
    <>
      <div className='px-20 '>
        <div className='flex  max-w-sm gap-7 items-end'>
          <FormInput label="Pesquisar" name="pesquisar" placeholder="Digite uma pessoa" />
          <NavigationButton href="/home/cadastrarpessoa/concluido" text="Pesquisar" />
        </div>
        <div className='w-full mt-10'>
          <div >
            <Table />
          </div>
        </div>
      </div>

    </>

  )
}


export default TableDemo