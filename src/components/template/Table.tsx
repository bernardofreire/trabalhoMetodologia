import {
  Table as RadixTable,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Pessoa {
  id: string; // ou o tipo do seu ID
  primeiroNome: string;
  ultimoNome: string;
  // adicione outros campos que você possui
}

interface TableProps {
  pessoas: Pessoa[];
}

const Table = ({ pessoas }: TableProps) => {
  return (
    <RadixTable>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Sobrenome</TableHead>
          {/* Adicione outros cabeçalhos conforme necessário */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {pessoas.map((pessoa) => (
          <TableRow key={pessoa.id}>
            <TableCell>{pessoa.primeiroNome}</TableCell>
            <TableCell>{pessoa.ultimoNome}</TableCell>
            {/* Adicione outros campos conforme necessário */}
          </TableRow>
        ))}
      </TableBody>
    </RadixTable>
  );
};

export default Table;
