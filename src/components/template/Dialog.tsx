import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Bttn from '@/components/template/botao';
import FormSelect from '@/components/template/inputSelect';


export default function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Bttn text="Criar nova Atividade" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Adicionar Atividade</DialogTitle>
                    <DialogDescription>
                        Aqui voce pode registrar uma nova atividade.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="atividade" className="text-right">
                            Atividade
                        </Label>
                        <Input
                            id="atividade"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="turno" className="text-right">
                            Turno
                        </Label>

                        <div className="col-span-3">
                            <FormSelect
                                name="atividade"
                                placeholder="Selecione o turno"
                                items={[
                                    { value: "dia", label: "Dia" },
                                    { value: "tarde", label: "Tarde" },
                                    { value: "noite", label: "Noite" }
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
