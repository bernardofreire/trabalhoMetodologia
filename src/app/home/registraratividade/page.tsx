import React from 'react'
import FormSelect from '@/components/template/inputSelect';
import Dialog from '@/components/template/Dialog';
import Table from '@/components/template/Table';
import { Label } from '@/components/ui/label';

const RegistrarAtividade = () => {
  return (
    <>
      <div className='px-20 '>
        <div className='flex  max-w-sm gap-7 items-end'>
          <Dialog/>
          <FormSelect
            label="Grau de parentesco"
            name="atividade"
            placeholder="Selecione o grau"
            items={[
              { value: "jiuJitsu", label: "Jiu Jitsu" },
              { value: "muayThai", label: "Muay Thai" },
              { value: "boxe", label: "Boxe" }
            ]}
          />
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

export default RegistrarAtividade