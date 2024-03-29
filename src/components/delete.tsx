import * as AlertDialog from '@radix-ui/react-alert-dialog';

interface DeleteProps {
    onDelete: () => void;
}

export function Delete({ onDelete }: DeleteProps) {
    function handleDeleteConfirmed() {
        // Chama a função de exclusão
        onDelete();
    }
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button className="text-slate-50 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 px-[15px] font-medium leading-none outline-none focus:outline-none ">
                    Deseja<span className='text-red-400 ml-1.5'> apagar essa nota</span>?
                </button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-800 text-slate-300 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Você tem certeza?
                    </AlertDialog.Title>
                    <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua nota.
                    </AlertDialog.Description>
                    <div className="flex justify-center gap-[25px]">
                        <AlertDialog.Cancel asChild>
                            <button className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                Cancelar
                            </button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <button className="text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 flex flex-row h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" onClick={handleDeleteConfirmed}>
                                Deletar
                            </button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
}