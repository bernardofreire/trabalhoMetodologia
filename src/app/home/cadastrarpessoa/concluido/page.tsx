'use client';

import React from 'react';
import Image from 'next/image';
import NavigationButton from '@/components/template/botao';
import { useCadastro } from '@/context/CadastroContext';
import { useRouter } from 'next/navigation'; // Hook para navegação

const Concluido = () => {
  const { cadastroData, clearCadastroData } = useCadastro(); // Pega os dados e a função para limpar
  const router = useRouter(); // Instância do hook de navegação

  const handleConfirmClick = () => {
    // Log dos dados inseridos
    console.log('Dados inseridos nas etapas anteriores:', cadastroData);
    console.log('Nome:', cadastroData.dadosBasicos.primeiroNome);

    // Limpa os dados do cadastro
    clearCadastroData();

    // Redireciona para a página inicial dos dados básicos
    router.push('/home/cadastrarpessoa/dadosbasicos');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6">
        <Image
          src="/images/concluido.svg"
          alt="Imagem de confirmação"
          width={180}
          height={180}
          draggable={false}
        />
      </div>
      <div>
        {/* Usando o onClick no botão */}
        <NavigationButton text="Confirmar" onClick={handleConfirmClick} />
      </div>
    </div>
  );
};

export default Concluido;
